<template>
    <v-card class="mx-auto" width="400">
        <v-toolbar title="New message" color="black"/>
        <v-container>
            <v-text-field v-model="messageBody" label="Message" required/>
            <v-btn density="default" align-center @click="submit">submit</v-btn>
        </v-container>
    </v-card>
</template>
  
<script>
import useMessageStore from '../store.js'
export default {
    data: () => ({
        messageBody:"",
    }),
    methods:{
        submit(){
            let msg = this.messageBody; 
            try{
                useMessageStore().add({"text": msg});
            } catch(error){
                console.log(msg)
                console.log(error);
            }
        }
    },

}
</script>
  