import Vue from "vue";
import appComponent from "./component/App.vue"

new Vue({
    el:'#app',
    render: c => c(appComponent)
})