import Employees from "../models/employees.js";

import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

const initializeStrategy = (passport) => {
    passport.use(
        new LocalStrategy(
            {usernameField: "id", passwordField: "id"},
            (id, password, done) => {
                Employees.findOne({ id: id }, (err, user) => {
                    if(err){
                        return done(err);
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

    passport.deserializeUser((id, done) => {
        Employees.findOne({ _id: id }, (err, user) => {
          const employeeInformation = {
            name: user.id,
          };
          done(err, employeeInformation);
        });
      });
}

export default initializeStrategy;