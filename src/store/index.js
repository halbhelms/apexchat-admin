import { createStore } from "vuex";
import router from '../router/index';

export default createStore({
  state: {
    activeNav: '',
    currentUser: {
      firstName: 'Zach',
      lastName: 'Lefeistre',
      email: 'zlefeistre',
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
        active: true,
        email: 'person@company.com',
        phone: '555.555.5555',
        apexInfo: 'Lorem ipsum',
        selfManage: true,
        logo_url: 'http://logo.com'
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
        disputed: true,
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
        disputed: false,
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
        disputed: false,
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
        disputed: false,
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
        companyId: 1,
        title: 'Top 10 Plumbing Tips',
        embedCode: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/67hkx0ob00?videoFoam=true" title="FAQ_Disposal Care Video" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>`'
      },
      {
        id: 2,
        companyId: 1,
        title: 'What To Do if Your Water Heater Leaks',
        embedCode: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_hib29wm9h6 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/hib29wm9h6/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`'
      },
      {
        id: 3,
        companyId: 1,
        title: 'Preparing for Cold Weather',
        embedCode: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_lxtll40z2a videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/lxtll40z2a/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`'
      },
      {
        id: 4,
        companyId: 1,
        title: 'Causes for Low Water Pressure',
        embedCode: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_290f8sbgm7 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/290f8sbgm7/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`'
      },
      {
        id: 5,
        companyId: 1,
        title: 'Should You Buy a Tankless Hot Water Heater?',
        embedCode: '`<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_290f8sbgm7 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/290f8sbgm7/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`'
      },
    ],
    company_users: [
      {
        id: 1,
        company_id: 1,
        is_admin: true,
        user_name: 'jwatts',
        first_name: "James",
        last_name: 'Watts',
        email: 'jwatts@cps.com',
        phone: '6416589554'
      }
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

    getUsersForCompany(state) {
      return (id) => {
        return state.company_users.filter( user => user.company_id == id)
      }
    },

    getVideosForCompany(state) {
      return (id) => {
        return state.videos.filter( video => video.companyId == id)
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
      state.companies.splice(index, 1, editedCompany)
    },

    SET_ACTIVE_NAV(state, navElement) {
      state.activeNave = navElement
    },

    SET_CURRENT_COMPANY(state, companyId) {
      state.currentCompany = companyId
    },

    TOGGLE_DISPUTED(state, leadId) {
      let index = state.leads.findIndex( lead => lead.id == leadId)
      let lead = state.leads[index]
      let disputed = {disputed: !lead.disputed}
      let newLead = {...lead, ...disputed}
      state.leads.splice(index, 1, newLead)    
    }

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
    },

    toggle_disputed({ commit }, leadId) {
      commit('TOGGLE_DISPUTED', leadId)
    }
  },
  modules: {}
});
