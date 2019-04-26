<template>
  <div class="about">
    <div class="aboutnac">
      <div @click="me">Me</div>
      <div @click="skill">Skill</div>
    </div>
    <div class="me" v-if="changeabout">
      <h1>
        鶴巻智康とは
      </h1>
      <p>
        私は一度大学に通っていたが、自分のやりたいことがうまく合わず中退をしました。<br>その後HAL東京に入学をしてプログラム、特にフロントエンドに興味を持ち多くの言語を学んでいます。
      </p>
    </div>
    <div class="skill" v-else>
      <h1>スキル</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      changeabout: true
    }
  },
  methods: {
    me: function () {
      this.changeabout = true
    },
    skill: function () {
      this.changeabout = false
    }
  }
}
</script>


<style lang="scss" scoped>
.about {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
  }
  p {
    margin:  20px;
    font-size: 20px;
  }
  .aboutnac {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
    position: absolute;
    top: 40vw;
  }
}
</style>
