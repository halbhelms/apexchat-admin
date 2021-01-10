import { createStore } from "vuex";
import router from '../router/index';

export default createStore({
  state: {
    activeNav: '',
    currentUser: {
      firstName: 'Zach',
      lastName: 'Lefeistre',
      username: 'zlefeistre',
      password: 'apexforever',
      phone: '555.555.5555'
    },
    currentCompany: null,
    companies: [
      {
        id: 1,
        name: 'CJS Heating and Air',
        since: '2012',
        owner: 'Richard Davis',
        active: true,
        email: 'person@company.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        selfManage: true
      },
      {
        id: 2,
        name: 'Westside Plumbing',
        since: '2008',
        owner: 'John Kwartow',
        active: true,
        email: 'person@company.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        selfManage: true
      },
      {
        id: 3,
        name: 'Houston HVAC',
        since: '2016',
        owner: 'Max Eberschnaut',
        active: true,
        email: 'person@company.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        selfManage: true
      },
      {
        id: 4,
        name: "RB's Home Services",
        since: '2008',
        owner: 'Richard Bullworth',
        active: true,
        email: 'person@company.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        selfManage: false
      },
      {
        id: 5,
        name: 'RWB Plumbing',
        since: '2002',
        owner: 'Rene Bellagio',
        active: true,
        email: 'person@company.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        selfManage: true
      },
      {
        id: 6,
        name: 'Davis & Sons',
        since: '1994',
        owner: 'Alicia Davis',
        active: false,
        email: 'person@company.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        selfManage: false
      },
      {
        id: 7,
        name: 'Hoserson Electric',
        since: '2009',
        owner: 'Hosey Hoserson',
        active: true,
        email: 'person@company.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        selfManage: true
      },
    ]
  },
  
  getters: {
    getCompanyById(state) {
      return (id) => {
        return state.companies.find( company => company.id == id)
      }
    },

    getCurrentCompany(state) {
      return (id) => {
        return state.companies.find( company => company.id == id )
      }
    }
  },
  
  mutations: {
    ADD_COMPANY(state, newCompany) {
      newCompany.id = state.companies.length + 1;
      state.companies.push(newCompany)
    },

    EDIT_COMPANY(state, editedCompany) {
      let index = state.companies.findIndex( company => company.id == editedCompany.id)
      state.companies.splice(index, editedCompany)
    },

    SET_ACTIVE_NAV(state, navElement) {
      state.activeNave = navElement
    },

    SET_CURRENT_COMPANY(state, companyId) {
      state.currentCompany = companyId
    },

  },
  
  actions: {
    add_company({ commit }, company) {
      commit('ADD_COMPANY', company)
      router.push({name: 'Companies'})
    },

    edit_company({ commit }, company) {
      commit('EDIT_COMPANY', company)
      router.push({name: 'Companies'})
    },

    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    set_current_company({ commit }, id) {
      commit('SET_CURRENT_COMPANY', id)
    }
  },
  modules: {}
});
