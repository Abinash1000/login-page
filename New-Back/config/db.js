import mongoose from "mongoose";

export const connectDb = async () => {
    await mongoose.connect(`mongodb+srv://ladlyankita17:SOqwdwmKBVWRzQhe@cluster0.ewg0i.mongodb.net/user-registration`)
    .then(()=>console.log("Data base Connected"))
    .catch((err)=>console.log(err.message))
}


