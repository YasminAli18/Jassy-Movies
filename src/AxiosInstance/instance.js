import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "c94b800b13b9b455a5d91c9b54e821a3",
    },
});

export default instance;
