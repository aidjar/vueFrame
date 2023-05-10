<template>
   <div class="d-flex align-center flex-column">
  <v-card width="400"> 
    <v-toolbar title="Message" color="black"/> 
  <v-list>
    <v-list-item v-for="item in messages" :key="item" :value="item">
      <v-list-item-title v-text="item" @click=""></v-list-item-title>
    </v-list-item>
  </v-list>
  </v-card>
  </div>
  
</template>

<script>
import axios  from 'axios';
export default {
  data: () => ({
    messages : this.$store.state.messages,
  }),
  async created(){
    this.$store.state.messages = (await axios.get('http://127.0.0.1:3000/messages')).data;

  }
}
</script>
