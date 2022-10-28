import axios from "axios";

axios.defaults.baseURL = "https://drf-api-react.herokuapp.com/";
axios.defaults.headers.post["Content-type"] = "multipart/form-data";
axios.defaults.withCredentials = true;