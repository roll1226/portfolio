<template>
  <div class="about">
    <div class="aboutnac">
      <div id="meBtn" v-bind:class="{activeMe: activeMe}">
        <p @click="me">Me</p>
      </div>
      <div id="skillBtn" v-bind:class="{activeSkill: activeSkill}">
        <p @click="skill">Skill</p>
      </div>
    </div>
    <div class="me" v-if="changeabout">
      <Me></Me>
    </div>
    <div class="skill" v-else>
      <Skill></Skill>
    </div>
  </div>
</template>

<script>
import Me from '@/components/Me.vue'
import Skill from '@/components/Skill.vue'

export default {
  components: {
    Me,
    Skill
  },
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
  .aboutnac {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 14vw;
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
  @media screen and (max-width: 760px){
    .aboutnac {
      top: 26.5vw;
    }
  }
}
</style>
