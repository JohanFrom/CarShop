import Employees from '../models/employees.js';
import Carmodels from '../models/carmodels.js';
import Sales from '../models/sales.js';
import passport from 'passport';


export const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {return err, null};
    if (!user) res.send("Ingen användare finns!");
    else {
      req.logIn(user, (err) => {
        if (err) {return err, null};
        res.send("auth");
      });
    }
  })(req, res, next);
};

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();
    res.status(200).json(employees) 
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
} 

export const getSession = (req, res) => {
  res.json(req.user);
};

//Förstör den pågående sessionen
export const deleteSession = (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out")
  })
}


export const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employees.findOne({ name: req.body.name });
    res.status(200).json(employee);
  } catch {
    console.log("HEJ");
    console.log("NGT GICK FEL");
    res.status(404).json({ message: error.message });
  }
};


export const getCarmodels = async (req, res) => {
  try{
    const carmodels = await Carmodels.find();
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
    const salesAndEmployees = await Sales.aggregate([{
      $lookup: {
        from: "employees",
        localField: "employee_id",
        foreignField: "id",
        as: "employee"
      }
    }
  ])

  const salesAndCarModels = await Sales.aggregate([{
      $lookup: {
        from: "carmodels",
        localField: "carmodel_id",
        foreignField: "id",
        as: "car"
      }
  }])

  const getEmployeesAndPrice = await Employees.aggregate([{
    $lookup: {
      from: "sales",
      localField: "id",
      foreignField: "employee_id",
      as: "sales"
    },
    $lookup: {
      from: "carmodels",
      localField: "id",
      foreignField: "id",
      as: "car"
    }
  }])

    

  //res.status(200).json(getEmployeesAndPrice)
  
  res.status(200).json({
    salesAndEmployees,
    salesAndCarModels
  });

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
