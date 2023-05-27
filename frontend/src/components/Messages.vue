<template>
    <div class="d-flex align-center flex-column">
   <v-card width="400"> 
     <v-toolbar title="Messages" color="black"/> 
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="item" :value="item" :to="'message/' + index">
          <v-list-item-title v-text="item.text" ></v-list-item-title>
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