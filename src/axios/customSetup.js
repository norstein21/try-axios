import axios from "axios";

const apiDefault = axios.create({
    baseURL: 'https://course-api.com',
    headers: {
        Accept: 'application/json'
    }
})
export default apiDefault