import express from "express"
import  cors from "cors"
import { connectDb } from "./config/db.js";
// import foodRouter from "./router/foodRoute.js";
import userRouter from "./router/userRouter.js";
// import cartRouter from "./router/cartRoute.js";

// import 'dotenv/config'
// import orderRouter from "./router/orderRoute.js";
//config
const app = express();
const port = 4000

//middleware
app.use(express.json());
app.use(cors());

//database connection
connectDb();

//api end point
// app.use("/api/food", foodRouter);
// app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
// app.use("/api/cart", cartRouter);
// app.use("/api/order", orderRouter);


app.get("/", (req, res)=>{
    res.send("Api working");
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`);
})

//mongodb+srv://abinashd9856:<password>@cluster0.pkahnt9.mongodb.net/?