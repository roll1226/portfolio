<template>
  <div class="works">
    <h1>作品集</h1>
    <div>
      <a href="https://roll1226.github.io/SOLAR-SYSTEM-INFORMATION-SSI/html/index.html" target="block">
        <img src="../../public/img/ssi.png" alt="SSIロゴ">
      </a>
    </div>
    <p>スマートフォン非対応(PCのスペックによっては上手く描画出来ない時があります)</p>
  </div>
</template>

<style lang="scss" scoped>
.works {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 7vw;
    margin-bottom: 10px;
  }
  a {
    margin: 30px;
    img {
      width: 60%;
      transition: all 1s ease 0s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
