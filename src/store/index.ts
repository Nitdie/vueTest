import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        userInfo: {},
        currentRoom:0,
    },
    mutations:{
        setUserInfo(state:object,userInfo:any){
            state.userInfo=userInfo
        },
        setCurrentRoom(state:object,currentRoom:number){
            state.currentRoom=currentRoom
        }
    },
    actions:{

    },
    modules:{

    }
})
