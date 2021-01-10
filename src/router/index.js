import { createRouter, createWebHistory } from "vue-router";

import Companies from '../views/Companies'
import Leads from '../views/Leads'
import Videos from '../views/Videos'
import Edit from '../views/Edit'

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
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
