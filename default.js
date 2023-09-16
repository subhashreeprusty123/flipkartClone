import { products } from "./constant/data.js";
import Product from "./model/product-schema.js";

const defaultData =  async () => {
    try{
        //inserting all products to database using validation by Product
        // await Product.deleteMany({});
         await Product.insertMany(products);

        console.log('data imported successfully');
    }catch(error){
        console.log('error while inserting default data',error.message);
    }
}

export default defaultData;