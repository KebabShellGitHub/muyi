<template>
  <div>
    <div>
      <img style="width: 100%" src="../assets/fly.jpg"/>
    </div>
    <div class="author">
      <a-row>
        <a-col :span="4" style="text-align: center">
          <a-avatar :size="128" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    style="border: 2px solid cornflowerblue"/>
        </a-col>
        <a-col :span="16" style="padding-left: 20px; padding-right: 20px; font-size: 30px; word-break: break-word">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </a-col>
        <a-col :span="4">
          <a-row>
            <statistic :pic-id="this.picDetail.id"/>
          </a-row>
<!--          <a-row style="text-align: center; padding-top: 50px">-->
<!--            <a-button>download</a-button>-->
<!--          </a-row>-->
        </a-col>
      </a-row>
    </div>
    <div class="comm">
      <h1 style="margin: 40px">Comments</h1>
      <div class="single-comm" v-for="item in 5" :key="item">
        <a-row>
          <a-col :span="2" style="text-align: center; border-right: 1px solid gray">
            <a-row>
              <a-avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        style="border: 2px solid cornflowerblue"/>
            </a-row>
            <a-row style="text-align: center; margin-top: 10px">
              name
            </a-row>
          </a-col>
          <a-col :span="22" style="padding-left: 50px">
            <a-row style="font-size: 20px; word-break: break-word">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </a-row>
            <a-row style="text-align: right">
              time
            </a-row>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // 引入axios
import statistic from "@/components/statistic";

export default {
  name: "PicDetail",
  data() {
    return {
      pageNums: 1,
      picDetail: {
        id: 1
      },
      author: {},
      sorts: [],
      statistics: {},
      comments: [],
    }
  },
  components: {
    statistic
  },
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
    let picId = this.$route.params.id;
    this.picDetail.id = picId;
    console.log('id:' + this.$route.params.id);
    // 通过图片id拿到图片详细信息
    let picDetail = {};
    // 通过图片id拿到所属分类
    let sorts = [];
    // 通过图片id拿到统计数据（点赞数、评论数、点击量
    let statistics = {};
    // 通过图片id拿到前N条评论
    let comments = [];

  },
  methods: {
    /**
     * 通过图片id拿到前count条评论
     * @param picId
     * @param count
     */
    getComm(picId, count) {
      let picDetail = {};
      this.picDetail = picDetail;
    },
    /**
     * 通过图片id拿到更多count条评论
     * @param picId
     * @param count
     * @param pageNums
     */
    getMoreComm(picId, count, pageNums) {
      this.pageNums++;
      let moreComm = [];
      this.comments.push.apply(this.comments, moreComm);
    }
  }
};
</script>

<style scoped>
.author {
  margin-top: 20px;
  /*border: 1px solid gray;*/
  padding: 10px;
  border-radius: 5px;
}

.statistic {
  margin-top: 20px;
  padding: 10px 10px 10px 50px;
  /*border: 1px solid gray;*/
  border-radius: 5px;
}

.comm {
  margin-top: 20px;
  padding: 20px 40px 20px 40px;
}

.single-comm {
  margin-bottom: 10px;
  padding: 20px 40px 20px 40px;
  /*border: 1px solid gray;*/
}
</style>
