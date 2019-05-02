<template>
  <div class="meCom">
    <h1>
      roll1226とは
    </h1>
    <p>
      HAL東京に在学中(2年生)。<br>駆け出しフロントエンドエンジニア。
    </p>
    <div id="sns">
      <div id="github">
        <a href="https://github.com/roll1226" target="block">
          Github
        </a>
      </div>
      <div id="twitter">
        <a href="https://twitter.com/Tonotomo1226" target="block">
          Twiiter
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me'
}
</script>


<style lang="scss" scoped>
h1 {
  font-size: 50px;
  margin-top: 20%;
}
p {
  margin:  20px;
  font-size: 20px;
}
#sns {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 20%;
  a {
    padding: 20px;
    border-radius: 20px;
    transition: all 1s ease 0s;
    text-decoration: none;
    color: #000;
    &:hover {
      box-shadow: 0 0 30px rgba(0,0,0,0.2);
    }
  }

  #github {
    a {
      &:hover {
        color: #fff;
        background: #777;
      }
    }
  }
  #twitter {
    a {
      &:hover {
        color: #fff;
        background: #0af;
      }
    }
  }
}
@media screen and (max-width: 760px){
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 15px;
  }
}
</style>
