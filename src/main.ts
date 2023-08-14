import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import './global.d.ts'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')

interface A{
    st:string
}
let b:A = {st:4}