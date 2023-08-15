import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import './global.d.ts'
import store from "@/store";

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')

