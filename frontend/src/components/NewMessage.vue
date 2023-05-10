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
export default {
    data: () => ({
        messageBody:"",
    }),
    methods:{
        submit(){
            let msg;
            try{
                // emitter.emit('newMessage', this.messageBody);
                msg = ((axios.post('http://127.0.0.1:3000/messages', {"message": this.messageBody})).data).message;
                this.$store.state.messages.push(msg);
            } catch(error){
                console.log(msg)
                console.log(error);
            }
        }
    },

}
</script>
  