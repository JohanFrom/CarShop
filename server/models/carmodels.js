import mongoose from "mongoose";

const carmodelSchema = mongoose.Schema({
    id: Number,
    brand: String,
    model: String,
    price: Number
});

const Carmodels = mongoose.model("carmodels", carmodelSchema);
export default Carmodels;