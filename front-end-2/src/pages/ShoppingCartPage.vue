<template>
<h1>Shopping cart</h1>
<div v-if = "cartItems.length > 0">
    <ShoppingCartList :cartItems = "cartItems" @remove-from-cart="removeFromCart($event)"/>
        <button class="checkout-button">Proceed to checkout</button>
        </div>
        <div v-if="cartItems.length ===0">
        You current have no items in your cart!
        </div>

</template>

<script>
import axios from 'axios';
import ShoppingCartList from '@/components/ShoppingCartList.vue';
export default {
    name: 'ShoppingCartPage',
    components: {
        ShoppingCartList,
    },

    data(){
        return {
            cartItems:[]
        }
    },

    methods:{
        async removeFromCart(productId){
            const response = await axios.delete(`/api/users/12345/cart/${productId}`);
            const updatedCart = response.data;
            this.cartItems = updatedCart;
        }
    },

    async created(){
        const response = await axios.get('/api/users/12345/cart');
        this.cartItems = response.data;
        this.catItems = this.cartItems;
    }
}
</script>