import axios from 'axios';

// Define an API
const easyportalAPI = axios.create({
    // baseURL: "https://easyportal-heroku.herokuapp.com/" || "http://localhost:55000"
    baseURL: 'http://localhost:55000/'
})

easyportalAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem("idToken");
    console.log("Set token header: ", token);
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
        
    }
    return req;

})

export default easyportalAPI;


