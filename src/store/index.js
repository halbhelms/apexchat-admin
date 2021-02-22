import { createStore } from "vuex";
import router from '../router/index';

import differenceInDays from 'date-fns/differenceInDays'
import axios from 'axios'

export default createStore({
  state: {
    // loading: false,
    activeNav: '',
    lastLogin: new Date('12-31-2020'),
    dateFilter: 'sinceLogin',
    leadsOffset: 0,
    // How many leads should be returned?
    leadsPerPage: 15,
    // leads to display
    // activeSlice: [],
    leads: [],
    chats: [
      {
        id: 1,
        texts: [
          {
            participantDisplayName: 'Zach',
            text: "Welcome to CJS Heating & Air! A live, real person is available to talk at no obligation. How can we help you?"
          },
          { participantDisplayName: 'Visitor',
            text: "i have a leak in my roof that is leaking thru my bedroom ceiling"
          },
          {
            participantDisplayName: 'Zach',
            text: "I would be happy to help you. What zip code is the job site located in?"
          },     
          { participantDisplayName: 'Visitor',
            text: "98388"
          }, 
          {
            participantDisplayName: 'Zach',
            text: " Great! May I have your name please?"
          },                        
          { participantDisplayName: 'Visitor',
            text: "kathy walker"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Thanks, Kathy. May I have your phone number and email in case we need to contact you later?"
          },    
          { participantDisplayName: 'Visitor',
            text: " 253-468-1596 kwalker0926@comcast.net"
          },  
          {
            participantDisplayName: 'Zach',
            text: "Thanks. Can I ask how you heard about us?"
          },                        
          { participantDisplayName: 'Visitor',
            text: "online"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Okay. Are you a new or an existing customer?"
          },          
          {
            participantDisplayName: 'Visitor',
            text: "new customer"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Alright. How soon are you looking to utilize our services?"
          },          
          {
            participantDisplayName: 'Visitor',
            text: "I have a leak. I would say that tomorrow would be great"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Alright. Would you like to set up a consultation with one of our specialists who can answer your specific questions in detail?"
          },          
          {
            participantDisplayName: 'Visitor',
            text: "Yes"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Okay. I have forwarded your information to our office and you will be contacted as soon as possible. Is there anything else I can help you with?"
          },          
          {
            participantDisplayName: 'Visitor',
            text: "no thank you"
          },          
          {
            participantDisplayName: 'Zach',
            text: "Thank you for contacting CJS Heating & Air."
          },          
          {
            participantDisplayName: 'System',
            text: "The chat session has ended"
          },          
        ]
      }
    ],
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
    getLeadsForCompany(state) {
      return (id) => {
        return state.leads.filter( lead => lead.company_id == id)
      }
    },

    // date filter leads
    // this function calls one of three functions based on state.dateFilter
    // get actual leads
    getLeadsForDateFilterForCompany(state, getters) {
      return (companyId) => {
        let response = {}
        if (state.dateFilter === 'sinceLogin') {
          let leads = getters.getLeadsSinceLastLoginForCompany(companyId)
          response.leads = leads.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
          response.total = leads.length
        }
        if (state.dateFilter === 'last30') {
          let leads = getters.getLeadsLast30ForCompany(companyId)
          response.leads =leads.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
          response.total = leads.length
        }
        if (state.dateFilter === 'last60') {
          let leads = getters.getLeadsLast60ForCompany(companyId)
          response.leads = leads.slice(state.leadsOffset, state.leadsOffset + state.leadsPerPage)
          response.total = leads.length
        }
        return response
      }
    },

    // get leads since last login for specific company
    getLeadsSinceLastLoginForCompany(state) {
      return (companyId) => {
        let leads = []
        state.leads.forEach( lead => {
          if ((lead.company_id == companyId) && (lead.date - state.lastLogin > 0)) {
            leads.push(lead)
          }
        })
        return leads
      }
    },

    // get leads from last 30 days for specific company
    getLeadsLast30ForCompany(state) {
      let leads = []
      return (companyId) => {
        state.leads.forEach( lead => {
          if ( (lead.company_id == companyId) && (differenceInDays(new Date(), lead.date) < 31)) {
            leads.push(lead)
          }
        })
      return leads
      }
    },

    // get leads from last 60 days for specific company
    getLeadsLast60ForCompany(state) {
      let leads = []
      return (companyId) => {
        state.leads.forEach( lead => {
          if ( (lead.company_id == companyId) && (differenceInDays(new Date(), lead.date) < 61)) {
            leads.push(lead)
          }
        })
      return leads
      }
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

    // active slices
    // initialize_leads_active_slice_for_company({ commit, getters }, companyId){
    //   commit('SET_LEADS_ACTIVE_SLICE', getters.getLeadsForTimeFrameForCompany(companyId))
    // },

    // previous_leads_active_slice_for_company({ commit, state, getters }, companyId) {
    //   if (state.leadsOffset > 0) {
    //     commit('SET_LEADS_OFFSET', state.leadsOffset - state.leadsPerPage)
    //     commit('SET_LEADS_ACTIVE_SLICE', getters.getLeadsForTimeFrameForCompany(companyId))
    //   }
    // },
    
    // next_leads_active_slice_for_company({ commit, state, getters }, companyId) {  
    //   commit('SET_LEADS_OFFSET', state.leadsOffset + state.leadsPerPage)
    //   commit('SET_LEADS_ACTIVE_SLICE', getters.getLeadsForTimeFrame(companyId))
    // },
   
    async initialize_companies({ commit }) {
      const response = await axios.get('https://codelifepro.herokuapp.com/companies', {
        headers: {
          'X-User-Email': 'hal.helms@gmail.com',
          'X-User-Token': 'v8hDDSeYYQx2x52dynPk'
        }
      })
      commit('SET_COMPANIES', response.data)
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
