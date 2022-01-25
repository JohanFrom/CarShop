//import Sales from '../models/sales.js';
import Employees from '../models/employees.js';
import Carmodel from '../models/carmodels.js';


export const getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();
    res.status(200).json(employees);
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
  const createRandomId = () => {
    Math.floor(Math.random() * 89000 + 100000).toString();
    const id = createRandomId();
  }


  Carmodel.findOne({ id:id }, async (err, doc) => {
    if (err) res.send(err);

    if(doc){
      postCarmodel(req, res);
    }

    if(!doc) {
      const newCarmodel = new Carmodel({
        id: id,
        brand: String,
        model: String,
        price: Number
      });
      await newCarmodel.save();
      res.status(201).json(id)
    }
  })
};

export const deleteCarmodel = async (req, res) => {
  const id = req.body.id;
  await Carmodel.deleteOne({ id: id }).then((carmodel) => {
    if(!carmodel){
      res.status(404).send({
        message: "Carmodel not found with id: " + id,
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
