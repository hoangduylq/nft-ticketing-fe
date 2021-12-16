import axiosClient from './axios-client';

export const userApi = {
  findBankByUserId(id: string) {
    return axiosClient.get('/payment/bank', { params: { userId: id } });
  },
};
