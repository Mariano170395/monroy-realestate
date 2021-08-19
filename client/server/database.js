import mongoose from 'mongoose'

(async()=>{

const db = await mongoose.connect('mongodb+srv://monroyrealestate:Monroy123@cluster0.psinn.mongodb.net/monroyrealestate',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log('Connected to:', db.connection.name)
})();