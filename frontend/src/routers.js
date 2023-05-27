import Messages from '@/components/Messages'
import NewMessage from '@/components/NewMessage'
import Message from '@/components/Message'
import Register from '@/components/Register'
import Login from '@/components/Login'


const routes = [
    {path:'/',component: Messages},
    {path:'/NewMessage',component: NewMessage},
    {path:'/Message/:id',component: Message},
    {path:'/Register',component: Register},
    {path:'/Login',component: Login},
]

export default routes;