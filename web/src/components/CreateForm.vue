<template>
  <b-form inline>
    <b-form-input v-model="boxId" placeholder="JamBox Id" />
    <b-button variant="primary" @click="joinCall">
      Start
    </b-button>
  </b-form>
</template>

<script>
import { generateSlug } from 'random-word-slugs';

export default {
  name: "CreateForm",
  data() {
    return {
      boxId: ""
    }
  },
  methods: {
    joinCall() {
      // Make async calls to connect box to server at call id here
      // Get random id which maps to server id here
      let r = generateSlug(2, {format: "kebab", partsOfSpeech: ["adjective", "adjective"]} )
      r = r + '-jambox'
      this.$router.push({ path: `/call/${r}`, query: { jamboxID: this.boxId } })
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