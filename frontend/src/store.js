import { defineStore } from 'pinia';
import axios from 'axios';


const useMessageStore = defineStore('msgStr', {
    state: () => ({
        messages: [],
        token: localStorage.getItem('token') || '',
    }),

    mutations:{
        auth(state, token){
            state.token = token;
        },
        logout(state){
            state.token = '';
            localStorage.clear('token');
        },

    },

    actions: {
        async add(msg) {
            try {
                axios.defaults.params["Authentication"] = localStorage.getItem('token');
                let data = (await axios.post('http://127.0.0.1:3010/messages',msg)).data;
                this.messages.push(data.message);
            } catch (error) {
                this.messages.push(msg);
                console.log(error);
            }

        },

        async fetch() {
            try {
                axios.defaults.params["Authentication"] = localStorage.getItem('token');
                let data = (await (axios.get('http://127.0.0.1:3010/messages'))).data;
                data.forEach(e => {
                    if(!this.messages.includes(e)){
                        this.messages.push(e)
                    }
                });
            } catch (error) {
                console.log(error);
            }
        },

        async getMessage(id) {
            try {
                return (await axios.get(`http://127.0.0.1:3010/message/${id}`)).data;
            } catch (error) {
                console.log(error);
                return this.messages[id]
            }
        },

        async register(registerData){
            let token = (await axios.post('http://127.0.0.1:3010/register', registerData)).data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit("auth", token);

        },
        async login({commit},registerData){
            let token = (await axios.post('http://127.0.0.1:3010/login', registerData)).data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit("auth", token);

        },
    },
});

export default useMessageStore;