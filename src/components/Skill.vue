<template>
  <div id="skillChart">
    <SkillChart></SkillChart>
  </div>
</template>

<script>
// インポート
import { Pie } from 'vue-chartjs'

// ローカルコンポーネント 棒グラフ
var SkillChart = {
  extends: Pie,
  mounted () {
      this.renderChart({
          // データ詳細
          datasets: [{
              // データ
              data: [35, 35, 10, 20],
              backgroundColor: [
              'rgb(255, 100, 130)',
              'rgb(100, 130, 255)',
              'rgb(130, 255, 100)',
              'rgb(230, 210, 85)'
            ]
          }],
          // ラベル
          labels: ["HTML", "CSS", "Vue.js", "Three.js"]
    });
  }
}

export default {
  name: 'Skill',
  components: {
    SkillChart
  }
}
</script>

<style lang="scss" scoped>
#skillChart {
  margin-top: 50%;
  width: 390px;
  height: 390px;
}
@media screen and (max-width: 760px) {
  #skillChart {
    margin-top: 10%;
    width: 300px;
    height: 280px;
  }
}
@media screen and (max-width: 320px) {
  #skillChart {
    margin-top: 17%;
  }
}
</style>
