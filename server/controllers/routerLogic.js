//import Sales from '../models/sales.js';
import Employees from '../models/employees.js';
import Carmodel from '../models/carmodels.js';
import Carmodels from '../models/carmodels.js';
import Sales from '../models/sales.js';


export const getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();
    res.status(200).json(employees) 
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
} 

export const getSession = (req, res) => {
  res.json(req.user)
}


export const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employees.findOne({ name: req.params.name });
    res.status(200).json(employee);
  } catch {
    res.status(404).json({ message: error.message });
  }
};


export const getCarmodels = async (req, res) => {
  try{
    const carmodels = await Carmodel.find();
    res.status(200).json(carmodels);
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}


export const postCarmodel = async (req, res) => {
  const createRandomId = () => 
    Math.floor(Math.random() * 100)
  
  const randomID = createRandomId();

  try {
    const newBrand = req.body.brand
    const newModel = req.body.model
    const newPrice = req.body.price
    const newCar = new Carmodels({
      id: randomID,
      brand: newBrand,
      model: newModel,
      price: newPrice
    });
    await newCar.save();
    res.send("newcar")
  } catch (error) {
    res.status(404).json({ message: error.message})
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
    const sales = await Sales.find();
    res.status(200).json(sales);

  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}

export const newUser = async (req, res) => {
  const createRandomId = () => 
    Math.floor(Math.random() * 100)
  
  const randomID = createRandomId();
  try{
    const name = req.body.name
    const status = req.body.status
    const userNew = new Employees({
      id: randomID,
      name: name,
      status: status
    })
    await userNew.save();
    res.send("added");
  }catch(error){
    res.status(404).json({ message: error.message})
    console.log("NGT GICK FEL");
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
