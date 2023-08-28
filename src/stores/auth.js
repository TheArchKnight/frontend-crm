import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
export const useAuthStore = defineStore("auth", {
   state: () => ({
      authUser: useLocalStorage("authUser", null),
      username: "",
      password: "",
   }),
   getters: {
      user: (state) => state.authUser   
   },
   actions: {
      async getUser() {
         const res = await fetch('api/login-api',{
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({"username": this.username, "password": this.password}),
         })
         this.authUser = await res.json()
      
      }
   }
})
