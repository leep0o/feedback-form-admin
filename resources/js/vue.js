import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import BootstrapVue from 'bootstrap-vue'

import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

Vue.use(FeedbackList)
Vue.use(FeedbackForm)

const config = {
    components: {
        FeedbackList,
        FeedbackForm
    }
}

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue(config)
app.$mount('#app')
