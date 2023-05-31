use('fsv-db');

// const products = [{
//   id: '123',
//   name: 'Basil',
//   price: '$26.00',
//   imageUrl: '/image/basil-bottle.webp',
// }, {
//   id: '234',
//   name: 'Lemon',
//   price: '$26.00',
//   imageUrl: '/image/lemon-bottle.webp',
// }, {
//   id: '345',
//   name: 'Garlic',
//   price: '$26.00',
//   imageUrl: '/image/garlic-bottle.webp',
// }, {
//   id: '456',
//   name: 'Rosemary',
//   price: '$26.00',
//   imageUrl: '/image/rosemary-bottle.webp',
// }, {
//   id: '567',
//   name: 'Chili',
//   price: '$26.00',
//   imageUrl: '/image/chili-bottle.webp'
//   ,
// }, {
//   id: '678',
//   name: 'Delicate',
//   price: '$24.50',
//   imageUrl: '/image/delicate-bottle.webp'
//   ,
// }, {
//   id: '789',
//   name: 'Medium',
//   price: '$24.50',
//   imageUrl: '/image/medium-bottle.webp'
//   ,
// }, {
//   id: '890',
//   name: 'Bold',
//   price: '$24.50',
//   imageUrl: '/image/bold-bottle.webp'
//   ,
// }];

// db.products.insertMany(products);
// db.users.insertOne({id:'12345', cartItems:['123','345']});

// db.users.find({})

// db.products.find({id:'123'})
// db.users.findOne({id:'12345'})
// (db.users.findOne({id:'12345'}));
// (db.products.findOne({'id':"234"}));
// db.users.findOne({"id":"12345"}).cartItems;
// db.users.findOne({"id":"12345"});

db.users.insertOne({"id": "12345","cartItems": ["123", "345"]})



