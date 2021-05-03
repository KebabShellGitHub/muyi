<template>
  <div style="text-align: center">
    <a-card v-for="item in pics" :key="item.pic.id" hoverable style="width: 400px" class="card">
      <img slot="cover" alt="example"
           :src="'/api/pic/' + item.pic.picThumbUrl"
           @click="toPicDetail(item.pic.id)"/>
      <a-card-meta :title="item.author.userName" :description="item.author.userIntroduction">
        <a-avatar
            slot="avatar"
            :src="'/api/pic/' + item.author.userAvatarThumbUrl"
            @click="toAuthorDetail(item.author.userId)"
        />
      </a-card-meta>
      <div style="margin-top: 20px;">
        <div class="carPart">
          <a-icon type="eye"/>
          {{ item.statistic.hitCount }}
        </div>
        <div class="carPart">
          <a-icon type="file-text"/>
          {{ item.statistic.commentCount }}
        </div>
        <div class="carPart">
          <a-icon type="like"/>
          {{ item.statistic.likeCount }}
        </div>
      </div>
    </a-card>
    <div>
      <a-button @click="getMorePics">more</a-button>
    </div>

  </div>
</template>

<script>
import {getAllHotPics} from "@/apis/pic.api";
import {picDetail, authorDetail} from "@/apis/to.api";

export default {
  name: "Hot",
  data() {
    return {
      pageNum: 1,
      count: 3,
      pics: []
    }
  },
  mounted() {
    getAllHotPics(this.pageNum, this.count).then(res => {
      this.pics = res.data
      this.pageNum++
    })
  },
  methods: {
    // 拿到更多图片
    getMorePics() {
      getAllHotPics(this.pageNum, this.count).then(res => {
        if (Array.isArray(res.data) && res.data.length !== 0) {
          this.pics.push.apply(this.pics, res.data);
          this.pageNum++;
        }
      })
    },
    // 跳转到具体图片页面
    toPicDetail(picId) {
      picDetail(picId)
    },
    // 跳转到作者页面
    toAuthorDetail(authorId) {
      // console.log(authorId);
      authorDetail(authorId)
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

.carPart {
  display: inline;
  margin: 10px;
}
</style>
