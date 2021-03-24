<template>
  <div style="text-align: center">
    <a-card v-for="item in pics" :key="item.picId" hoverable style="width: 400px" class="card">
      <img slot="cover" alt="example" :src="item.thumbPic" @click="toPicDetail(item.picId)"/>
      <a-card-meta :title="item.authorName" :description="item.authorDesc">
        <a-avatar
            slot="avatar"
            :src="item.thumbAvatar"
            @click="toAuthorDetail(item.authorId)"
        />
      </a-card-meta>
    </a-card>
    <div>
      <a-button @click="getMorePics(1)">more</a-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      pageNums: 1,
      pics: [
        {
          picId: 1,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        },
      ]
    }
  },
  created() {
    this.getPics(1);
  },
  methods: {
    // 拿到count数目的图片
    getPics(count){
      this.pics = [
        {
          picId: 1,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        },
        {
          picId: 2,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        },
        {
          picId: 3,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        },
        {
          picId: 4,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        },
        {
          picId: 5,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        },
        {
          picId: 6,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        },
      ]
    },
    // 拿到count数目的图片
    getMorePics(count){
      this.pageNums++;
      let morePics = [
        {
          picId: 7,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        },
        {
          picId: 8,
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          thumbPic: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          authorName: 'author',
          authorId: 0,
          authorDesc: 'description'
        }
      ];
      this.pics.push.apply(this.pics, morePics);
    },
    // 跳转到具体图片页面
    toPicDetail(picId) {
      console.log(picId);
      this.$router.push({
        name: 'PicDetail',
        params: {
          id: picId
        }
      })
    },
    // 跳转到作者页面
    toAuthorDetail(authorId) {
      console.log(authorId);
      this.$router.push({
        name: 'User',
        params: {
          id: authorId
        }
      })
    }
  }
};
</script>

<style scoped>
.card {
  display: inline-block;
  margin: 20px;
  overflow: auto;
}

.ant-card-cover img {
  object-fit: cover;
  height: 250px;
}
</style>
