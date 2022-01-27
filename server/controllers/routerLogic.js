import Employees from '../models/employees.js';
import Carmodels from '../models/carmodels.js';
import Sales from '../models/sales.js';
import passport from 'passport';


export const loginUser = (req, res, next) => {
  passport.authenticate("userLogin", (err, user, info) => {
    if (err) {return err, null};
    if (!user) res.send("Ingen användare finns!");
    else {
      req.logIn(user, (err) => {
        if (err) {
          return err, null
        };
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
    const employee = await Employees.findOne({ name: req.params.name });
    res.status(200).json(employee);
  } catch {
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

export const getSales = async (req, res) => {
  try {
    const getSales = await Sales.find();
    res.status(200).json(getSales)
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}

// FIXA SEDAN
export const getTotalSales = async (req, res) => {
  try {
    const getEmployeesAndSales = await Employees.aggregate([{
      $lookup: {
        from: "sales",
        localField: "id",
        foreignField: "employee_id",
        as: "sales"
      }
    }])

    res.status(200).json(getEmployeesAndSales)

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
    const email = req.body.email
    const password = req.body.password
    const status = req.body.status
    const userNew = new Employees({
      id: randomID,
      name: name,
      email: email,
      password: password,
      status: status
    })
    await userNew.save();
    res.send("added");
  }catch(error){
    res.status(404).json({ message: error.message})
  }
  
}

export const postTest = async (req, res) => {
  const createRandomId = () => 
    Math.floor(Math.random() * 100)
  
  const randomID = createRandomId();

  try {
    const newTest = new Employees({
      id: randomID,
      name: "TEST2",
      status: Boolean
    });
    await newTest.save();
    console.log(" skapad");
  } catch (error) {}
};
