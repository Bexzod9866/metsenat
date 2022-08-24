import { defineStore } from 'pinia';
import { api } from '../boot/axios';
import { Notify } from 'quasar';


export const useDashboardStore = defineStore({
    id: 'DashboardStore',
    state: () => ({
      dashboard: null,
      tariff: null,
      loading: false,
    }),
    actions: {
      async getDshboard() {
        this.dashboard = null;
        this.loading = true;
        try {
          const response = await api.get('/dashboard');
          if (response.status === 200) {
            this.dashboard = response.data;
          }
        } catch (err) {
          Notify.create({
            message: 'Неизвестная ошибка',
            type: 'negative',
            position: 'top-right',
            timeout: 3000,
          });
        } finally {
          this.loading = false;
        }
      },
      
    }
  })