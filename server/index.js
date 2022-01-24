import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/routes.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express()

app.use(express.json());

app.use(routes);

app.use(
    cors({
        origin: "http://localhost:8000",
        credentials: true,
    })
);

app.use(morgan("dev"));

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
        });
    } catch (error){
        console.log(error.message);
    }
}

databaseConnection();



