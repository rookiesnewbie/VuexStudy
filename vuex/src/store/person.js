const person = {
    namespaced: true,
     actions : {
         addPersonList(context, state) {
            context.commit('ADDPERSON',state)
        }
    },

    //准备mutations——用于操作数据（state）
    mutations : {
      ADDPERSON(commit, state) { 
            console.log(commit,state);
            commit.personList.unshift(state)
        }
        
    },

    //准备state——用于存储数据
    state : {
        personList: [{
            id: '001',
            name: 'John'
        }]
    },


    // 定义getter----用来对state的数据进行加工
    getters : {
        personList: state => state.personList
    }
}

export default person