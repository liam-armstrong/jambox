<template>
  <b-form inline>
    <b-form-input v-model="boxId" placeholder="JamBox Id" />
    <b-form-input v-model="callId" placeholder="Meeting Id" />
    <b-button variant="primary" @click="joinCall">
      Join
    </b-button>
  </b-form>
</template>

<script>
export default {
  name: "JoinForm",
  props: {
    initCallId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      boxId: "",
      callId: this.initCallId
    }
  },
  mounted() {
    console.log(this.callId)
  },
  methods: {
    joinCall() {
      // Make async calls to connect box to server at call id here
      this.$router.push({ path: `/call/${this.callId}`, query: { jamboxID: this.boxId } })
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  
  *{
    margin: 0px 3px;
  }
}
</style>