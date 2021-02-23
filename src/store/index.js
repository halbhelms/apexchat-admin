import { createStore } from "vuex";
import router from '../router/index';

import differenceInDays from 'date-fns/differenceInDays'
import axios from 'axios'

export default createStore({
  state: {
    leadsLoaded: false,
    activeNav: '',
    lastLogin: new Date('12-31-2020'),
    dateFilter: 'sinceLogin',
    leadsOffset: 0,
    // How many leads should be returned?
    leadsPerPage: 15,
    // leads to display
    // activeSlice: [],
    leads: [],
    chats: null,
    videos: [
      {
        id: 1,
        company_id: 1,
        title: 'Top 10 Plumbing Tips',
        embed_code: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/67hkx0ob00?videoFoam=true" title="FAQ_Disposal Care Video" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>`'
      },
      {
        id: 2,
        company_id: 1,
        title: 'What To Do if Your Water Heater Leaks',
        embed_code: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_hib29wm9h6 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/hib29wm9h6/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`'
      },
      {
        id: 3,
        company_id: 1,
        title: 'Preparing for Cold Weather',
        embed_code: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_lxtll40z2a videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/lxtll40z2a/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`'
      },
      {
        id: 4,
        company_id: 1,
        title: 'Causes for Low Water Pressure',
        embed_code: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_290f8sbgm7 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/290f8sbgm7/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`'
      },
      {
        id: 5,
        company_id: 1,
        title: 'Should You Buy a Tankless Hot Water Heater?',
        embed_code: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_290f8sbgm7 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/290f8sbgm7/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`'
      },
    ],
    companyUsers: [
      {
        id: 1,
        company_id: 1,
        type: 'Basic',
        user_name: 'jwatts',
        first_name: "James",
        last_name: 'Watts',
        email: 'jwatts@cps.com',
        phone: '6416589554',
        time_zone: '',
      },
      {
        id: 2,
        company_id: 1,
        is_admin: false,
        user_name: 'hhoserson',
        first_name: "Hosey",
        last_name: 'Hoserson',
        email: 'hhoserson@cps.com',
        phone: '7024563998'
      },
      {
        id: 3,
        company_id: 2,
        is_admin: true,
        user_name: 'mmantile',
        first_name: "Mickey",
        last_name: 'Mantle',
        email: 'mmantle@cps.com',
        phone: '702554863'
      },
    ],
    companies: []
  },
  
  getters: {
    getChatById(state) {
      return (id) => {
        return state.chats.find( chat => chat.id == id).texts
      }
    },

    getCompanyById(state) {
      return (id) => {
        return state.companies.find( company => company.id == id)
      }
    },

    getCompanyNameById(state) {
      return (id) => {
        return state.companies.find( company => company.id == id).name
      }
    },

    getCompanyUsersForCompany(state) {
      return (id) => {
        return state.companyUsers.filter( companyUser => companyUser.company_id == id)
      }
    },

    getCurrentCompany(state) {
      return (id) => {
        return state.companies.find( company => company.id == id)
      }
    },

    getCurrentUser() {
      return sessionStorage.getItem('currentUser')
    },

    getDisputedStatusById(state) {
      return (id) => {
        let lead =  state.leads.find( lead => lead.id == id)
        return lead.disputed
      }
    },

    getLeadById(state) {
      return (id) => {
        return state.leads.find( lead => lead.id == id)
      }
    },
// do we need this since we also need to filter by dateFilter?
    _getLeadsForCompany() {
      return async (id) => {
        const result = await axios({
          method: 'get',
          url: 'https://codelifepro.herokuapp.com/leads?company_id=' + id,
          data: {
            company_id: id,
          },
          headers: {
            'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
            'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token
          }
        })

        return result.data
      }
    },

    // date filter leads
    // this function calls one of three functions based on state.dateFilter
    // get actual leads
    getLeadsForDateFilter(state, getters) {
      console.log('in getLeadsForDateFilter')
      
        let response = {}
        if (state.dateFilter === 'sinceLogin') {
          let leads = getters.getLeadsSinceLastLogin
          response.leads = leads.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
          response.total = leads.length
        }
        if (state.dateFilter === 'last30') {
          let leads = getters.getLeadsLast30
          response.leads =leads.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
          response.total = leads.length
        }
        if (state.dateFilter === 'last60') {
          let leads = getters.getLeadsLast60
          response.leads = leads.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
          response.total = leads.length
        }
        return response
    },

    // get leads since last login
    getLeadsSinceLastLogin(state) {
      console.log('sinceLastLogin')
      
        let leads = []
        state.leads.forEach( lead => {
          if (new Date(lead.generated_at) - state.lastLogin > 0) {
            leads.push(lead)
          }
        })
        console.log("🚀 ~ file: index.js ~ line 191 ~ getLeadsSinceLastLogin ~ leads", leads)
        return leads
    },

    // get leads from last 30 days for specific company
    getLeadsLast30(state) {
      console.log('sinceLast30')
      let leads = []
        state.leads.forEach( lead => {
          if ( differenceInDays(new Date(), new Date(lead.generated_at)) < 31) {
            leads.push(lead)
          }
        })
        console.log("🚀 ~ file: index.js ~ line 204 ~ getLeadsLast30 ~ leads", leads)
      return leads
    },

    // get leads from last 60 days for specific company
    getLeadsLast60(state) {
      console.log('sinceLast90')
      let leads = []
        state.leads.forEach( lead => {
          if ( differenceInDays(new Date(), new Date(lead.generated_at)) < 61) {
            leads.push(lead)
          }
        })
        console.log("🚀 ~ file: index.js ~ line 217 ~ getLeadsLast60 ~ leads", leads)
      return leads
    },

    getUserById(state) {
      return (id) => {
        return state.companyUsers.find( user => user.id == id)
      }
    },

    getUsersForCompany(state) {
      return (id) => {
        return state.companyUsers.filter( user => user.company_id == id)
      }
    },

    getVideosForCompany(state) {
      return (id) => {
        return state.videos.filter( video => video.company_id == id)
      }
    }
  },
  
  mutations: {
    ADD_COMPANY(state, newCompany) {
      newCompany.id = state.companies.length + 1;
      state.companies.push(newCompany)
    },

    ADD_USER(state, user) {
      console.log("🚀 ~ file: index.js ~ line 384 ~ ADD_USER ~ user", user)
      state.companyUsers.push(user)
    },

    ADD_VIDEO(state, video) {
      state.videos.push(video)
    },

    DELETE_COMPANY_USER(state, userId) {
      const index = state.companyUsers.findIndex( user => user.id == userId)
      state.companyUsers.splice(index, 1)
    },

    DELETE_VIDEO(state, videoId) {
      const index = state.videos.findIndex( video => video.id == videoId)
      state.videos.splice(index, 1)      
    },

    SET_ACTIVE_NAV(state, navElement) {
      state.activeNave = navElement
    },

    SET_COMPANIES(state, companies) {
      state.companies = companies
    },

    SET_CURRENT_COMPANY(state, companyId) {
      state.currentCompany = companyId
    },

    SET_DATE_FILTER(state, filter) {
      state.dateFilter = filter
    },

    SET_LEADS(state, leads) {
      state.leads = leads
    },

    SET_DISPUTED(state, {leadId, status}) {
      let index = state.leads.findIndex( lead => lead.id == leadId)
      let lead = state.leads[index]
      let disputed = {status: status}
      let newLead = {...lead, ...disputed}
      console.log("🚀 ~ file: index.js ~ line 422 ~ SET_DISPUTED ~ newLead", newLead)
      
      state.leads.splice(index, 1, newLead)    
    },

    SET_LEADS_OFFSET(state, offset) {
      state.leadsOffset = offset
    },

    UPDATE_COMPANY(state, editedCompany) {
      let index = state.companies.findIndex( company => company.id == editedCompany.id)
      state.companies.splice(index, 1, editedCompany)
    },    

    UPDATE_USER(state, editedUser) {
      console.log("🚀 ~ file: index.js ~ line 409 ~ UPDATE_USER ~ editedUser", editedUser)
      const index = state.companyUsers.findIndex(companyUser => editedUser.id == companyUser.id)
      state.companyUsers.splice(index, 1, editedUser)
    },
  },
  
  actions: {
    add_company({ commit, state }, company) {
     // adding id only for testing. Real companies will get id from API
      if( !company.id ) {
        company.id = state.companies.length + 1
      }      
      commit('ADD_COMPANY', company)
      router.push({name: 'Companies'})
    },

    async add_user({ commit }, user) {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://codelifepro.herokuapp.com/users/',
          data: user,
          headers: {
            'X-User-Email': sessionStorage.getItem('email'),
            'X-User-Token': sessionStorage.getItem('authToken')
          }
        })
        commit('ADD_USER', response.data)
        return {
          success: true,
          payload: response.data,
        }
      } catch(err) {
        console.log('error', err)
        return {
          success: false,
          payload: err,
        }
      }
    },

    add_video({ commit, state }, video) {
      // adding id only for testing. Real videos will get id from API
      if( !video.id ) {
        video.id = state.videos.length + 1
      }
      commit('ADD_VIDEO', video)
    },

    delete_company_user({ commit }, userId) {
      commit('DELETE_COMPANY_USER', userId)
    },

    delete_video({ commit }, videoId) {
      commit('DELETE_VIDEO', videoId)
    },
   
    async initialize_companies({ commit}) {
      const response = await axios.get('https://codelifepro.herokuapp.com/companies', {
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token
        }
      })
      commit('SET_COMPANIES', response.data)
    },

    async initialize_leads_for_company_id({ commit, state }, id) {
      console.log('in initialize_leads...')
      
        const result = await axios({
          method: 'get',
          url: 'https://codelifepro.herokuapp.com/leads?company_id=' + id,
          headers: {
            'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
            'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token
          }
        })
        state.leadsLoaded = true
        
        commit('SET_LEADS', result.data)
        console.log('state.leads.length', state.leads.length);
    },

    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    set_current_company({ commit }, id) {
      commit('SET_CURRENT_COMPANY', id)
    },

    set_current_user({ commit }, user) {
      commit('SET_CURRENT_USER', user)
    },

    set_date_filter({ commit }, filter) {
      commit('SET_DATE_FILTER', filter)
    },

    set_disputed({ commit }, options) {
      commit('SET_DISPUTED', options)
    },

    update_company({ commit }, company) {
      axios({
        method: 'patch',
        url: 'https://codelifepro.herokuapp.com/companies/' + company.id,
        data: company,
        headers: {
          'X-User-Email': 'hal.helms@gmail.com',
          'X-User-Token': 'v8hDDSeYYQx2x52dynPk' 
        }
      })
        .then(commit('UPDATE_COMPANY', company))
        .then(console.log('updating API company info'))
        .then(router.push({ name: 'Companies' }))
        .catch(err => console.log('err', err))
    },    

    update_user({ commit }, user) {
      console.log("🚀 ~ file: index.js ~ line 443 ~ update_user ~ user", user)
      commit('UPDATE_USER', user)
    },

    // changing leadsOffset
    next_leads({ commit, state }) {
      commit('SET_LEADS_OFFSET', state.leadsOffset + state.leadsPerPage)
    },
    
    previous_leads({ commit, state }) {
      commit('SET_LEADS_OFFSET', state.leadsOffset !== 0 ? state.leadsPerPage - state.leadsOffset : 0)
    },

  },

  modules: {}
});
