<template>
  <a-layout class="layout">
    <a-layout-header
        :style="{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        backgroundColor: 'white'
      }"
    >
      <div class="ant-row">
        <div class="header-logo">
          <h1><a style="color: gray" @click="toHome()">木易 MUYI</a></h1>
        </div>
        <div class="header-user">
          <router-link v-if="loginFlag" to="/user"
          >
            <a-avatar size="small" style="backgroundColor:#87d068" icon="user"
            />
          </router-link>
          <div v-else>
            <a-button type="link" @click="toLogin()">
              登录
            </a-button>
            <a-button @click="toRegister()">
              注册
            </a-button>
          </div>
        </div>
        <a-menu
            theme="light"
            mode="horizontal"
            :default-selected-keys="['1']"
            :style="{ lineHeight: '64px' }"
        >
          <router-link to="/" class="route-link">首页</router-link>
          <router-link to="/hot" class="route-link">热门</router-link>
          <router-link to="/all" class="route-link">全部</router-link>
          <router-link to="/category" class="route-link">分类</router-link>
          <router-link to="/about" class="route-link">关于</router-link>
        </a-menu>
      </div>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view/>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      ©MUYI Created by KebabShell
    </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      loginFlag: false,
      user: {
        id: 1,
        userName: 'test',
        userAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      }
    };
  },
  created() {
    // 验证用户是否登录及token的验证及拿到user的信息
    let token = sessionStorage.getItem("Token");
    if (token && this.tokenVerify(token)) {
      this.loginFlag = true;
      this.getUser(token);
    } else {
      this.loginFlag = false;
    }
  },
  methods: {
    getUser(token) {
      this.user = {
        id: 1,
        userName: 'test1',
        userAvatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      }
    },
    tokenVerify(token) {
      return true;
    },
    toLogin(){
      this.$router.push('/login')
    },
    toRegister(){
      this.$router.push('/register')
    },
    // 跳转到分类页面
    toHome(){
      this.$router.push({
        name: 'Home',
      })
    }
  }
}
</script>

<style scoped>
.header-logo {
  float: left;
  width: 120px;
  height: 31px;
  line-height: 31px;
  margin: 16px 24px 16px 0;
  display: inline-block;
  text-align: center;
}
.route-link {
  margin-right: 20px;
  color: slategray;
}
.header-user {
  float: right;
  height: auto;
}
</style>
