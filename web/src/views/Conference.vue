<template>
  <div class="app">
    <h1>
      Joined call {{ callId }}
    </h1>
    <div>
      Jitsi lives here
    </div>
  </div>
</template>

<script>
export default {
  name: "Conference",
  props: {
    callId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      state: "none",
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

  div{
    background: grey;
    height: 90%;
    width: 90%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>
