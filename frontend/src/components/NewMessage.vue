<template>
    <v-card class="mx-auto" width="400">
        <v-container>
            <v-toolbar title="New message" color="black"/>
            <v-text-field v-model="messageBody" label="Message" required/>
            <v-btn density="default" align-center @click="submit">submit</v-btn>
        </v-container>
    </v-card>
</template>
  
<script>
import axios from 'axios';
import useMessageStore from '../store.js'
export default {
    data: () => ({
        messageBody:"",
    }),
    methods:{
        submit(){
            let msg = this.messageBody; 
            try{
                useMessageStore().add(msg);
            } catch(error){
                console.log(msg)
                console.log(error);
            }
        }
    },

}
</script>
  