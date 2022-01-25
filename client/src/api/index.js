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
    