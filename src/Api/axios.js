import axios from "axios";
const axiosInstance = axios.create({
    // local instance of firebase functions

    baseURL:"http://127.0.0.1:5001/clone-b213e/us-central1/api",
  
    // deployed version of amazon server 
    baseURL:"https://amazon-api-deployment-r903.onrender.com"
})
export {axiosInstance}