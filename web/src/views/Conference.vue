<template>
  <div v-if="valid" class="app">
    <div class="nav">
      <a @click="$router.push('/')">Back</a>
      <p style="margin-left: 150px">
        Joined call {{ callId }}
      </p>
      <b-button style="height: 40px; width: 150px" variant="primary" @click="copyRoomUrl">
        {{ inviteButton }}
      </b-button>
    </div>
    <vue-jitsi-meet
      ref="jitsiRef"
      :domain="callDomain"
      :options="jitsiOptions"
    />
  </div>
</template>

<script>
import { JitsiMeet } from '@mycure/vue-jitsi-meet';

export default {
  name: "Conference",
  components: {
    VueJitsiMeet: JitsiMeet
  },
  props: {
    callId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      jitsiOptions: {
        width: '90%',
        height: '90%',
        roomName: this.callId,
        interfaceConfigOverwrite: {
          MOBILE_APP_PROMO: false,
          RECENT_LIST_ENABLED: false,
          SETTINGS_SECTIONS: ['devices', 'language', 'moderator'],
          SHOW_JITSI_WATERMARK: false,
          HIDE_INVITE_MORE_HEADER: true
        }
      },
      valid: false,
      inviteButton: "Copy Invite Link"
    }
  },
  computed: {
    callDomain() {
      return 'meet.jit.si'
    }
  },
  mounted() {
    console.log(this.$route)
    console.log(window.location.origin)
    if(!this.$route.query.jamboxID){
      this.$router.push({path: '/', query: { callId: this.callId}})
    } else {
      this.valid = true
    }
  },
  methods: {
    copyRoomUrl() {
      const el = document.createElement('textarea')
      el.value = window.location.origin + '/#' + this.$route.path
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      const selected =  document.getSelection().rangeCount > 0  ? document.getSelection().getRangeAt(0) : false
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      if (selected) {                                 
        document.getSelection().removeAllRanges()    
        document.getSelection().addRange(selected) 
      }
      this.inviteButton = "Copied!"
    }
  }
}
</script>

<style lang="scss" scoped>
.app{
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .nav {
    height: 10vh;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    padding: 30px 60px 0px 60px;

    p {
      flex: 5
    }
  }
}
</style>
