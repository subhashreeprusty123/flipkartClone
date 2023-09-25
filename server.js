import  express  from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import defaultData from "./default.js";
import router from "./routes/route.js";
//express cann't handle post api body, so we downloaded 3rd party package
import bodyParser from "body-parser";
//we are sending data from port 3000 and requesting from 8000 which was not acceptable by browser.. so it shows cors error..
import cors from 'cors';

const path = require('path');

//express initialization using constant app
const app = express();

//dotenv initialization
dotenv.config();

//using cors in express
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/',router);



app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*',(request,response) => {
    response.sendFile(path.join(__dirname, '../client/build/index.html'))
});

const PORT = process.env.PORT || 8000;

//extract username and password from .env file
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-f4cbohr-shard-00-00.aionmid.mongodb.net:27017,ac-f4cbohr-shard-00-01.aionmid.mongodb.net:27017,ac-f4cbohr-shard-00-02.aionmid.mongodb.net:27017/FLIPKARTCLONE?ssl=true&replicaSet=atlas-a3bt16-shard-0&authSource=admin&retryWrites=true&w=majority`;



//calling Connection Function
Connection( URL);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
// }

//this function make server of express,this takes 2 argument one is port no., 2nd is call back function
app.listen(PORT,() => { console.log(`Server is running on PORT ${PORT}`)} );

//calling defaultdata function
defaultData();
