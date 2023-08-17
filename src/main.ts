import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import './global.d.ts'
import store from "@/store";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import io from "socket.io-client"

const socket = io("http://localhost:8888")


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')

