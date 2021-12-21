import { IOrderPayload } from '@/models/order.interface';
import axiosClient from './axios-client';

export const ordertApi = {
  getAllOrder(page: number, limit: number, id: string): Promise<IOrderPayload[]> {
    const token = localStorage.getItem('token');

    return axiosClient.get(`orders/paging?userId=${id}&page=${page}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    });
  },
};
