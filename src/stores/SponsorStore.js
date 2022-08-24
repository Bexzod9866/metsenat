import { defineStore } from 'pinia';
import { api } from '../boot/axios';
import { Notify } from 'quasar';


export const useSponsorsStore = defineStore({
    id: 'SponsorsStore',
    state: () => ({
      sponsors: null,
      sponsor: null,
      loading: false,
    }),
    actions: {
      async getSponsors() {
        this.sponsors = null;
        // this.loading = true;
        try {
          const response = await api.get('/sponsor-list');
          if (response.status === 200) {
            this.sponsors = response.data.results;
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
      async getSponsor(pay) {
        this.sponsor = null;
        // this.loading = true;
        try {
          const response = await api.get(`/sponsor-detail/${pay}`);
          if (response.status === 200) {
            this.sponsor = response.data;
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
      async updateSponsor(pay) {
        try {
          const response = await api.put(`/sponsor-update/${pay.id}/`,pay);
          if (response.status === 200) {
            Notify.create({
              message: 'Sponsor ma\'lumoti tahrirlandi',
              type: 'positive',
              position: 'top-right',
              timeout: 3000,
            });
            this.getSponsor(pay.id)
          }
        } catch (err) {
          Notify.create({
            message: 'Неизвестная ошибка',
            type: 'negative',
            position: 'top-right',
            timeout: 3000,
          });
        }
      },
    }
  })