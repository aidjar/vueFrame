import { defineStore } from 'pinia';
import axios from 'axios';


const useMessageStore = defineStore('msgStr', {
    state: () => ({  
        messages: [],
    }),
   
    actions:{
        async add(msg) {
            let data =  (await axios.post('http://127.0.0.1:3010/messages', {"message": msg})).data;
            this.messages.push(data.message);
        },

        async fetch(){
            let data = (await (axios.get('http://127.0.0.1:3010/messages'))).data;
            data.forEach(e=> this.messages.push(e));
        },
    },      
});

export default useMessageStore;