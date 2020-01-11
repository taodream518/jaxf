import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Class = () => import("views/class/Class");
const News = () => import("views/news/News");
const About = () => import("views/about/About");
const Contact = () => import("views/contact/Contact");

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/class",
    name: "class",
    component: Class
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
