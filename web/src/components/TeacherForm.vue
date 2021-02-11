<template>
  <b-form inline>
    <b-form-input v-model="boxId" placeholder="JamBox Id" />
    <b-button variant="primary" @click="joinCall">
      Start
    </b-button>
  </b-form>
</template>

<script>
export default {
  name: "TeacherForm",
  data() {
    return {
      boxId: ""
    }
  },
  methods: {
    joinCall() {
      // Make async calls to connect box to server at call id here
      // Get random id which maps to server id here
      let r = Math.random().toString(36).substr(2, 8);
      this.$router.push({ path: `/call/${r}` })
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