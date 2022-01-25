import React from "react";
import { useState } from "react";
import { loginUser } from '../api';

function UserLogin() {

  const [loginName, setLoginName] = useState("");

  const handleSubmit = () => {
    console.log(`försöker logga in med ${loginName}`);

    const postData = {
      id: loginName,
    };

    loginUser(postData);
  }


  return (
    <div className="App">
      <h1>USERLOGIN</h1>
      <input
         type="text" name="name" 
         id="login" 
         onChange={(e) => setLoginName(e.target.value)}
         placeholder="Skriv användarnamn här...">
        </input>
      <button onClick={handleSubmit}>Logga in</button>
    </div>
  );
}

export default UserLogin;
