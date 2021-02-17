<template>
  <div class="app">
    <div class="nav">
      <a v-if="state!==''" @click="state=''">Back</a>
    </div>
    <div class="home">
      <h1>Welcome to JamBox</h1>
      <join-form
        v-if="state === 'join'"
        :init-call-id="$route.query.callId"
      />
      <create-form v-else-if="state==='create'" />
      <div v-else class="btns">
        <b-button @click="state='create'">
          Create Call
        </b-button>
        <b-button variant="primary" @click="state='join'">
          Join Call
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import CreateForm from '../components/CreateForm.vue'
import JoinForm from '../components/JoinForm.vue'

export default {
  name: "Home",
  components: {
    JoinForm,
    CreateForm
  },
  data() {
    return {
      state: '',
    }
  },
  mounted() {
    if(this.$route.query.callId){
      this.state = 'join'
    }
  }
}
</script>

<style lang="scss" scoped>
.app{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  padding-bottom: 10vh;

  .btns {
    button {
      margin-left: 10px;
    }
  }
}

.nav {
  padding: 30px;
  height: 10vh;
}
</style>
