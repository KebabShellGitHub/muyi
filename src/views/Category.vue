<template>
  <div>
    <a-row>
      <a-col :span="20" style="text-align: center">
        <a-card v-for="item in pics" :key="item.pic.id" hoverable style="width: 250px" class="card">
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
import {getPicInSorts} from "@/apis/pic.api";
import {getAllSortInfo} from "@/apis/category.api";
import {picDetail, authorDetail} from "@/apis/to.api";

export default {
  name: "Category",
  data() {
    return {
      pageNum: 1,
      count: 3,
      pics: [],
      sortNames: [],
      sortValue: [],
    }
  },
  mounted() {
    let sortName = this.$route.params.sortName;
    let sortNames = [];
    if (typeof (sortName) == 'undefined') {
      // 从菜单栏过来的，没有带分类信息
      // console.log("undefined")
      // 那就请求并渲染全部热门数据
    } else {
      // 有带分类信息
      // console.log("sortName:" + sortName)
      sortNames.push(sortName);
      // 请求并渲染此分类集合的热门数据
    }
    getPicInSorts(sortNames, 1, this.count).then(res => {
      if (res.code === 20000) {
        this.pageNum = 2
        this.pics = res.data
      }
    })
    getAllSortInfo().then(res => {
      let categoryBaseList = res.data;
      categoryBaseList.forEach(v => {
        this.sortNames.push(v.categoryName)
      })
    })
  },
  methods: {
    // 分类集合变化时
    onChange(checkedValues) {
      // console.log('checked = ', checkedValues);
      // console.log('value = ', this.sortValue);
      // 通过选中的分类集合来请求图片
      getPicInSorts(this.sortValue, 1, this.count).then(res => {
        if (res.code === 20000) {
          this.pageNum = 2
          this.pics = res.data
        }
      })
    },
    // 拿到更多图片
    getMorePics() {
      getPicInSorts(this.sortValue, this.pageNum, this.count).then(res => {
        if (res.code === 20000 && Array.isArray(res.data) && res.data.length !== 0) {
          this.pageNum++
          this.pics.push.apply(this.pics, res.data);
        }
      })
    },
    // 跳转到具体图片页面
    toPicDetail(picId) {
      picDetail(picId)
    },
    // 跳转到作者页面
    toAuthorDetail(authorId) {
      authorDetail(authorId)
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

.sortPart {
  position: fixed;
  width: 200px;
  margin-top: 20px;
  padding: 30px 20px 80px 20px;
  border: 2px solid gray;
  border-radius: 10px;
}
</style>
