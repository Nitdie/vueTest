<script setup lang="ts">
import {ref} from "vue";
import AuthenticationService from "@/services/AuthenticationService";

// 使用全局interface
const formData: LoginData = {
  account: '',
  password: ''
}
// 注意 formData和form的区别 interface不可直接用于ref
let form = ref(formData)

// TS内form是ref元素  TS外form是object
async function register(){
   const response = await AuthenticationService.register({
      account:form.value.account,
      password:form.value.password
  })
  console.log(`${form.value.account}:${form.value.password}`)
  console.log(response.data)
}

</script>

<template>
  <div class="layout">
    <h1>REGISTER</h1>
    <el-form :model="form" label-width="70px">
      <el-form-item label="Account ">
        <el-input v-model="form.account"/>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" @keyup.enter.native="register"/>
      </el-form-item>
      <el-form-item>
        <el-button
            plain style="margin-left:40px;" @click="register">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="sass">
.layout
  display: block
  margin: auto
  padding: 10px
  width: 300px
  background-color: #f1f1f1
  box-shadow: 0 0 1px 1px #636363
h1
  text-align: center

el-form
  height: 100px



</style>