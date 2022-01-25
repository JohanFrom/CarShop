import Employees from "../models/employees.js";

import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

const initializeStrategy = (passport) => {
    passport.use(
        new LocalStrategy(
            {usernameField: "name", passwordField: "name"},
            (name, password, done) => {
                Employees.findOne({ name: name}, (err, user) => {
                    if(err){
                        console.log(err);
                    }

                    if(!user){
                        return done(null, false);
                    }

                    return done(null, user)
                });
            }
        )
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser((obj, done) => {
        Employees.findOne({ _id: obj.id }, (err, user) => {
          const employeeInformation = {
            name: user.name,
          };
          done(err, employeeInformation);
        });
      });
}

export default initializeStrategy;