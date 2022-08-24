
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('src/pages/dashboard/DashboardPage.vue') },
      { path: '/sponsors', name: 'sponsors', component: () => import('src/pages/sponsors/SponsorsList.vue') },
      { path: '/students', name: 'students', component: () => import('src/pages/students/StudentsList.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/SingleLayout.vue'),
    children: [
      { path: '/sponsors/view/:id', name: 'sponsorView', component: () => import('src/pages/sponsors/view/_id.vue') },
      { path: '/students/view/:id', name: 'studentsView', component: () => import('src/pages/students/view/_id.vue') },
      { path: '/students/create', name: 'studentsAdd', component: () => import('src/pages/students/create/CreateStudent.vue') },
    ]
  },

  {
    path: '/auth/login',
    component: () => import('layouts/Login.vue'),
    children: [
      { path: '', name: 'login', component: () => import('src/pages/login/LoginPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
