import { IEventPayload } from './../models/event.interface';
import axiosClient from './axios-client';

export const eventApi = {
  getAllCategory() {
    return axiosClient.get('/categories');
  },

  uploadImage(file: any) {
    return axiosClient.post('/image', file);
  },

  createEvent(payload: IEventPayload) {
    const token = localStorage.getItem('token');

    return axiosClient.post('/events', payload, {
      headers: {
        Authorization: `Bearer  ${token}`,
      },
    });
  },
};
