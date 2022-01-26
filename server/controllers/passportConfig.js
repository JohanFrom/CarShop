import Employees from "../models/employees.js";

import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

const initializeStrategy = (passport) => {
    passport.use(
      "userLogin",
      new LocalStrategy({usernameField: 'name', passwordField: 'name'},
        (name, password, done) => {
        Employees.findOne({ name: name }, (err, user) => {
          if (err) {return done(err)};
          if (!user) {return done(null, false)};
          return done(null, user);
        });
      })
    );
  
    //Skapar en session där cookiens ID är namnet på användaren
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });
  
    //Hittar sessionens ID och avslutar sessionen
    passport.deserializeUser((id, done) => {
      Employees.findOne({ id: id }, (err, user) => {
        const employeeInfo = {
          name: user.name,
        };
        done(err, employeeInfo);
      });
    });
};

export default initializeStrategy;