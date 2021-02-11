<template>
  <div class="app">
    <div class="nav">
      <a v-if="state!=='none'" @click="state='none'">Back</a>
    </div>
    <div class="home">
      <h1>Welcome to JamBox</h1>
      <student-form v-if="state==='student'" />
      <teacher-form v-else-if="state==='teacher'" />
      <div v-else class="btns">
        <b-button @click="state='student'">
          Student
        </b-button>
        <b-button @click="state='teacher'">
          Teacher
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherForm from '../components/TeacherForm.vue'
import StudentForm from '../components/StudentForm.vue'

export default {
  name: "Home",
  components: {
    StudentForm,
    TeacherForm
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
