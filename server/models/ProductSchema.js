const mongoose=require('mongoose')
const productSchema = new mongoose.Schema({
  url: { type: String, required:true },
  detailUrl: { type: String },
  title: {
     type: String,
     unique:true
  }
  ,
  price: { type:Number},
  discount: {type: String},
  quantity: { type: Number },
  collection: {
    type: String,
    enum: [
      'Its Raining Its Pouring',
      'Collection Featuring Disney and Marvel',
      'Couture Cuteness Collection',
      'Moonlight Pajama Parade',
      'Accessory Adventure',
      'Top Home Deals',
      'Magical Collection',
      'Baby Blossom Bash',
      'Footwear Fiesta'
    ]
  },
  category: {
    type: String,
    enum: [
      'BOY FASHION',
      'GIRL FASHION',
      'FOOTWEAR',
      'TOYS',
      'DIAPERING',
      'BATH',
      'MOMS',
      'HEALTH'
    ]
  }
});
const ProductSchema=mongoose.model('ProductSchema',productSchema);
module.exports=ProductSchema;