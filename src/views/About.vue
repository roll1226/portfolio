<template>
  <div class="about">
    <div class="aboutnac">
      <div @click="me" id="meBtn" v-bind:class="{activeMe: activeMe}">
        <p>Me</p>
      </div>
      <div @click="skill" id="skillBtn" v-bind:class="{activeSkill: activeSkill}">
        <p>Skill</p>
      </div>
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
      changeabout: true,
      activeMe: true,
      activeSkill: false
    }
  },
  methods: {
    me: function () {
      this.changeabout = true
      this.activeMe = true
      this.activeSkill = false
    },
    skill: function () {
      this.changeabout = false
      this.activeMe = false
      this.activeSkill = true
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
    top: 37vw;
    #meBtn p,
    #skillBtn p {
      cursor: pointer;
    }
    #meBtn p {
      transition: all 1s ease 0s;
      padding: 20px;
      border-radius: 20px;
      &:hover {
        box-shadow: 0 0 30px rgba(0,0,0,0.2);
      }
    }
    .activeMe {
      color: #0af;
    }
    #skillBtn p {
      transition: all 1s ease 0s;
      padding: 20px;
      border-radius: 20px;
      &:hover {
        box-shadow: 0 0 30px rgba(0,0,0,0.2);
      }
    }
    .activeSkill {
      color: #0af;
    }
  }
}
</style>
