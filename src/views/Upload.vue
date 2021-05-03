<template>
  <a-row class="upload-pic">
    <a-upload
        list-type="picture"
        class="upload-list-inline"
        :multiple="false"
        :customRequest="myUpload"
        :showUploadList="true"
        accept="image/jpeg,image/jpg,image/png"
    >
      <a-button>
        <a-icon type="upload"/>
        选择图片
      </a-button>
    </a-upload>
    <a-form-item label="name">
      <a-input v-model="picInfo.picBase.picName"/>
    </a-form-item>
    <a-form-item label="Description">
      <a-input v-model="picInfo.picDtl.picDescription"/>
    </a-form-item>
    <a-form-item label="sort">
      <a-checkbox-group
          v-model="sortValue"
          :options="sortNames"
          @change="onChange"
      />
    </a-form-item>
    <a-button @click="mySummit()" style="float: right; width: 300px">
      上传
    </a-button>
  </a-row>
</template>

<script>
import {upload} from "@/apis/pic.api";
import {getAllSortInfo} from "@/apis/category.api";

export default {
  data() {
    return {
      pic: {},
      picInfo: {
        picBase: {
          picAuthorId: null,
          picName: null,
        },
        picDtl: {
          picDescription: null,
          picArea: null,
          picDevice: null,
          picEdit: null,
        }
      },
      sortNames: [],
      sortValue: [],
    };
  },
  mounted() {
    getAllSortInfo().then(res => {
      if (res.code === 2000) {
        res.data.forEach(v => {
          this.sortNames.push(v.categoryName)
        })
      }
    })
  },
  computed: {
    userId() {
      return this.$store.state.userId
    }
  },
  methods: {
    onChange(checkedValues) {
      // console.log('checked = ', checkedValues);
      console.log('value = ', this.sortValue);
      // 通过选中的分类集合来请求图片
    },
    myUpload: function (options) {
      this.pic = options.file
    },
    mySummit: function () {
      this.picInfo.picBase.picAuthorId = this.userId
      this.picInfo.sorts = this.sortValue
      // console.log("userId:" + this.userId)
      let formData = new FormData()
      formData.append("bigPicDTO", JSON.stringify(this.picInfo))
      formData.append("file", this.pic)
      upload(formData).then(res => {
        if (res.code === 20000) {
          this.$router.push({name: 'User'})
        }
      })
    },
  }
};
</script>
<style scoped>
.upload-pic {
  padding: 20px;
}
</style>