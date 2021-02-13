import { createStore } from "vuex";
import router from '../router/index';

export default createStore({
  state: {
    activeNav: '',
    dateFilter: 'Since login',
    currentUser: {
      firstName: 'Zach',
      lastName: 'Lefeistre',
      email: 'zlefeistre',
      logoUrl: 'http://logos.com',
      authentication_token: 'apexforever',
      phone: '555.555.5555',
      company: null,
      time_zone: 'EST'
    },
    companies: [
      {
        id: 1,
        name: 'CJS Heating and Air',
        since: '2012',
        owner: 'Richard Davis',
        status: 'active',
        email: 'person@company.com',
        logo_url: 'http://logos.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        self_managed_web: false,
      },
      {
        id: 2,
        name: 'Westside Plumbing',
        since: '2008',
        owner: 'John Kwartow',
        status:'active',
        email: 'person@company.com',
        logo_url: 'http://logos.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        self_managed_web: false,
        time_zone: 'Hawaii'
      },
      {
        id: 3,
        name: 'Houston HVAC',
        since: '2016',
        owner: 'Max Eberschnaut',
        status:'active',
        email: 'person@company.com',
        logo_url: 'http://logos.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        self_managed_web: true,
        time_zone: 'Hawaii'
      },
      {
        id: 4,
        name: "RB's Home Services",
        since: '2008',
        owner: 'Richard Bullworth',
        status:'active',
        email: 'person@company.com',
        logo_url: 'http://logos.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        self_managed_web: false,
        time_zone: 'Hawaii'
      },
      {
        id: 5,
        name: 'RWB Plumbing',
        since: '2002',
        owner: 'Rene Bellagio',
        status:'active',
        email: 'person@company.com',
        logo_url: 'http://logos.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        self_managed_web: true,
        time_zone: 'Hawaii'
      },
      {
        id: 6,
        name: 'Davis & Sons',
        since: '1994',
        owner: 'Alicia Davis',
        status: 'active',
        email: 'person@company.com',
        logo_url: 'http://logos.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        self_managed_web: false,
        time_zone: 'Hawaii'
      },
      {
        id: 7,
        name: 'Hoserson Electric',
        since: '2009',
        owner: 'Hosey Hoserson',
        status:'active',
        email: 'person@company.com',
        logo_url: 'http://logos.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        self_managed_web: true,
        time_zone: 'Hawaii'
      },
    ],
    leads: [
      {
        id: 1,
        chatId: 1,
        companyId: 1,
        date: new Date(2020, 11, 24, 8, 29),
        type: 'Sales',
        email: 'eholgren@gmail.com',
        contact: 'Edgar Holdren',
        location: 'Capital City, TX',
        address: '2071 Broad St. Capital City, TX',
        phone: 7413695442,
        dispute_status: 'disputed',
      },
      {
        id: 2,
        companyId: 1,
        chatId: 0,
        date: new Date(2020, 11, 7, 14, 57),
        type: 'Sales',
        users: [],
        email: 'donna_h@yahoo.com',
        contact: 'Donna Holmes',
        location: 'Capital City, TX',
        address: '1156 N. Oak St, Capital City, TX',
        phone: 7418592541,
        dispute_status: 'undisputed',
      },
      {
        id: 3,
        companyId: 1,
        chatId: 0,
        date: new Date(2020, 11, 26, 13, 30),
        type: 'Sales',
        users: [],
        email: 'damien_edwards@gmail.com',
        contact: 'Damien Edwards',
        location: 'Capital City, TX',
        address: '1102 Verdugo. Capital City, TX',
        phone: 7415684529,
        dispute_status: 'undisputed',
      },
      {
        id: 4,
        companyId: 1,
        chatId: 0,
        date: new Date(2020, 11, 29, 16, 14),
        type: 'Sales',
        users: [],
        email: 'sdawson@locals.com',
        contact: 'Sandra Dawson',
        location: 'Capital City, TX',
        address: '237 Rainbow. Capital City, TX',
        phone: 7415234897,
        dispute_status: 'undisputed',
      },
    ],
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
    ]
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

    getLeadsForCompany(state) {
      return (id) => {
        return state.leads.filter( lead => lead.companyId == id)
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

    SET_CURRENT_COMPANY(state, companyId) {
      state.currentCompany = companyId
    },

    SET_DATE_FILTER(state, filter) {
      state.dateFilter = filter
    },

    SET_DISPUTED(state, {leadId, status}) {
      let index = state.leads.findIndex( lead => lead.id == leadId)
      let lead = state.leads[index]
      let disputed = {dispute_status: status}
      let newLead = {...lead, ...disputed}
      console.log("🚀 ~ file: index.js ~ line 422 ~ SET_DISPUTED ~ newLead", newLead)
      
      state.leads.splice(index, 1, newLead)    
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
    add_company({ commit }, company) {
      commit('ADD_COMPANY', company)
      router.push({name: 'Companies'})
    },

    add_user({ commit, state }, user) {
      user.id = state.companyUsers.length + 1
      commit('ADD_USER', user)
    },

    add_video({ commit, state }, video) {
      if( !video.id ) {
        video.id = state.videos.length + 1
      }
      console.log('video', video);
      
      commit('ADD_VIDEO', video)
    },

    delete_company_user({ commit }, userId) {
      commit('DELETE_COMPANY_USER', userId)
    },

    delete_video({ commit }, videoId) {
      commit('DELETE_VIDEO', videoId)
    },

    set_active_nav({ commit }, navElement) {
      commit('SET_ACTIVE_NAV', navElement)
    },

    set_current_company({ commit }, id) {
      commit('SET_CURRENT_COMPANY', id)
    },

    set_date_filter({ commit }, filter) {
      commit('SET_DATE_FILTER', filter)
    },

    set_disputed({ commit }, options) {
      commit('SET_DISPUTED', options)
    },

    update_company({ commit }, company) {
      commit('UPDATE_COMPANY', company)
      router.push({name: 'Companies'})
    },    

    update_user({ commit }, user) {
      console.log("🚀 ~ file: index.js ~ line 443 ~ update_user ~ user", user)
      commit('UPDATE_USER', user)
    },
  },

  modules: {}
});
