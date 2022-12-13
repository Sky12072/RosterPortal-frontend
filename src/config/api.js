import axios from 'axios';

// Define an API
const easyportalAPI = axios.create({
    // baseURL: "https://easyportal-heroku.herokuapp.com/" || "http://localhost:55000"
    baseURL: 'http://localhost:55000/'
})

easyportalAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem("token");
    console.log("Set token header1: ", token);
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
        console.log("Set token header2: ", token)
    }
    return req;

})

export default easyportalAPI;


