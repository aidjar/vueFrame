<template>
    <div v-if="product">
        <div class="img-wrap">
        <img :src = "product.imageUrl"/>
        </div>
        <div class="product-details">
        <h1>{{ product.name }}</h1>
        <h3 class="price">{{ product.price }}</h3>
        <button class="add-to-cart" @click = "addToCart" v-if="!itemIsInCart">Add to cart</button>
        <button class="grey-button" v-else>Item is already in cart</button>
        </div>
    </div>
    <div v-else>
        <NotFoundPage/>
    </div>

</template>

<script>
import NotFoundPage from './NotFoundPage.vue';
import axios from 'axios';
export default {
    name: 'ProductDetailPage',
    components: {
        NotFoundPage,
    },

    computed:{
        itemIsInCart(){
            return this.cartItems.some(item => item.id === this.$route.params.productId);
        }
    },
    methods:{
        async addToCart(){
            await axios.post('/api/users/12345/cart',{"id": this.$route.params.productId});
            alert('Successfully added item to cart!');
        }
    },

    data(){
        return {
            product: {},
            cartItems:[],
        }
    },

    async created(){
        const response = await axios.get(`/api/products/${this.$route.params.productId}`);
        this.product = response.data;

        const cartResponse = await axios.get('/api/users/12345/cart');
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;

    }
}
</script>