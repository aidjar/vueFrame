<template>
  <v-app>
    <v-main>
      <br>
      <NewMessage/>
      <br>
      <Messages />
    </v-main>
  </v-app>
</template>

<script setup>
  import Messages from '@/components/Messages.vue'
  import NewMessage from './components/NewMessage.vue';
</script>
