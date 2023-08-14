import Api from '@/services/Api'
import '@/global.d.ts'

export default {
    register (credentials: LoginData){
        console.log('posted')
        return Api().post('register',credentials)

    }
}

 // AuthenticationService.register({
 //     account:'account',
 //     password:'word',
 // })