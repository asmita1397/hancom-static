import Vue from 'vue'
import Vuex from 'vuex'
import { treeBrowserData } from "./treeBrowserData";


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {  treeBrowserData }
})
