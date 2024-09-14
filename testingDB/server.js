const express =require('express')

const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())


const mongoose = require('mongoose');
 
 

 
 
const connectDbMain = async () => {
  
    mongoose
    .connect('mongodb://localhost:27017/template')
    .then(() => console.log('database connection success!'))
    .catch((error) => console.log(error.message, 'catch block of DB'));
};

 


app.get('/',(req,res)=>{  res.send('hello');})



app.listen(8080,async ()=>{
    
      await connectDbMain()

    console.log('start server')
});