<script setup lang="ts">
import {inject, ref} from "vue";
import store from "@/store";

let inputMessage = ref('')
const socket = inject("socket")

socket.on("receive_message",(message)=>{
  console.log(message)
})
async function submitMessage(){
  if(inputMessage.value){
    const message = {
      user:store.state.userInfo,
      room:store.state.currentRoom,
      text:inputMessage.value,
    }
    inputMessage.value = ''
    await socket.emit("send_message",message)
  }
}


</script>

<template>
  <el-container>
    <el-header>
      <div class="head-container">
        <el-button round class="logout-button">Log Out</el-button>
      </div>
    </el-header>
    <el-main>
      <div class="main-container">
        <div class="chat-container">
          <header>
            ROOM1
          </header>
          <main>
            BODY
          </main>
          <footer>
            <el-input v-model="inputMessage" @keyup.enter.enter="submitMessage"/>
            <el-button @click="submitMessage">Send</el-button>
          </footer>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped lang="sass">
.logout-button
  display: flex

.head-container
  display: flex
  justify-content: center
  background-color: cadetblue
  padding: 10px

.main-container
  display: flex
  justify-content: center
  background-color: #c3d7d7

.chat-container
  display: flex
  flex-direction: column
  justify-content: center
  width: 70vw

  header
    background-color: burlywood
    padding: 3vh

  main
    background-color: antiquewhite
    height: 300px

  footer
    background-color: #eaae75
    display: flex
    justify-content: center
    padding: 1vh



</style>