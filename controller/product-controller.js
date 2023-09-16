import Product from '../model/product-schema.js';

export const getProducts = async(request , response) => {
    try{
        //to extract one data
        //Product.find({id: 'product1'});

        //to extract multiple data
        const products = await Product.find({});

        //return in frontend
        response.status(200).json(products);
    }catch(error){
        response.status(500).json({message: error.message});
    }

}

export const getProductById = async (request, response) => {
    try{
        const id = request.params.id;
         const product = await Product.findOne({'id':id})

         //sending response to frontend
         response.status(200).json(product);
    }catch(error){
        response.status(500).json({message: error.message});
    }

}