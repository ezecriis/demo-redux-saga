import axios from "axios";
import { notification } from "antd";

const apiAxios = axios.create();

const reportToClientError = (response) => {
  const { status, data } = response;
  let message = "Se produjo un error en la llamada";
  switch (status) {
    case 411:
      message = "Sesión de usuario expiró, ingrese de nuevo por favor.";
      break;
    case 422:
      message = data.message;
      break;
    case 400:
    case 500:
      // eslint-disable-next-line no-console
      console.log(data.message);
      break;
    default:
      break;
  }
  notification.error({
    message: "Ha ocurrido un error",
    description: message,
  });
};

const successStatus = (status) => status >= 200 && status < 300;
const isSuccessResponse = (response) => successStatus(response.status);

apiAxios.defaults.validateStatus = (status) =>
  successStatus(status) || status === 400 || status === 500 || status === 422;

apiAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("FORBIDEN");
    }
    return Promise.reject(error);
  }
);

const get = (url, options) => apiAxios.get(url, options);

const post = async (url, body, options) => {
  const response = await apiAxios.post(url, body, options);
  if (isSuccessResponse(response)) {
    return response;
  }
  reportToClientError(response);
  throw new Error(response.data);
};

const del = (url, body) => apiAxios.delete(url, body);

const put = async (url, body) => {
  const response = await apiAxios.put(url, body);
  if (isSuccessResponse(response)) {
    return response;
  }
  reportToClientError(response);
  throw new Error(response.data);
};

export const getData = (url) =>
  new Promise((resolve, reject) => {
    apiAxios
      .get(url)
      .then((result) => {
        const { data, status } = result;
        if (isSuccessResponse(result)) {
          if (data) {
            resolve(data);
          } else {
            resolve();
          }
        } else {
          reportToClientError(result);
          reject(new Error(`Status: ${status}`));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

const rest = {
  post,
  get,
  getData,
  put,
  del,
  apiAxios,
  isSuccessResponse,
};

export default rest;
