import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import router from "@/router";
export const useAuthStore = defineStore("auth", {
   state: () => ({
      authUser: useLocalStorage("authUser", null),
      token: useLocalStorage("token", null),
      email: useLocalStorage("email", null),
   }),
   getters: {
      getUserName(state){
         return (state.authUser != null ? state.authUser.user : "not" )
      },
   },
   actions: {
      async getUser(username, password) {
         const res = await fetch('http://localhost:8000/login-api',{
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({"username": username, "password": password}),
         })
         const data = await res.json()
     
         this.authUser = data.user.username
         this.email = data.user.email
         this.token = data.token

         router.push('/clientes')
      },
      logOut(){
         this.authUser = null
         this.token = null
         this.email = null
         router.push('/')
      }
   }
})
