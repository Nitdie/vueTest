<script setup lang="ts">
import {ref} from "vue";
import AuthenticationService from "@/services/AuthenticationService";
import store from "@/store";
import {onMounted} from "vue";

onMounted(()=>{
  const LocalUserInfo = localStorage.getItem('userInfo')
  if(LocalUserInfo != undefined)
    console.log(`User-${LocalUserInfo} Already Logged In`)
})

// 使用全局interface
const formData: LoginData = {
  account: '',
  password: ''
}
// 注意 formData和form的区别 interface不可直接用于ref
let form = ref(formData)

// TS内form是ref元素  TS外form是object
async function login(){
  try{
     const response = await AuthenticationService.login({
        account:form.value.account,
        password:form.value.password
    })
    // 登陆成功    本地保存token 存在问题：用户可以在本地修改token
    let token:string = form.value.account
    localStorage.setItem("userInfo",token)
    store.commit("setUserInfo",token)
    alert('Login Successful')
  }
    catch(error){
         alert('Invalid Account or Password')
    }  //Todo: 添加Logout按钮 点击后清空localstorage和state，并重定向到登陆页面
}
</script>

<template>
  <div class="layout">
    <h1>LOGIN</h1>
    <el-form :model="form" label-width="70px">
      <el-form-item label="Account ">
        <el-input v-model="form.account"/>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password" @keyup.enter.native="login"/>
      </el-form-item>
      <el-form-item>
        <el-button
            plain style="margin-left:40px;" @click="login">Submit</el-button>
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