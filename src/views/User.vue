<template>
  <div v-if="userBase !== null">
    <a-row>
      <a-col :span="8" style="text-align: center">
        <a-avatar :size="256" :src="'/api/pic/' + userDtl.userAvatarUrl"
                  style="border: 2px solid cornflowerblue"/>
      </a-col>
      <a-col :span="10">
        <a-row>
          <h1 style="font-size: 30px">{{ userBase.userName }}</h1>
        </a-row>
        <a-row>
          <p style="word-break: break-word">{{ userBase.userIntroduction }}</p>
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
          <a-button v-if="ownFlag" style="float: right">test</a-button>
        </a-card>
      </a-col>
      <a-col v-if="ownFlag" :span="12" style="padding: 20px">
        <a-row>
          <a-button style="margin: 5px" @click="toUpload()">添加图片</a-button>
        </a-row>
        <a-row>
          <a-button @click="exit" style="margin: 5px">退出登录</a-button>
        </a-row>
      </a-col>
    </a-row>
    <!-- pic -->
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
    <div style="text-align: center">
      <a-button @click="getMoreUserPic">more</a-button>
    </div>
  </div>
</template>

<script>
import {getUser} from "@/apis/user.api";
import {getUserPic} from "@/apis/pic.api";

export default {
  name: "User",
  data() {
    return {
      userBase: null,
      userDtl: null,
      pageNum: 1,
      count: 3,
      pics: []
    }
  },
  mounted() {
    this.userPageInit()
  },
  computed: {
    ownerUserId() {
      return this.$store.state.userId
    },
    nowUserId() {
      return this.$route.params.id
    },
    // 判断是不是自己
    ownFlag() {
      let userId = sessionStorage.getItem("userId")
      // console.log("userId:" + userId)
      if (typeof (this.nowUserId) === "undefined" || this.nowUserId === this.ownerUserId) {
        // this.actUserId = userId
        return true
      }
      // console.log("nowUserId:" + this.nowUserId)
      // 这里nowUserId是整数类型，ownerUserId是字符串
      return this.nowUserId == userId
    }
  },
  methods: {
    userPageInit: async function () {
      if (this.ownFlag) {
        await getUser().then(res => {
          if (res.code === 20000) {
            this.userBase = res.data.userBase
            this.userDtl = res.data.userDtl
          } else if (res.code === 20003) {
            this.$message.info("登录已过期")
            sessionStorage.clear()
            this.$store.dispatch("updateToken", null)
            this.$router.push({name: "Home"})
          }
        })
      } else {
        await getUser(this.nowUserId).then(res => {
          this.userBase = res.data.userBase
          this.userDtl = res.data.userDtl
        })
      }
      let userId = this.ownFlag ? this.ownerUserId : this.nowUserId
      await getUserPic(userId, this.pageNum, this.count).then(res => {
        if (res.code === 20000) {
          this.pageNum++
          this.pics = res.data
        }
      })
    },
    getMoreUserPic: function () {
      let userId = this.ownFlag ? this.ownerUserId : this.nowUserId
      getUserPic(userId, this.pageNum, this.count).then(res => {
        if (res.code === 20000) {
          this.pageNum++
          this.pics.push.apply(this.pics, res.data)
        }
      })
    },
    toUpload() {
      this.$router.push({name: 'Upload'})
    },
    exit: function (){
      sessionStorage.clear()
      this.$store.dispatch("updateToken", null)
      this.$message.info("已退出")
      this.$router.push({name: "Home"})
    }
  }
};
</script>

<style scoped>
.sort-btn {
  margin-right: 10px;
}

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
