import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './router.js'

Vue.use(Vuetify, {
    theme: {
        primary: '#607d8b',
        secondary: '#b0bec5',

    }
});

// Import fonts
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

// Import App
import App from './App.vue'


new Vue({
    el: "#app",
    render(h){
        return h(App);
    },
    router
});
