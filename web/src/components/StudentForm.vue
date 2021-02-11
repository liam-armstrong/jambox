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
  name: "StudentForm",
  data() {
    return {
      boxId: "",
      callId: ""
    }
  },
  methods: {
    joinCall() {
      // Make async calls to connect box to server at call id here
      this.$router.push({ path: `/call/${this.callId}` })
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