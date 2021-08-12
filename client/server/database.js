import mongoose from 'mongoose'

(async()=>{

const db = await mongoose.connect('mongodb://localhost/monroyrealestate',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log('Connected to:', db.connection.name)
})();