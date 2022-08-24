import { defineStore } from 'pinia';
import { api } from '../boot/axios';
import { Notify } from 'quasar';


export const useStudentsStore = defineStore({
    id: 'StudentsStore',
    state: () => ({
      students: null,
      instituteList: null,
      studentSponsorList: null,
      student: null,
      loading: false,
    }),
    actions: {
      async getStudents() {
        this.students = null;
        // this.loading = true;
        try {
          const response = await api.get('/student-list');
          if (response.status === 200) {
            this.students = response.data.results;
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
      async getStudent(pay) {
        this.student = null;
        // this.loading = true;
        try {
          const response = await api.get(`/student-detail/${pay}`);
          if (response.status === 200) {
            
            this.student = response.data;
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
      async addStudent(pay) {
        try {
          const response = await api.post(`/student-create`,pay);
          if (response.status === 200) {
            Notify.create({
              message: 'Student qo\'shildi',
              type: 'positive',
              position: 'top-right',
              timeout: 3000,
            });
            this.router?.push('/students');
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
      async updateStudent(pay) {
        try {
          const response = await api.put(`/student-update/${pay.id}`,pay);
          if (response.status === 200) {
            Notify.create({
              message: 'Student ma\'lumoti tahrirlandi',
              type: 'positive',
              position: 'top-right',
              timeout: 3000,
            });
            this.getStudent(pay.id)
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
      async getInstitute() {
        this.students = null;
        // this.loading = true;
        try {
          const response = await api.get('/institute-list');
          if (response.status === 200) {
            this.instituteList = response.data;
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
      async getStudentSponsorList(pay) {
        this.studentSponsorList = null;
        // this.loading = true;
        try {
          const response = await api.get(`/student-sponsor/${pay}`);
          if (response.status === 200) {
            
            this.studentSponsorList = response.data;
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