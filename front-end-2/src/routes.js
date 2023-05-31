import ShoppingCartPage from '@/pages/ShoppingCartPage'
import ProductsPages from '@/pages/ProductsPages'
import ProductDetailPage from '@/pages/ProductDetailPage'
import NotFoundPage from '@/pages/NotFoundPage'


const routes = [
    {path:'/cart',component: ShoppingCartPage},
    {path:'/products',component: ProductsPages},
    {path:'/products/:productId',component: ProductDetailPage},
    {path:'/:pathMatch(.*)*',component: NotFoundPage},
]

export default routes;