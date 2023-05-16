<template>
    <div class="d-flex align-center flex-column">
   <v-card width="400"> 
     <v-toolbar title="Message" color="black"/> 
   <v-list>
     <v-list-item v-for="item in items" :key="item" :value="item">
       <v-list-item-title v-text="item" ></v-list-item-title>
     </v-list-item>
   </v-list>
   </v-card>
   </div>
   
 </template>
 
 <script>
import useMessageStore from '../store.js'

export default {
    data: () => ({
     items : useMessageStore().messages,
   }),
   
   created(){
    useMessageStore().fetch();
   },

 }
 </script>