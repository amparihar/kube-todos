import { handleResponse, handleError, envConfig } from './apiUtils';
const baseUrl = `${envConfig.api.BASE_URL}/api`;
//const baseUrl = 'http://localhost:8081/api';

export const getGroups = () => {
  console.info('baseUrl=>>', baseUrl);
  return fetch(`${baseUrl}/groups`)
    .then(handleResponse)
    .catch(handleError);
};

export const getTasks = () => {
  return fetch(`${baseUrl}/tasks`)
    .then(handleResponse)
    .catch(handleError);
};

export const getTask = (id) => {
  return fetch(`${baseUrl}/tasks/${id}`)
    .then(handleResponse)
    .catch(handleError);
};
