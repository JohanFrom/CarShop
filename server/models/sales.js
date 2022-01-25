import mongoose from "mongoose";

const salesSchema = mongoose.Schema({
    id: Number,
    employee_id: Number,
    carmodel_id: Number
});

const Sales = mongoose.model("sales", salesSchema);
export default Sales;