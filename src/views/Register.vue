<template>
  <div class="register">
    <a-row>
      <a-col :span="16" :offset="7">
        <h1>注册</h1>
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
      <a-form-item label="Note">
        <a-input
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
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
.register {
  margin: 80px 0 130px 0;
}
</style>