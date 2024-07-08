const express=require('express');
const app=express();
const cors=require('cors')
app.use(cors());
const mongoose=require('mongoose')

require('dotenv').config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const db=require('./database/db')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

const DBdata=require('./DBdata')
DBdata();

const ProductData=require('./ProductData')

app.get('/',async(req,res)=>{
  try{
    const showData= await ProductData.find();
    console.log('Data fetched.')
    res.status(200).json(showData);
  }catch(err){
    console.log(err)
    res.status(500).json({error:'Internal server error.'})
  }
})

const BoutiqueRouter = require('./routes/BoutiqueRoutes');
app.use('/api/boutiques', BoutiqueRouter); 

const PORT=8000;
app.listen(PORT,()=>{
  console.log(`Server running on PORT ${PORT}`);
})
