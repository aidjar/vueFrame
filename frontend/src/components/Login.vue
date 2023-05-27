<template>
    <v-card class="mx-auto" width="400">
        <v-toolbar title="Login" color="black"/>
        <v-container>
            <v-text-field v-model="userName" label="User Name" required/>
            <v-text-field v-model="password" label="Password" required/>
            <v-btn density="default" align-center @click="login">login</v-btn>
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
        login(){
            try{
                this.$store.dispatch("login",{userName:this.userName, password:this.password});
            } catch(error){
                console.log(msg)
                console.log(error);
            }
        }
    },

}
</script>
  