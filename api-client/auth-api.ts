
import axiosClient from './axios-client'
import { LoginPayload } from '@/models/auth.interface';

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post('/login', payload)
  },

  logout() {
    return axiosClient.post('/logout')
  },

  getProfile() {
    return axiosClient.get('/profile')
  },
}
