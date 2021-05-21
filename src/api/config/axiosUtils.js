import axios from 'axios';

// const domain = 'http://localhost:3000';
// const domain = 'https://jsonplaceholder.typicode.com';
const Unauthorized = 401;
export const onUnauthorized = () => {
  router.push(`/login?returnPath=${encodeURIComponent(location.pathname)}`);
};

export const request = {
  get(path) {
    return axios.get(`${path}`).catch(({ response }) => {
      const { status } = response;
      if (status === Unauthorized) return onUnauthorized();
      throw Error(response);
    });
  },
  post(path, data) {
    return axios.post(`${path}`, data);
  },
  delete(path, data) {
    return axios.delete(`${path}`, data);
  },
  put(path, data) {
    return axios.put(`${path}`, data);
  },
};

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
};

export default request;

// export const request = {
//   get(path) {
//     return axios.get(`${path}`).catch(({ response }) => {
//       const { status } = response;
//       if (status === Unauthorized) return onUnauthorized();
//       throw Error(response);
//     });
//   },
//   post(path, data) {
//     return axios.post(`${path}`, data);
//   },
//   delete(path) {
//     return axios.delete(`${path}`);
//   },
//   put(path, data) {
//     return axios.put(`${path}`, data);
//   },
// };
