<template>
  <div class="meCom">
    <h1>
      鶴巻智康とは
    </h1>
    <p>
      私は一度大学に通っていたが、自分のやりたいことがうまく合わず中退をしました。<br>その後HAL東京に入学をしてプログラム、特にフロントエンドに興味を持ち多くの言語を学んでいます。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Me'
}
</script>

<style lang="scss">
h1 {
  font-size: 50px;
}
p {
  margin:  20px;
  font-size: 20px;
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
