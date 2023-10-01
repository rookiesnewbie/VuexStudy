import Vue from 'vue';
import Vuex from 'vuex';
import person from './person'
import count from './count'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        person,
        count
    }
})

export default store