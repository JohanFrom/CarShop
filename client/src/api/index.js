import axios from 'axios'

const serverUrl = "http://localhost:8000";

export const getEmployees = () => axios.get(`${serverUrl}/employees`);

export const getOneEmployee = (name) =>
  axios.get(`${serverUrl}/getoneemployee/${name}`);

  export const getSession = () => {
    return axios.get(`${serverUrl}/getsession`, { withCredentials: true });
  }

export const getCarmodels = () => axios.get(`${serverUrl}/carmodels`);

export const postCarmodels = (params) => {
  axios({
    method: "POST",
    data: params,
    withCredentials: true,
    url: `${serverUrl}/carmodels`,
  }).then((res) => {
    if(res.data === "newcar"){
      window.location = "/cars"
    }else{
      console.log("ngt gick fel");
    }
  })
}

export const deleteCarmodels = async (params) => {
    await axios.delete(`${serverUrl}/carmodels`, {
        data: {
            name: params,
        },
    }); 
};

export const getTotalSales = () => axios.get(`${serverUrl}/total_sales`);

export const loginUser = (params) => {
    axios({
      method: "POST",
      data: params,
      withCredentials: true,
      url: `${serverUrl}/loginuser`,
    }).then((res) => {
      console.log(res);
      if(res.data === "auth"){
        window.location = "/employees"
      }
      else{
        console.log("Användare finns ej");
      }
    });
  };
    
export const logoutUser = () => {
    axios({
      method: "DELETE",
      withCredentials: true,
      url: `${serverUrl}/logoutuser`,
    }).then((res) => {
      
    });
  };

export const postNewUser = (params) => {
  axios({
      method: "POST",
      data: params,
      withCredentials: true,
      url: `${serverUrl}/adduser`,
  }).then((res) => {
      if(res.data === "added"){
        window.location = "/";
      }else{
        console.log("ngt gick fel");
      }
  })
}