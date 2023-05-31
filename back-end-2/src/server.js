import express from 'express';
import {MongoClient} from 'mongodb';
import path from 'path';

async function run(){
    const app = express();
    app.use('/image', express.static(path.join(__dirname, '../assets')));
    app.use(express.json());
    const client = new MongoClient("mongodb+srv://sanyyaco:FdtJ6ELDAVe9tUuM@cluster0.q6qp3bu.mongodb.net/?retryWrites=true&w=majority");
    await client.connect();
    const db = client.db('fsv-db');
    
        app.get('/api/products', async(req,res)=>{
            const products = await db.collection('products').find({}).toArray();
            res.json(products);
        });
        
        async function populateCard(ids){
            return Promise.all(ids.map(id => db.collection('products').findOne({"id":id})));
        }
        
        app.get('/api/users/:userId/cart', async(req,res)=>{
            
            const userId = req.params.userId;
            console.log(userId);
            const result = (await db.collection('users').findOne({"id": userId}));  
            const cartItems = result.cartItems;
            const populatedCart = await populateCard(cartItems);
            res.json(populatedCart);
        });
        
        app.get('/api/products/:productId',async(req,res)=>{
            const productId = req.params.productId;
            const product = await db.collection('products').findOne({id: productId});
            res.json(product);
        });
        
        app.get('/api/users',async(req,res)=>{
            const users = (await db.collection('users').find({})).toArray();
            res.json(users);
        });
        
        app.post('/api/users/:userId/cart', async(req,res)=>{ 
            const userId = req.params.userId;
            const productId = req.body.id; 
    
            db.collection('users').updateOne({id:userId},{
                $addToSet:{cartItems:productId}
            });
    
            const user = await db.collection("users").findOne({"id":req.params.userId});
            console.log(user); 
            const populatedCart = await populateCard(user.cartItems);
            res.json(populatedCart); 
        });
        
        app.delete('/api/users/:userId/cart/:productId', async(req,res)=>{
            const userId = req.params.userId;
            const productId = req.params.productId;
    
            await db.collection('users').updateOne({id:userId},{
                $pull:{cartItems:productId}
            });
    
            const user = await db.collection('users').findOne({id:req.params.userId});
            const populatedCart = await populateCard(user.cartItems);
            res.json(populatedCart);
        });
        
        app.listen(8000, ()=>{ 
            console.log('Server is listening on port 8000');
        });
}

run();



