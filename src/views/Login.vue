<template>
  <div class="login">
    <a-row>
      <a-col :span="16" :offset="7">
        <h1>登录</h1>
      </a-col>
    </a-row>
    <a-form :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
      <a-form-item label="用户名">
        <a-input
            v-decorator="['userName', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="密码">
        <a-input
            type="password"
            v-decorator="['userPassword', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 16, offset: 8 }">
        <a-button type="primary" html-type="submit">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      let user = {
        userName: this.form.getFieldValue('userName'),
        userPassword: this.form.getFieldValue('userPassword')
      };
      // 登录
      this.$axios
      .post("/api/user/login", user)
      .then(response => {
        // console.log(response.data)
        let token = response.data.data;
        // console.log("token:" + token)
        sessionStorage.setItem("Token", token);
        this.$store.dispatch('updateToken', token);

        // 拿到用户信息，存入 sessionStorage
        this.$axios
        .get("/api/user/base", {
          headers: {
            Token: sessionStorage.getItem("Token")
          }
        })
        .then(response => {
          let userBase = response.data.data;
          // console.log("userBase:" + userBase)
          this.$store.dispatch('updateUserId', userBase.userId)
          sessionStorage.setItem("userId", userBase.userId);
          this.$store.dispatch('updateUserAvatar', userBase.userAvatarThumbUrl)
          sessionStorage.setItem("userAvatar", userBase.userAvatarThumbUrl);
          this.$store.dispatch('updateUserName', userBase.userName)
          sessionStorage.setItem("userName", userBase.userName);


          this.$router.push({name: 'Home'});
        }).catch(error => {
          console.log("userBase error");
        });

      }).catch(error => {
        console.log("login error");
      });

    },
  },
};
</script>

<style scoped>
.login {
  margin: 80px 0 250px 0;
}
</style>