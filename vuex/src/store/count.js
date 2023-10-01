const count = {
    namespaced: true,
    actions : {
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

       
        
    },

    //准备mutations——用于操作数据（state）
    mutations : {
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

        
    },

    //准备state——用于存储数据
    state : {
        sum: 0,
    },


    // 定义getter----用来对state的数据进行加工
    getters : {
        // sum: state => state.sum * 10, //或
        bigSum(state) {
            return state.sum * 10
        },
    }
}

export default count