import axios from 'axios'

const serverUrl = "http://localhost:8000/";

export const getTest = () => axios.post(`${serverUrl}/posttest`)