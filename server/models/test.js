import mongoose from "mongoose";

const testSchema = mongoose.Schema({
    name: String,
});

const Test = mongoose.model("Test", testSchema);
export default Test;