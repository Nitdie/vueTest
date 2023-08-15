import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        userInfo:{}
    },
    mutations:{
        setUserInfo(state,userInfo){
            state.userInfo=userInfo
        }
    },
    actions:{

    },
    modules:{

    }
})
