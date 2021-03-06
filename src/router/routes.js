
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    // children: [
    // { path: '', component: () => import('pages/Index.vue') }
    // ],
    component: () => import('layouts/LandingPageLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') },
      { path: '/land', component: () => import('pages/LandingPageTest.vue') }
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
