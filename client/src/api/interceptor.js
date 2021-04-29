import httpClient from './';
import CONTANTS from '../constants';
import history from '../browserHistory';

let accessToken = null;

httpClient.interceptors.request.use(
  config => {
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  err => Promise.reject(err)
);

httpClient.interceptors.response.use(
  response => {
    if (response.data.data.tokenPair) {
      const {
        data: {
          data: {
            tokenPair: { refresh, access },
          },
        },
      } = response;

      accessToken = access;

      window.localStorage.setItem(CONTANTS.REFRESH_TOKEN, refresh);
    }
    return response;
  },
  async err => {
    const { response, request, config } = err;

    const token = window.localStorage.getItem(CONTANTS.REFRESH_TOKEN);

    if (response.status === 419 && token) {
      const {
        data: {
          data: {
            tokenPair: { access, refresh },
          },
        },
      } = await httpClient.post('/auth/refresh', { refreshToken: token });
      
      window.localStorage.setItem(CONTANTS.REFRESH_TOKEN, refresh);
      accessToken = access;
      return httpClient.request(config);
    } else if (
      response.status === 419 &&
      history.location.pathname !== '/' &&
      history.location.pathname !== '/login' &&
      history.location.pathname !== '/registration'
    ) {
      history.replace('/login');
    }
    return Promise.reject(err);
  }
);

export default httpClient;
