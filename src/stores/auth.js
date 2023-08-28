/*
   * This store is used for login and logout of the user.
   * Token, username and email are stored in local, for refreshing proof
   * features and later use of them.
*/

import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import router from "@/router";

export const useAuthStore = defineStore("auth", {
   state: () => ({
      authUser: useLocalStorage("authUser", null),
      token: useLocalStorage("token", null),
      email: useLocalStorage("email", null),
   }),
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

         router.push({name: 'customerList'})
      },
      logOut(){
         this.authUser = null
         this.token = null
         this.email = null
         router.push('/')
      }
   }
})
