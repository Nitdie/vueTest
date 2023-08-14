import Api from '@/services/Api'

export default {
    register (credentials: {account:string,password:string}){
        return Api().post('register',credentials)
    }

}