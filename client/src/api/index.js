import axios from 'axios'

const serverUrl = "http://localhost:8000/";

export const getEmployees = () => axios.get(`${serverUrl}/employees`);

export const getCarmodels = () => axios.get(`${serverUrl}/carmodels`);

export const postCarmodels = () => axios.post(`${serverUrl}/carmodels`);

export const deleteCarmodels = async (params) => {
    await axios.delete(`${serverUrl}/carmodel`, {
        data: {
            id: params,
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
      if(res.data === "auth"){
        window.location = "/activitypanel"
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
      window.location.reload()
    });
  };
    