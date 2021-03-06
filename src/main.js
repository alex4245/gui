// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueSocketio from 'vue-socket.io'
import App from './App'
import router from './router'
import store from '../store/index'

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

// Vue.use(VueSocketio, 'http://127.0.0.1:5002/', store)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    sockets: {
        connect() {
            console.log('socket connected')
        }
    }
})
