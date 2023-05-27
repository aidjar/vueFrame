<template>
    <v-card>
        <v-toolbar dark title="Message" color="black"/>
        <v-card-text>{{ message.text }}</v-card-text>
    </v-card>
</template>
  
<script>
import useMessageStore from '../store.js'
export default {
    data: () => ({
        message:"",
    }),

    created(){
        let result = useMessageStore().getMessage(this.$route.params.id);
        this.message = result;
    },

}
</script>
  