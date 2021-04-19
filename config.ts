import axios from "axios";

const config = {
  name: "DerpFest",
  backend_base_api: "http://localhost:1337",
  // Colors
  titleFontColor: '#EE0824',
  devicesBackgroundColor: '#154d6e',
  devicesTitleColor: 'black',
  deviceBackgroundColor: '#480D15',
  deviceBorderStyle: '5px solid #EF0825',
  deviceAccordionBackground: '#A1868A'
};

const instance = axios.create({
  baseURL: config.backend_base_api,
});

export { config as config };
export { instance as instance };
