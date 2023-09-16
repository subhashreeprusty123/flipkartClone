
import User from '../model/user-schema.js';



//this is backend api, this is a callback function of router...here we have to write after calling api..what wil going to happen
export const userSignup = async  (request ,response) => {
        try{

            const exist =await User.findOne({username: request.body.username});
            if(exist) {
                return response.status(401).json({message: 'Username already exist'});
            }


            // console.log(request.body);
            const user = request.body;
            //validated user details
            const newUser = new User(user);

            //store one validated data in database 
            await newUser.save();

            //returning using response statement
            response.status(200).json({message: user});
        }catch(error){
            response.status(200).json({message: error.message});
        }
}


export const userLogin = async(request , response) => {
    try{
        const username = request. body.username;
        const password = request.body.password;

        let user =await User.findOne({username: username , password: password});
        if(user){
            return response.status(200).json({data : user});
        }else{
            return response.status(401).json('Invalid login');
        }
    }catch(error){
        response.status(500).json('error',error.message);
    }
}