import { createStore } from "vuex";

export default createStore({
  state: {
    activeNav: '',
    currentUser: {
      firstName: 'Zach',
      lastName: 'Lefeistre',
      username: 'zlefeistre',
      password: 'apexforever'
    },
    currentCompany: 1,
    companies: [
      {
        id: 1,
        name: 'CJS Heating and Air',
        since: '2012',
        owner: 'Richard Davis',
        active: true
      },
      {
        id: 2,
        name: 'Westside Plumbing',
        since: '2008',
        owner: 'John Kwartow',
        active: true
      },
      {
        id: 3,
        name: 'Houston HVAC',
        since: '2016',
        owner: 'Max Eberschnaut',
        active: true
      },
      {
        id: 4,
        name: "RB's Home Services",
        since: '2008',
        owner: 'Richard Bullworth',
        active: true
      },
      {
        id: 5,
        name: 'RWB Plumbing',
        since: '2002',
        owner: 'Rene Bellagio',
        active: true
      },
      {
        id: 6,
        name: 'Davis & Sons',
        since: '1994',
        owner: 'Alicia Davis',
        active: false
      },
      {
        id: 7,
        name: 'Hoserson Electric',
        since: '2009',
        owner: 'Hosey Hoserson',
        active: true
      },
    ]
  },
  getters: {
    getCurrentCompany(state) {
      return (id) => {
        return state.companies.find( company => company.id == id )
      }
    }
  },
  mutations: {
    SET_ACTIVE_NAV(state, navElement) {
      state.activeNave = navElement
    },

    SET_CURRENT_COMPANY(state, companyId) {
      state.currentCompany = companyId
    },

  },
  actions: {
    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    set_current_company({ commit }, id) {
      commit('SET_CURRENT_COMPANY', id)
    }
  },
  modules: {}
});
