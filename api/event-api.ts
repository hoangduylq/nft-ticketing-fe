import axiosClient from './axios-client';

export const eventApi = {
  getAllCategory() {
    return axiosClient.get('/categories');
  },
};
