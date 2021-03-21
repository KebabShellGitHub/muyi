<template>
  <a-row>
    <a-col :span="8" class="part">
      <a-icon style="font-size: 25px" type="like"/>
      <h2> {{ this.statistics.likes }}</h2>
    </a-col>
    <a-col :span="8" class="part">
      <a-icon style="font-size: 25px" type="file-text"/>
      <h2> {{ this.statistics.comm }}</h2>
    </a-col>
    <a-col :span="8" class="part">
      <a-icon style="font-size: 25px" type="eye"/>
      <h2> {{ this.statistics.hits }}</h2>
    </a-col>
  </a-row>
</template>

<script>
// 图片的统计数据
export default {
  name: "statistic",
  data() {
    return {
      statistics: {
        hits: 0,
        likes: 0,
        comm: 0,
      }
    }
  },
  props: ["picId"],
  created() {
    console.log("picId:" + this.picId);
    this.getStatistics();
  },
  methods: {
    getStatistics() {
      let statistics = {
        hits: 1,
        likes: 2,
        comm: 3
      };
      this.statistics = statistics;

    }
  }
}
</script>

<style scoped>
.part {
  text-align: center;
}
</style>