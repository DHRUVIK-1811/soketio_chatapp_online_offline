const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/chatapp";

// connect to MongoDB Atlas
mongoose.connect(url)
.then( () => console.log('Connected to MongoDB!'))
.catch( err => console.log(err))