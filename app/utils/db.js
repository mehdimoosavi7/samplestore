import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect(process.env.DB);
    }
    catch(error){
        console.log("some error " + error);
    }
};

export default connect;