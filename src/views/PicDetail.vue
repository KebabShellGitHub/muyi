<template>
  <div>
    <h1>PicDetail</h1>
  </div>
</template>

<script>
import axios from "axios"; // 引入axios

export default {
  name: "PicDetail",
  created() {
    // axios
    //   .get("/mock/pics")
    //   .then(res => {
    //     // url即在mock.js中定义的
    //     console.log(res.data); // 打印一下响应数据
    //   })
    //   .catch(res => {
    //     alert("wrong");
    //   });
    console.log('id:' + this.$route.params.id)
  }
};
</script>

<style scoped></style>
