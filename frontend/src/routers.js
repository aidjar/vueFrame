import Message from '@/components/Message'
import NewMessage from '@/components/NewMessage'


const routes = [
    {
        path:'/',
        component: Message
    },
    {
        path:'/newMessage',
        component: NewMessage
    },
]

export default routes;