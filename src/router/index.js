import { createRouter, createWebHistory } from "vue-router";

import Companies from '../views/Companies'
import Leads from '../views/Leads'
import Videos from '../views/Videos'
import Edit from '../views/Edit'
import AddCompany from '../views/AddCompany'

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
    name: "CompanyEdit",
    component: Edit
  },
  {
    path: "/companies/add/",
    name: "AddCompany",
    component: AddCompany
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
