import { createRouter, createWebHistory } from "vue-router";

import Companies from '../views/Companies'
import Leads from '../views/Leads'
import Videos from '../views/Videos'

const routes = [
  {
    path: "/",
    name: "Companies",
    component: Companies
  },
  {
    path: "/leads/",
    name: "Leads",
    component: Leads
  },
  {
    path: "/videos/",
    name: "Videos",
    component: Videos
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
