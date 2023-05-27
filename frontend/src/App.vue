<template>
  <v-app>
    <v-toolbar>
        <v-btn flat to ='/'>Messages</v-btn>
        <v-btn flat to ='/NewMessage'>New Message</v-btn>
        <v-spacer/>
        <v-btn flat v-if="!$store.state.token" to ='/Register'>Register</v-btn>
        <v-btn flat v-if="!$store.state.token" to ='/Login'>Login</v-btn>
        <v-btn flat v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>
    </v-toolbar>
    <v-main>
      <br>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import Messages from '@/components/Messages.vue';
  import NewMessage from '@/components/NewMessage.vue';

  export default {
    name:"App",
    components:{
      Messages, NewMessage
    }, 
    data(){
      return{
        
      }
    }
  }
</script>
