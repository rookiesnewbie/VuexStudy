import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)


//准备actions——用于响应组件中的动作
const actions = {
    increment(context, state) {
        console.log("increment",context);
        context.commit('INCREMENT', state)
    },
    decrement(context,state) {
        context.commit('DECREMENT',state)

    },
    incrementOne(context,state) {
        context.commit('INCREMENTONE',state)
    },
    incrementTow(context,state) {
        context.commit('INCREMENTTOW',state)
    },

    addPersonList(context, state) {
        context.commit('ADDPERSON',state)
    }
	  
}

//准备mutations——用于操作数据（state）
const mutations = {
    INCREMENT(commit, state) {
        console.log('%%%%',state)
        commit.sum += state
    },
    DECREMENT(commit,state) {
        commit.sum -= state

    },
    INCREMENTONE(commit,state) {
        commit.sum += state
    },
    INCREMENTTOW(commit,state) {
        commit.sum += state
    },

    ADDPERSON(commit, state) { 
        console.log(commit,state);
        commit.personList.unshift(state)
    }
}

//准备state——用于存储数据
const state = {
    sum: 0,
    personList: [{
        id: '001',
        name: 'John'
    }]
}


// 定义getter----用来对state的数据进行加工
const getters = {
    // sum: state => state.sum * 10, //或
    bigSum(state) {
        return state.sum * 10
    },
    personList: state => state.personList
}

export default new Vuex.Store({
	actions,
	mutations,
    state,
    getters,
})