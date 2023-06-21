
const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://csv_upload:3os5ktd7b0EaGkU8@cluster0.xge3fgc.mongodb.net/?retryWrites=true&w=majority');
const DB = 'mongodb+srv://placement:badalkr27@cluster0.xge3fgc.mongodb.net/?retryWrites=true&w=majority';

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(()=>{
     console.log('connection successful');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

// db.on('error', console.error.
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open',  function(){
     console.log('Connected to Database :: MongoDB');
});


module.exports = db;