import axiosClient from './axios-client';

export const eventApi = {
  getAllCategory() {
    return axiosClient.get('/categories');
  },

  uploadImage(file: any) {
    return axiosClient.post('/image', file);
  },
};
