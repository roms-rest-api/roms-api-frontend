import axios from "axios";

const config = {
  name: "DerpFest",
  backend_base_api: "http://localhost:1337",
};

const instance = axios.create({
  baseURL: config.backend_base_api,
});

export { config as config };
export { instance as instance };
