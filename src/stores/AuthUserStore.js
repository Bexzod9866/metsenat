import { defineStore } from 'pinia';
import { api, auth_api, admin_api } from '../boot/axios';
import { Cookies, Notify } from 'quasar';


export const useAuthUserStore = defineStore({
    id: 'AuthUserStore',
    state: () => ({
        user: null,
        loading: false,
    }),
    actions: {
        async login(payload) {
            this.clearData();
            this.loading = true;
            try {
                const response = await auth_api.post('/auth/login/', payload);
                if (response.status === 200) {
                    Cookies.set('access', response.data.access);
                    Cookies.set('refresh', response.data.refresh);
                    this.router?.push('/');
                }
            } catch (err) {
                console.log(err)
                const { errors = [{ message: 'Неизвестная ошибка' }] } = err?.response?.data;
                errors.forEach((err) => Notify.create({
                    message: err.message,
                    type: 'negative',
                    position: 'top-right',
                    timeout: 3000,
                }));
            } finally {
                this.loading = false;
            }
        },
        async logout() {
            this.clearData();
            this.router?.push('/auth/login');
        },
        async getAuthUser() {
            if (Cookies.get('access')) {
            }
            else {
                this.clearData();
                this.router?.push('/auth/login');
            }
        },
        async clearData() {
            Cookies.remove('access');
            Cookies.remove('refresh');
        }
    },
})