//import Sales from '../models/sales.js';
import Employees from '../models/employees.js';
import Carmodel from '../models/carmodels.js';
import Carmodels from '../models/carmodels.js';


export const getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();
    res.status(200).json(employees) 
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
} 

export const getCarmodels = async (req, res) => {
  try{
    const carmodels = await Carmodel.find();
    res.status(200).json(carmodels);
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}


export const postCarmodel = async (req, res) => {
  let newId = req.body.id
  console.log(req);
  let newBrand = req.params.brand
  let newModel = req.params.model
  let newPrice = req.params.price
  console.log(newId);

  try {
    const newCar = new Carmodels({
      id: id,
      brand: brand,
      model: model,
      price: price
    });
    console.log(newCar);
    await newTest.save();
    console.log("Bil skapad");
  } catch (error) {
    res.status(404).json({ message: error.message})
    console.log("NGT GICK FEL");
  }
  //brand: req.params.brand
  //model: req.params.model
  //price: req.params.price
  
};

export const deleteCarmodel = async (req, res) => {
  const name = req.body.name;
  await Carmodel.deleteOne({ name: name }).then((carmodel) => {
    if(!carmodel){
      res.status(404).send({
        message: "Carmodel not found with id: " + name,
      });
    }
    res.status(200).send({ message: "Carmodel deleted successfully!" })
  })
}


// FIXA SEDAN
export const getTotalSales = async (req, res) => {
  try {
    const employees = await Employees.find();
    res.status(200).json(employees);

  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}

export const postTest = async (req, res) => {
  const createRandomId = () => 
    Math.floor(Math.random() * 100)
  
  const randomID = createRandomId();
  console.log(randomID);
  try {
    const newTest = new Employees({
      id: randomID,
      name: "TEST2",
    });
    await newTest.save();
    console.log(" skapad");
  } catch (error) {}
};
