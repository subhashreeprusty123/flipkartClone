//before inserting any data or acessing any data..there we have to do some validation .. so before getting data from database we will validate

import mongoose from "mongoose";


// here we gonna put  our all validation
const productSchema = new mongoose.Schema({
    id: {
        type:String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl : String,
    title : Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});
//this will make a collection in mongo db
const Product =mongoose.model('product', productSchema);

export default Product;