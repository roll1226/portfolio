<template>
    <div id="nav">
      <div class="straight" @click="nav_hamburger">
        <div class="straight1" v-bind:class="{ns1: nomalStraight, ms1: moveStraight}"></div>
        <div class="straight2" v-bind:class="{ns2: nomalStraight, ms2: moveStraight}"></div>
        <div class="straight3" v-bind:class="{ns3: nomalStraight, ms3: moveStraight}"></div>
      </div>

      <div class="msk" v-bind:class="{none: mskchang}" @click="nav_hamburger"></div>

      <div class="navmenu" v-bind:class="{navmenutrue: navmenutrue}">
        <div class="navmenuNum1" v-bind:class="{navmenutrue1: navmenutrue, navmenufales1: navmenufales}"></div>
        <div class="navmenuNum2" v-bind:class="{navmenutrue2: navmenutrue, navmenufales2: navmenufales}"></div>
        <div class="navmenuNum3" v-bind:class="{navmenutrue3: navmenutrue, navmenufales3: navmenufales}"></div>
        <div class="navmenuNum4" v-bind:class="{navmenutrue4: navmenutrue, navmenufales4: navmenufales}"></div>
        <div class="navmenuNum5" v-bind:class="{navmenutrue5: navmenutrue, navmenufales5: navmenufales}"></div>
        <div class="link" v-bind:class="{linktrue: navmenutrue, linkfales: navmenufales}">
          <div @click="nav_hamburger" id="linkH">
            <router-link to="/">Home</router-link>
          </div>
          <div @click="nav_hamburger" id="linkA">
            <router-link to="/about">About</router-link>
          </div>
          <div @click="nav_hamburger" id="linkW">
            <router-link to="/works">Works</router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      nomalStraight: true,
      moveStraight: false,
      none: false,
      navmenutrue: true,
      navmenufales: false,
      mskchang: true
    }
  },
  methods: {
    nav_hamburger: function () {
      this.nomalStraight = !this.nomalStraight
      this.moveStraight = !this.moveStraight
      this.none = !this.none
      this.navmenutrue = !this.navmenutrue
      this.navmenufales = !this.navmenufales
      this.mskchang = !this.mskchang
    }
  },
}
</script>

<style lang="scss">
@mixin nvanime($number, $esing) {
  animation: $number 800ms $esing 0s forwards;
}
@mixin nvchange($number, $time) {
  animation: $number 0.05s linear $time 3 alternate forwards;
}
#nav {
  .straight {
    position: fixed;
    z-index: 10;
    top: 2vw;
    right: 2vw;
    width: 100px;
    height: 80px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
  .straight1,
  .straight2,
  .straight3 {
    width: 75px;
    height: 4px;
    background: #000;
  }
  .ns1,
  .ms1,
  .ns3,
  .ms3 {
    position: relative;
    transform-origin: center center;
  }
  @keyframes straight1 {
    0% {
      transform: translateY(675%) rotate(45deg);
    }
    50% {
      transform: translateY(675%) rotate(-20deg);
    }
    100% {
      transform: translateY(0%) rotate(0deg);
    }
  }
  @keyframes straight3 {
    0% {
      transform: translateY(-675%) rotate(135deg);
    }
    50% {
      transform: translateY(-675%) rotate(-30deg);
    }
    100% {
      transform: translateY(0%) rotate(0deg);
    }
  }
  @keyframes straight2 {
    0% {
      transform: translateY(0%) rotate(0deg);
    }
    50% {
      transform: translateY(675%) rotate(0deg);
    }
    100% {
      transform: translateY(675%) rotate(45deg);
    }
  }
  @keyframes straight4 {
    0% {
      transform: translateY(0%) rotate(0deg);
    }
    50% {
      transform: translateY(-675%) rotate(0deg);
    }
    100% {
      transform: translateY(-675%) rotate(135deg);
    }
  }
  @keyframes straight5 {
     from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes straight6 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .ns1,{
    @include nvanime(straight1, cubic-bezier(.35,.88,.61,1.5));
  }
  .ns3 {
    @include nvanime(straight3, cubic-bezier(.35,.88,.61,1.5));
  }
  .ms1,{
    @include nvanime(straight2, cubic-bezier(0,0,.47,-0.69));
  }
  .ms3 {
    @include nvanime(straight4, cubic-bezier(0,0,.47,-0.69));
  }
  .ns2 {
    opacity: 0;
    animation: straight5 0s linear 430ms forwards;
  }
  .ms2 {
    opacity: 1;
    animation: straight6 0s linear 400ms forwards;
  }
  .navmenu {
    position: fixed;
    z-index: 8;
    top: 0;
    right: 0;
    width: 225px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .link {
      position: relative;
      z-index: 9;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: center;
      height: 35%;
      a {
        font-weight: bold;
        text-decoration: none;
        font-size: 35px;
        color: #2c3e50;
        &.router-link-exact-active {
          color: #03f;
        }
        &::after {
          content: "";
          display:  inline-block;
          position: absolute;
          transform: translateY(35px) translateX(-123px);
          width: 0px;
          height: 3px;
          background: #0cf;
          transition: all 150ms linear 0s;
        }
        &:hover {
          &::after{
            width: 120px;
          }
        }
      }
    }
    .navmenuNum1,
    .navmenuNum2,
    .navmenuNum3,
    .navmenuNum4,
    .navmenuNum5 {
      position: fixed;
      right: 0;
      width: 225px;
      height: 20vh;
      background: #dff;
    }
    .navmenuNum1 {
      top: 0;
    }
    .navmenuNum2 {
      top: 20vh;
    }
    .navmenuNum3 {
      top: 40vh;
    }
    .navmenuNum4 {
      top: 60vh;
    }
    .navmenuNum5 {
      top: 80vh;
    }
    @keyframes navtrue {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }
    @keyframes navfales {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .navmenufales1,
    .navmenufales2,
    .navmenufales3,
    .navmenufales4,
    .navmenufales5 {
      opacity: 0;
    }
    .navmenutrue1,
    .navmenutrue2,
    .navmenutrue3,
    .navmenutrue4,
    .navmenutrue5 {
      opacity: 1;
    }
    .navmenutrue1 {
      @include nvchange(navtrue, 0.2s);
    }
    .navmenutrue2 {
      @include nvchange(navtrue, 0.15s);
    }
    .navmenutrue3 {
      @include nvchange(navtrue, 0.1s);
    }
    .navmenutrue4 {
      @include nvchange(navtrue, 0.05s);
    }
    .navmenutrue5 {
      @include nvchange(navtrue, 0s);
    }
    .navmenufales1 {
      @include nvchange(navfales, 0s);
    }
    .navmenufales2 {
      @include nvchange(navfales, 0.05s);
    }
    .navmenufales3 {
      @include nvchange(navfales, 0.1s);
    }
    .navmenufales4 {
      @include nvchange(navfales, 0.15s);
    }
    .navmenufales5 {
      @include nvchange(navfales, 0.2s);
    }
    @keyframes linktrue {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
    @keyframes linkfalse {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .linktrue {
      opacity: 1;
      animation: linktrue .1s linear 0s forwards;
    }
    .linkfales {
      opacity: 0;
      animation: linkfalse .1s linear 0.55s forwards;
    }
  }
  @keyframes nonenav {
    from {
    z-index: 8;
    }
    to {
    z-index: -10;
    }
  }
  .navmenutrue {
    animation: nonenav 0s linear 0.55s forwards;
  }
  .msk {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background: #afafaf;
    opacity: .3;
    width: 100vw;
    height: 100vh;
  }
  .none {
    display: none;
  }
}
</style>
