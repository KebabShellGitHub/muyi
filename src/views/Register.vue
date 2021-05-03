<template>
  <div class="register">
    <a-row>
      <a-col :span="16" :offset="7">
        <h1>注册</h1>
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
            v-decorator="['password', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="二次密码">
        <a-input
            type="password"
            v-decorator="['password_second', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="简介">
        <a-input
            v-decorator="['introduction', { rules: [{ required: false, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="性别">
        <a-input
            v-decorator="['gender', { rules: [{ required: false, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input
            v-decorator="['email', { rules: [{ required: false, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 16, offset: 8 }">
        <a-button type="primary" html-type="submit">
          注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import {register} from "@/apis/user.api";

export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, {name: 'coordinated'}),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      // userName: this.form.getFieldValue('userName'),
      //     userPassword: this.form.getFieldValue('userPassword')
      // public class BigUserDTO {
      //   private AuthUser authUser;
      //   private UserBase userBase;
      //   private UserDtl userDtl;
      // }

      let user = {
        authUser: {
          userName: this.form.getFieldValue('userName'),
          userPassword: this.form.getFieldValue('password')
        },
        userBase: {
          userName: this.form.getFieldValue('userName'),
          userIntroduction: this.form.getFieldValue('introduction'),
        },
        userDtl: {
          userGender: null,
          userEmail: this.form.getFieldValue('email'),
        }
      }
      register(user).then(res => {
        if (res.code === 20000){
          this.$router.push({ name: "Login" })
        }else {
          this.$message.info(res.msg)
        }
      })
    },
  },
};
</script>

<style scoped>
.register {
  margin: 80px 0 130px 0;
}
</style>