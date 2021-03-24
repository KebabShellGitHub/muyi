<template>
  <div>
    <a-row>
      <a-col :span="8" style="text-align: center">
        <a-avatar :size="256" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style="border: 2px solid cornflowerblue"/>
      </a-col>
      <a-col :span="16" style="word-break: break-word;">
        <h1 style="font-size: 30px">name</h1>
        <p>test</p>
      </a-col>
    </a-row>
    <a-row class="qr-main">
      <a-col :span="4" :offset="6" >
        <img src="../assets/fly.jpg" class="qr" />
      </a-col>
      <a-col :span="4" :offset="2">
        <img src="../assets/fly.jpg" class="qr" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.qr-main{
  margin-top: 100px;
}
.qr{
  width: 100%;
}
</style>
