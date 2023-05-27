<template>
    <v-card class="mx-auto" width="400">
        <v-toolbar title="Register" color="black"/>
        <v-container>
            <v-text-field v-model="userName" label="User Name" required/>
            <v-text-field v-model="password" label="Password" required/>
            <v-btn density="default" align-center @click="register">register</v-btn>
        </v-container>
    </v-card>
</template>
  
<script>
import useMessageStore from '../store.js'
export default {
    data: () => ({
        userName:"",
        password:"",
    }),
    methods:{
        register(){
            let msg = this.messageBody; 
            try{
                useMessageStore().register({userName:this.userName,password:this.password,});
            } catch(error){
                console.log(msg)
                console.log(error);
            }
        }
    },

}
</script>
  