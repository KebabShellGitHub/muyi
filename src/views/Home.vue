<template>
  <div>
    <div>
      <a-carousel autoplay>
        <!--     car:carousel走马灯     -->
        <div class="gradient">
          <!--    gradient:渐变    -->
          <img :id="carFirstPic.id" class="car-img" :src="carFirstPic.thumbPath" @click="toPicDetail(carFirstPic.id)"/>
        </div>
        <img v-for="item in carPics" :key="item.id" class="car-img" :src="item.thumbPath"
             @click="toPicDetail(item.id)"/>
      </a-carousel>
    </div>
    <!--  cpn:component  -->
    <div class="cpn-title">
      <h1>推荐</h1>
      <a-button type="link" size="small"
      >更多
        <a-icon type="right"/>
      </a-button>
    </div>
    <div class="all-card">
      <a-card v-for="item in recPics" :key="item.picId" hoverable style="width: 300px" class="card">
        <img slot="cover" alt="example" :src="item.thumbPic" @click="toPicDetail(item.picId)"/>
        <a-card-meta :title="item.authorName" :description="item.authorDesc">
          <a-avatar
              slot="avatar"
              :src="item.thumbAvatar"
              @click="toAuthorDetail(item.authorId)"
          />
        </a-card-meta>
      </a-card>
    </div>
    <div class="cpn-title">
      <h1>今日热门</h1>
      <a-button type="link" size="small"
      >更多
        <a-icon type="right"/>
      </a-button>
    </div>
    <div class="all-card">
      <a-card v-for="item in hotPics" :key="item.picId" hoverable style="width: 300px" class="card">
        <img slot="cover" alt="example" :src="item.thumbPic" @click="toPicDetail(item.picId)"/>
        <a-card-meta :title="item.authorName" :description="item.authorDesc">
          <a-avatar
              slot="avatar"
              :src="item.thumbAvatar"
              @click="toAuthorDetail(item.authorId)"
          />
        </a-card-meta>
      </a-card>
    </div>
    <div class="cpn-title">
      <h1>{{ hotSorts[0].sortName }}</h1>
      <a-button type="link" size="small" @click="toCategory(hotSorts[0].sortName)"
      >更多
        <a-icon type="right"/>
      </a-button>
    </div>
    <div class="all-card">
      <a-card v-for="item in hotSort1Pics" :key="item.picId" hoverable style="width: 300px" class="card">
        <img slot="cover" alt="example" :src="item.thumbPic" @click="toPicDetail(item.picId)"/>
        <a-card-meta :title="item.authorName" :description="item.authorDesc">
          <a-avatar
              slot="avatar"
              :src="item.thumbAvatar"
              @click="toAuthorDetail(item.authorId)"
          />
        </a-card-meta>
      </a-card>
    </div>
    <div class="cpn-title">
      <h1>{{ hotSorts[1].sortName }}</h1>
      <a-button type="link" size="small"
      >更多
        <a-icon type="right"/>
      </a-button>
    </div>
    <div class="all-card">
      <a-card v-for="item in hotSort2Pics" :key="item.picId" hoverable style="width: 300px" class="card">
        <img slot="cover" alt="example" :src="item.thumbPic" @click="toPicDetail(item.picId)"/>
        <a-card-meta :title="item.authorName" :description="item.authorDesc">
          <a-avatar
              slot="avatar"
              :src="item.thumbAvatar"
              @click="toAuthorDetail(item.authorId)"
          />
        </a-card-meta>
      </a-card>
    </div>
    <div class="cpn-title">
      <h1>{{ hotSorts[2].sortName }}</h1>
      <a-button type="link" size="small"
      >更多
        <a-icon type="right"/>
      </a-button>
    </div>
    <div class="all-card">
      <a-card v-for="item in hotSort3Pics" :key="item.picId" hoverable style="width: 300px" class="card">
        <img slot="cover" alt="example" :src="item.thumbPic" @click="toPicDetail(item.picId)"/>
        <a-card-meta :title="item.authorName" :description="item.authorDesc">
          <a-avatar
              slot="avatar"
              :src="item.thumbAvatar"
              @click="toAuthorDetail(item.authorId)"
          />
        </a-card-meta>
      </a-card>
    </div>
    <div class="cpn-title">
      <h1>热门摄影师</h1>
      <a-button type="link" size="small"
      >更多
        <a-icon type="right"/>
      </a-button>
    </div>
    <div class="all-card-er">
      <a-card v-for="item in hotAuthors" :key="item.id" hoverable style="width: 300px" class="card"
              @click="toAuthorDetail(item.id)">
        <a-card-meta :title="item.authorName" :description="item.authorDesc">
          <a-avatar
              slot="avatar"
              :src="item.thumbAvatar"
          />
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      // 走马灯第一张图片
      carFirstPic: {
        id: 0,
        thumbPath: 'http://img.kebabshell.space/lm.jpg'
      },
      // 走马灯剩下的图片
      carPics: [],
      // 推荐的4个图片
      recPics: [],
      // 今日热门的4个图片
      hotPics: [],
      // 3个热门分类
      hotSorts: [],
      // 热门分类1的4个图片
      hotSort1Pics: [],
      // 热门分类2的4个图片
      hotSort2Pics: [],
      // 热门分类3的4个图片
      hotSort3Pics: [],

      // 摄影师
      // author: {
      //   id: 0,
      //   name: '',
      //   avatar: ''
      // },
      // 热门摄影师的4个
      hotAuthors: []
    };
  },
  created() {
    this.getCarPics();
    this.getRecPics();
    this.getHotPics();
    this.getHotSorts();
    this.getHotAuthor();
  },
  methods: {
    // 拿到走马灯的图片
    getCarPics() {
      // axios请求拿到 getCarPics
      let getCarPics = [
        {
          id: 1,
          thumbPath: 'http://img.kebabshell.space/lm.jpg'
        },
        {
          id: 2,
          thumbPath: 'http://img.kebabshell.space/lm.jpg'
        },
        {
          id: 3,
          thumbPath: 'http://img.kebabshell.space/lm.jpg'
        },
        {
          id: 4,
          thumbPath: 'http://img.kebabshell.space/lm.jpg'
        }
      ];
      this.carFirstPic = getCarPics.shift();
      this.carPics = getCarPics;
    },
    // 拿到推荐图片
    getRecPics() {
      this.recPics = [
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
      ];
    },
    // 拿到热门图片
    getHotPics() {
      this.hotPics = [
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
      ];
    },
    // 拿到3个热门分类信息，再拿到分类下的热门图片
    getHotSorts() {
      // console.log('hotSorts');
      this.hotSorts = [
        {
          id: 0,
          sortName: 'sort'
        },
        {
          id: 1,
          sortName: 'sort'
        },
        {
          id: 2,
          sortName: 'sort'
        },
      ];
      this.hotSort1Pics = this.getHotSortPics(this.hotSorts[0].id);
      this.hotSort2Pics = this.getHotSortPics(this.hotSorts[1].id);
      this.hotSort3Pics = this.getHotSortPics(this.hotSorts[2].id);
    },
    // 拿到某个分类的4张热门图片
    getHotSortPics(sortId) {
      // 根据分类id来拿到这个分类的4张热门图片
      return [
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
      ];
    },
    // 拿到4个热门摄影师的信息
    getHotAuthor() {
      this.hotAuthors = [
        {
          id: 1,
          authorName: 'test',
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          authorDesc: 'description'
        },
        {
          id: 2,
          authorName: 'test',
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          authorDesc: 'description'
        },
        {
          id: 3,
          authorName: 'test',
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          authorDesc: 'description'
        },
        {
          id: 4,
          authorName: 'test',
          thumbAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          authorDesc: 'description'
        },
      ]
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
    },
    // 跳转到分类页面
    toCategory(sortName){
      this.$router.push({
        name: 'Category',
        params: {
          sortName: sortName
        }
      })
    }
  }
};
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  height: 550px;
}

.gradient::before {
  background: rgba(0, 0, 0, 0) linear-gradient(transparent, #1a1c1e) repeat scroll 0 0;
  bottom: 0;
  content: "";
  display: block;
  height: 20%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 10;
}

.car-img {
  height: 550px;
  width: 100%;
  object-fit: cover;
}

.cpn-title {
  width: 20%;
  margin-top: 20px;
  border-bottom: 2px solid #736991;
  padding-left: 10px;
}

.cpn-title h1 {
  display: inline-block;
}

.card {
  display: inline-block;
  margin: 20px;
  overflow: auto;
}

.ant-card-cover img {
  object-fit: cover;
  height: 150px;
}
</style>
