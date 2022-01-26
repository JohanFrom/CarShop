import mongoose from "mongoose";

const employeesSchema = mongoose.Schema({
    id: Number,
    name: String,
    status: Boolean
});

const Employees = mongoose.model("employees", employeesSchema);
export default Employees;