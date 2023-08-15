import Api from '@/services/Api'
import '@/global.d.ts'

export default {
    register (credentials: LoginData){
        return Api().post('register',credentials)
    },
    login (credentials: LoginData){
        return Api().post('login',credentials)
    },
}

 // AuthenticationService.register({
 //     account:'account',
 //     password:'word',
 // })