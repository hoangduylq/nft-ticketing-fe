import { ICreateOrderPayload, IOrderPayload } from '@/models/order.interface';
import axiosClient from './axios-client';

export const orderApi = {
  create(payload: ICreateOrderPayload) {
    return axiosClient.post('/orders', payload);
  },
  getAllOrder(page: number, limit: number): Promise<IOrderPayload[]> {
    const token = localStorage.getItem('token');

    return axiosClient.get(`orders/paging?page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    });
  },
};
