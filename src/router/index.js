import { createRouter, createWebHistory } from 'vue-router';
import HeaderGnb from "../components/HeaderGnb.vue";

const routes = [
  {
    path : '/',
    name : 'HeaderGnb',
    component : HeaderGnb
  },
  { path : '/home',
    name : 'HomePage',
    component : () => import("../views/HomePage.vue")
  },
  {
    path : '/books',
    name : 'BooksPage',
    component : () => import("../views/BooksPage.vue")
  },
  {
    path : '/about',
    name : 'AboutPage',
    component : () => import("../views/AboutPage.vue")
  },
  {
    path : '/game',
    name : 'GamePage',
    component : () => import("../views/PlayGame.vue")
  },
  {
    path : '/account/JoinPage',
    name : 'JoinPage',
    component : () => import("../views/account/JoinPage.vue")
  },
  {
    path : '/account/JoinMain/:newname/:newage',
    name : 'JoinMain',
    component : () => import("../views/account/JoinMain.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;