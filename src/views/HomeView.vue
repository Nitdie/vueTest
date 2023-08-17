<script setup lang="ts">
import io from "socket.io-client"
import store from "@/store";
import {useRouter} from "vue-router";
import {inject} from "vue";


const router = useRouter()
const socket = inject("socket")

function joinRoom(id:number){
  socket.emit("join_room",id)
  store.commit("setCurrentRoom",id)
  router.push('/chat')
}


</script>

<template>
  <el-container>
    <el-header class="header">
      <h1>
        Enter Room
      </h1>
    </el-header>
    <el-main class="main">
      <div class="button-container">
        <el-button id="1" @click="joinRoom(1)">ROOM1</el-button>
        <el-button id="2" @click="joinRoom(2)">ROOM2</el-button>
        <el-button id="3" @click="joinRoom(3)">ROOM3</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped lang="sass">
.header
  background-color: #f2f2f2
  text-align: center
  padding:
    bottom: 80px

.main
  background-color: #f8f8f8

.button-container
  background-color: #d7d7d7
  padding: 50px
  display: flex
  justify-content: center

</style>