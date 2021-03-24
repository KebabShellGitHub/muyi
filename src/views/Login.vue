<template>
  <div class="login">
    <a-row>
      <a-col :span="16" :offset="7">
        <h1>登录</h1>
      </a-col>
    </a-row>
    <a-form :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 8 }" @submit="handleSubmit">
      <a-form-item label="Note">
        <a-input
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Note">
        <a-input
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 16, offset: 8 }">
        <a-button style="margin-right: 20px">注册</a-button>
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
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
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