import { createApp } from 'vue'
import App from './App'
import store from '~/store'
import router from '~/routes'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('.app')
