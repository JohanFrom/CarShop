import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import morgan from "morgan";
import fs from 'fs';
import cors from "cors";
import routes from "./routes/routes.js";
import passport from "passport";
import session from "express-session";
import localStrategy from "./controllers/passportConfig.js"

dotenv.config();

const PORT = process.env.PORT;
const app = express()
app.use(express.json());

app.use(routes);

app.use(
    cors({
      origin: "*",
    })
  );

app.use(morgan("dev"));
app.use(
    session({
      secret: "something",
      resave: false,
      saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());
localStrategy(passport);


const JsonToMongoDB = () => {
    let carShopData = fs.readFileSync('data.json');
    let data = JSON.parse(carShopData);
    try{
        db = CONNECTION_URI;
        const CarShop = mongoose.Collection("CarShop")
        CarShop.insertMany(data);
        console.log(cities);
    }catch(error){
        console.log(error.message);
    }
    

   
}

const CONNECTION_URI = process.env.CONNECTION_DB_URI;
const databaseConnection = async () => {
    try{
        await mongoose.connect(CONNECTION_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(
                `Server is running, connected to database on port: ${PORT}`
            );
            //JsonToMongoDB();
        });
    } catch (error){
        console.log(error.message);
    }
}

databaseConnection();


export default app;
