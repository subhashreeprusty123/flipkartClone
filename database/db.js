import mongoose from "mongoose";

export const Connection = async (URL) => {

    

    try{
        //to create connection with mongo db will use connect,which take 2 argument that is url and object
        await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database Connected Successfully");
    }catch(error){
        console.log("error while connecting database", error.message);
    }
}
export default Connection;