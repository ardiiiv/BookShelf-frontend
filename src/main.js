import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdPostaddTwotone, MdMenubookTwotone, MdPeoplealtOutlined, MdAccountcircleTwotone, MdMenuRound } from "oh-vue-icons/icons/md"
import { RiBookMarkLine } from "oh-vue-icons/icons/ri"
import { HiHome } from "oh-vue-icons/icons/hi"
import { BiX, BiXLg } from "oh-vue-icons/icons/bi"

addIcons(
    MdPostaddTwotone,
     MdMenubookTwotone,
     RiBookMarkLine,
     MdPeoplealtOutlined,
     HiHome,
     MdAccountcircleTwotone,
    MdMenuRound,
    BiX,
    BiXLg
)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
