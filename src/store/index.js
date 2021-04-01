import { createStore } from "vuex";
import router from '../router/index';

import differenceInDays from 'date-fns/differenceInDays'
import axios from 'axios'

export default createStore({
  state: {
    activeNav: '',
    activeChat: null,
    lastLogin: new Date('1-18-2021'),
    dateFilter: 'sinceLogin',
    leadsOffset: 0,
    // How many leads should be returned?
    leadsPerPage: 15,
    // leads to display
    // activeSlice: [],
    leads: [],
    chats: {},
    videos: [],
    users: [],
    companies: [],
    ApiBase: process.env.VUE_APP_API_BASE,
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
        let lead = state.leads.find( lead => lead.id == id)
        return lead
      }
    },

    // date filter leads
    // this function calls one of three functions based on state.dateFilter
    // get actual leads
    getLeadsForDateFilter(state, getters) {
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
        let leads = []
        state.leads.forEach( lead => {
          if (new Date(lead.generated_at) - state.lastLogin > 0) {
            leads.push(lead)
          }
        })
        return leads
    },

    // get leads from last 30 days for specific company
    getLeadsLast30(state) {
      let leads = []
        state.leads.forEach( lead => {
          if ( differenceInDays(new Date(), new Date(lead.generated_at)) < 31) {
            leads.push(lead)
          }
        })
      return leads
    },

    // get leads from last 60 days for specific company
    getLeadsLast60(state) {
      let leads = []
        state.leads.forEach( lead => {
          if ( differenceInDays(new Date(), new Date(lead.generated_at)) < 61) {
            leads.push(lead)
          }
        })
      return leads
    },

    getUserById(state) {
      return (id) => {
        return state.users.find( user => user.id == id)
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
    SET_ACTIVE_CHAT(state, chat) {
      state.chats[chat.id] = chat
      state.activeChat = chat
    },

    // ADD_COMPANY(state, newCompany) {
    //   newCompany.id = state.companies.length + 1;
    //   state.companies.push(newCompany)
    // },

    ADD_USER(state, user) {
      state.users.push(user)
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
      state.leads.splice(index, 1, newLead)    
    },

    SET_LEADS_OFFSET(state, offset) {
      state.leadsOffset = offset
    },

    SET_USERS(state, users) {
      state.users = users
    },

    SET_VIDEOS(state, videos) {
      state.videos = videos
    },

    UPDATE_COMPANY(state, editedCompany) {
      let index = state.companies.findIndex( company => company.id == editedCompany.id)
      state.companies.splice(index, 1, editedCompany)
    }
  },
  
  actions: {
    async add_company({ dispatch, state }, company) {
      await axios({
        method: 'POST',
        url: `https://${state.ApiBase}/companies`,
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token          
        },
        data: company
      })
      // load companies and reroute
      dispatch('initialize_companies')
      router.push({name: 'Companies'})
    },

    async add_user({ dispatch, state }, user) {
      try {
        let addedUser = await axios({
          method: 'post',
          url: `https://${state.ApiBase}/users/`,
          data: user,
          headers: {
            'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
            'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token
          }        })
        // reload the users
        dispatch('initialize_users_for_company_id', addedUser.data.company_id)
      } catch(err) {
        console.log('error', err)
      }
    },

    async add_video({ commit, state }, video) {
      let result = await axios({
        method: 'post',
        url: `https://${state.ApiBase}/videos`,
        data: video,
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token,          
        }
      })
      
      commit('ADD_VIDEO', result.data)
    },

    async delete_user({ dispatch, state }, payload) {
      await axios({
        method: 'delete',
        url: `https://${state.ApiBase}/users/` + payload.userId,
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token          
        }
      })

      dispatch('initialize_users_for_company_id', payload.companyId)
    },

    async delete_video({ commit, state }, videoId) {
      await axios({
        method: 'delete',
        url: `https://${state.ApiBase}/videos/` + videoId,
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token,
        }        
      })

      commit('DELETE_VIDEO', videoId)
    },
   
    async initialize_companies({ commit, state }) {
      let response = await axios({
        method: 'get',
        url: `https://${state.ApiBase}/companies`,
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token          
        }
      })
  
      commit('SET_COMPANIES', response.data)
    },

    async load_and_set_active_chat_by_id({ commit, state }, id) {
      // if we already have the chat, make that the activeChat...
      if (state.chats[id]) {
        commit('SET_ACTIVE_CHAT', state.chats[id])
      } else {
        // ...otherwise fetch the chat and make that the activeChat
        const response = await axios({
          method: 'get',
          url: `https://${state.ApiBase}/chats/${id}`,
          headers: {
            'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
            'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token,
          }
        })

        commit('SET_ACTIVE_CHAT', response.data)
      }
    },

    async initialize_leads_for_company_id({ commit, state }, id) {
      console.log('in initialize_leads...')
      
        const result = await axios({
          method: 'get',
          url: `https://${state.ApiBase}/leads?company_id=` + id,
          headers: {
            'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
            'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token
          }
        })
        // state.leadsLoaded = true
        
        commit('SET_LEADS', result.data)
    },

    async initialize_users_for_company_id({ commit, state }, id) {
      let result = await axios({
        method: 'get',
        url: `https://${state.ApiBase}/users?company_id=` + id,
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token,          
        }
      })
      commit ('SET_USERS', result.data)
    },

    async initialize_videos_for_company_id({ commit, state }, id) {
      let result = await axios({
        method: 'get',
        url: `https://${state.ApiBase}/videos?company_id=` + id,
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token,          
        }
      })

      commit('SET_VIDEOS', result.data)
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

    update_company({ commit, state }, company) {
      axios({
        method: 'patch',
        url: `https://${state.ApiBase}/companies/` + company.id,
        data: company,
        headers: {
          'X-User-Email': 'hal.helms@gmail.com',
          'X-User-Token': 'v8hDDSeYYQx2x52dynPk' 
        }
      })
        .then(commit('UPDATE_COMPANY', company))
        .then(router.push({ name: 'Companies' }))
        .catch(err => console.log('err', err))
    },    

    async update_user({ dispatch, state }, user) {
      await axios({
        method: 'patch',
        url: `https://${state.ApiBase}/users/` + user.id,
        headers: {
          'X-User-Email': JSON.parse(sessionStorage.getItem('currentUser')).email,
          'X-User-Token': JSON.parse(sessionStorage.getItem('currentUser')).authentication_token,          
        },
        data: user,
      })
      // reload store's users
      dispatch('initialize_users_for_company_id', user.company_id)
    },

    // changing leadsOffset
    next_leads({ commit, state }) {
      commit('SET_LEADS_OFFSET', state.leadsOffset + state.leadsPerPage)
    },
    
    previous_leads({ commit, state }) {
      commit('SET_LEADS_OFFSET', state.leadsOffset !== 0 ? state.leadsOffset - state.leadsPerPage  : 0)
    },

  },

  modules: {}
});
