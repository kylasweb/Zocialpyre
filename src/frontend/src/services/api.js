import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(`${API_BASE_URL}/auth/refresh/`, {
          refresh: refreshToken,
        });

        const { access } = response.data;
        localStorage.setItem('access_token', access);

        originalRequest.headers.Authorization = `Bearer ${access}`;
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh token is invalid, redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const authAPI = {
  login: (credentials) => api.post('/auth/login/', credentials),
  refreshToken: (refresh) => api.post('/auth/refresh/', { refresh }),
  enable2FA: () => api.post('/auth/enable-2fa/'),
};

// User endpoints
export const userAPI = {
  getProfile: () => api.get('/api/users/profile/'),
  updateProfile: (data) => api.patch('/api/users/profile/', data),
};

// Investment endpoints
export const investmentAPI = {
  getPlans: () => api.get('/api/investment-plans/'),
  getInvestments: () => api.get('/api/investments/'),
  createInvestment: (data) => api.post('/api/investments/', data),
};

// Analytics endpoints
export const analyticsAPI = {
  getDashboardData: () => api.get('/api/analytics/dashboard/'),
  getUserActivity: () => api.get('/api/analytics/user-activity/'),
};

export default api;