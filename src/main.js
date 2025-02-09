import { createApp } from 'vue'
import App from './App.vue'
import { vuemotion } from '@vueuse/motion'


createApp(App).mount('#app')
createApp(App).use(vuemotion)


