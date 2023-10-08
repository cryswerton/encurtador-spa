<template>
    <h1>Login</h1>
    <label id="email-label">Email address</label>
    <input type="email" id="email" v-model="email">
    <label id="password-label">Password</label>
    <input type="password" id="password" v-model="password">
    <button id="btn-login" @click.prevent="login">Log in</button>
  </template>
  
  <script>
  import {useAuth} from '@/stores/auth.js'
  import http from '@/services/http.js'
  import { useRouter } from 'vue-router';
  
  export default {
      data() {
          return {
              email: '',
              password: '',   
          }
      },
      methods: {
          async login() {
              try {
                  const auth = useAuth()
                  const {data} = await http.post('/login', {email: this.email, password: this.password})
                  auth.setToken(data.token)
                  auth.setUser(JSON.stringify(data.user))
                  this.$router.push('/dashboard');
              } catch (error) { 
                  console.log(error?.response?.data)
              }
          },
      },
  }
  </script>
  
  <style>
  
  </style>