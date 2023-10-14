<template>
    <h1>New link</h1>
    <label>Title</label>
    <input type="text" v-model="title">
    <label>Destination</label>
    <input type="text" v-model="destination">
    <button id="btn-login" @click.prevent="create">Create</button>
</template>

<script>
import {useAuth} from '@/stores/auth.js'
import http from '@/services/http.js'

export default {
    data() {
          return {
              title: '',
              destination: '',   
          }
      },
      methods: {
          async create() {
              try {
                const auth = useAuth()
                const tokenAuth = 'Bearer ' + auth.token
                console.log(this.title)
                const data = await http.post('/links', {title: this.title, destination: this.destination}, {
                    headers: {
                        Authorization: tokenAuth
                    }
                })

                this.$router.push('/dashboard');
              } catch (error) { 
                console.log(error?.response?.data)
              }
          },
      },
}
</script>