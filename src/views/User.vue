<template>
  <div>
    <a-row>
      <a-col :span="8" style="text-align: center">
        <a-avatar :size="256" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  style="border: 2px solid cornflowerblue"/>
      </a-col>
      <a-col :span="10">
        <a-row>
          <h1 style="font-size: 30px">name</h1>
        </a-row>
        <a-row>
          <p style="word-break: break-word">desc</p>
        </a-row>
      </a-col>
      <a-col :span="6">
        <h2>sort</h2>
        <a-button v-for="item in 3" :key="item" class="sort-btn">test</a-button>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12" style="padding: 20px">
        <a-card hoverable title="title">
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </a-card>
      </a-col>
      <a-col :span="12" style="padding: 20px">
        待定
      </a-col>
    </a-row>
    <a-card v-for="item in 6" :key="item" hoverable style="width: 300px" class="card">
      <img slot="cover" alt="example" src="../assets/fly.jpg"/>
      <a-card-meta title="pic name" description="pic desc" />
    </a-card>
  </div>
</template>

<script>
export default {
  name: "User",
  data(){
    return{
      userId: 1,
    }
  }
};
</script>

<style scoped>
.sort-btn{
  margin-right: 10px;
}
.card {
  display: inline-block;
  margin: 20px;
  overflow: auto;
}
</style>
