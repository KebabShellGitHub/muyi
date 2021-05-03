<template>
  <a-row>
    <a-col :span="8" class="part">
      <a-icon :style="likeFlag ? likeTrueStyle : likeFalseStyle" type="like" @click="likeChange"/>
      <h2> {{ this.statistics.likeCount }}</h2>
    </a-col>
    <a-col :span="8" class="part">
      <a-icon style="font-size: 25px" type="file-text"/>
      <h2> {{ this.statistics.commentCount }}</h2>
    </a-col>
    <a-col :span="8" class="part">
      <a-icon style="font-size: 25px" type="eye"/>
      <h2> {{ this.statistics.hitCount }}</h2>
    </a-col>
  </a-row>
</template>

<script>
// 图片的统计数据
export default {
  name: "statistic",
  data() {
    return {
      statistics: {},
      likeFlag: false,
      likeTrueStyle: {
        fontSize: "25px",
        color: "indianred"
      },
      likeFalseStyle: {
        fontSize: "25px",
      }
    }
  },
  props: ["picId"],
  created() {
    // console.log("picId:" + this.picId);
    this.getPicStatistic(this.picId).then(res => {
      this.statistics = res.data.data
    })
    if (this.getUserId !== null) {
      this.getLikeFlag(this.getUserId, this.picId).then(res => {
        if (res.data.data === true)
          this.likeFlag = true
      })
    }
  },
  computed: {
    getUserId() {
      return this.$store.state.userId
    },
    getToken() {
      return this.$store.state.token
    }
  },
  methods: {
    getPicStatistic: function (picId) {
      return this.$axios.get("/api/pic/statistic", {
        params: {
          picId: picId
        }
      })
    },
    getLikeFlag: function (userId, picId) {
      return this.$axios.get("/api/like/flag?userId=" + userId + "&picId=" + picId)
    },
    likeChange: function () {
      if (this.getToken !== null) {
        let likeBase = {
          likePicId: this.picId,
          likeUserId: this.getUserId
        }
        if (this.likeFlag) { // 取消
          this.$axios.post("/api/like/cancel", likeBase, {
            headers: {
              Token: this.getToken
            }
          }).then(res => {
            if (res.data.code === 20000) {
              this.likeFlag = false
              this.statistics.likeCount--
            }else {
              console.log("error msg:" + res.data.msg)
            }
          })
        } else { // 点赞
          this.$axios.post("/api/like/add", likeBase, {
            headers: {
              Token: this.getToken
            }
          }).then(res => {
            if (res.data.code === 20000) {
              this.likeFlag = true
              this.statistics.likeCount++
            }else {
              console.log("error msg:" + res.data.msg)
            }
          })
        }
      } else {
        console.log("no login")
      }
    }
  }
}
</script>

<style scoped>
.part {
  text-align: center;
}
</style>