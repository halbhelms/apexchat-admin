import { createRouter, createWebHistory } from "vue-router";

import Companies from '../views/Companies'
import Leads from '../views/Leads'
import Videos from '../views/Videos'
import AddCompany from '../views/AddCompany'
import EditCompany from '../views/EditCompany.vue'
import Temp from '../views/Temp.vue'

const routes = [
  {
    path: "/",
    name: "Companies",
    component: Companies
  },
  {
    path: "/leads",
    name: "Leads",
    component: Leads,
    children: [
      {
        path: "/companies/:id/leads",
        name: "CompanyLeads",
        component: Leads
      }
    ]
  },
  {
    path: "/companies/:id/videos",
    name: "CompanyVideos",
    component: Videos
  },
  {
    path: "/companies/:id/edit",
    name: "EditCompany",
    component: EditCompany
  },
  {
    path: "/companies/add/",
    name: "AddCompany",
    component: AddCompany
  },
  {
    path: "/temp/",
    name: "Temp",
    component: Temp
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
