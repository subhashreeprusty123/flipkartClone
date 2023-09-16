import mongoose from "mongoose";

export const Connection = async (username , password) => {

    const URL = `mongodb://${username}:${password}@ac-f4cbohr-shard-00-00.aionmid.mongodb.net:27017,ac-f4cbohr-shard-00-01.aionmid.mongodb.net:27017,ac-f4cbohr-shard-00-02.aionmid.mongodb.net:27017/FLIPKARTCLONE?ssl=true&replicaSet=atlas-a3bt16-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        //to create connection with mongo db will use connect,which take 2 argument that is url and object
        await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database Connected Successfully");
    }catch(error){
        console.log("error while connecting database", error.message);
    }
}
export default Connection;