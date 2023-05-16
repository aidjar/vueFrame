<template>
  <v-app>
    <v-main>
      <NewMessage />
      <Message />
    </v-main>
  </v-app>
</template>

<script setup>
  import Message from '@/components/Message.vue';
  import NewMessage from '@/components/newMessage.vue';
</script>
