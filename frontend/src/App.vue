<template>
  <v-app>
    <v-toolbar>
        <v-btn flat to ='/'>Messages</v-btn>
        <v-btn flat to ='/newMessage'>New Message</v-btn>
        <v-spacer/>
        <v-btn flat>Login</v-btn>
    </v-toolbar>
    <v-main>
      <br>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
  // import Message from '@/components/Message.vue';
  // import NewMessage from '@/components/NewMessage.vue';
</script>
