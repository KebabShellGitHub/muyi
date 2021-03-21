<template>
  <div>
    <a-row>
      <a-col :span="20" style="text-align: center">
        <a-card v-for="item in pics" :key="item.picId" hoverable style="width: 250px" class="card">
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
      </a-col>
      <a-col :span="4">
        <div class="sortPart">
          <h1>分类</h1>
          <a-checkbox-group
              v-model="sortValue"
              :options="sortNames"
              @change="onChange"
          />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      pageNums: 1,
      sortNames: ['Apple', 'Pear', 'Orange', 'A','B','C','D','E'],
      sortValue: [],
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
    let sortName = this.$route.params.sortName;
    let sortNames = [];
    if (typeof (sortName) == 'undefined'){
      // 从菜单栏过来的，没有带分类信息
      console.log("undefined")
      // 那就请求并渲染全部热门数据
    }else {
      // 有带分类信息
      console.log("sortName:" + sortName)
      sortNames.push(sortName);
      // 请求并渲染此分类集合的热门数据
    }
    this.getPics(sortNames, 1);
  },
  methods: {
    // 分类集合变化时
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      console.log('value = ', this.sortValue);
      // 通过选中的分类集合来请求图片
      this.getPics(this.sortValue, 1);
    },
    // 拿到分类集合的count数目的图片
    getPics(sortNames, count){
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
        name: 'Author',
        params: {
          id: authorId
        }
      })
    }
  },
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
.sortPart{
  position: fixed;
  width: 200px;
  margin-top: 20px;
  padding: 30px 20px 80px 20px;
  border: 2px solid gray;
  border-radius: 10px;
}
</style>
