<template>
  <div id="skillChart">
    <SkillChart :width="300" :height="280"></SkillChart>
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
#pie-chart {
  height: 500vw;
}
#skillChart {
  margin-top: 30%;
}
@media screen and (max-width: 760px) {
  #skillChart {
    margin-top: 10%;
  }
}
</style>
