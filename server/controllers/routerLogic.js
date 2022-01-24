import Test from "../models/test.js";

export const getTest = (req, res) => {
  console.log("detta funkar");

  try {
    res.status(200).json("detta funkar");
  } catch (error) {}
};

//Test för postpatient
export const postTest = async (req, res) => {
  try {
    const newTest = new Test({
      name: "Test1",
    });
    await newTest.save();
    console.log("patient skapad");
  } catch (error) {}
};