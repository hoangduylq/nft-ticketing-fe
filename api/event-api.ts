import { IEventPayload, ICategory } from './../models/event.interface';
import axiosClient from './axios-client';

export const eventApi = {
  getAllCategory(): Promise<ICategory[]> {
    return axiosClient.get('/categories');
  },

  uploadImage(file: any) {
    return axiosClient.post('/image', file);
  },

  createEvent(payload: IEventPayload): Promise<IEventPayload> {
    const token = localStorage.getItem('token');

    return axiosClient.post('/events', payload, {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    });
  },

  getAllEvent(page: number, pageSize: number, id: string): Promise<IEventPayload[]> {
    const token = localStorage.getItem('token');

    return axiosClient.get('/events/paging', {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
      params: { page: page, pageSize: pageSize, userId: id },
    });
  },

  getEventById(id: string): Promise<IEventPayload> {
    return axiosClient.get(`/events/${id}`);
  },
};
