import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactsList:[
      {
        name:"John Doe",
        phoneNum: "+38625815333",
        email: "sdklvnfsjd@gmail.com"
      },
      {
        name:"Alex Kid",
        phoneNum: "+3865165333",
        email: "sddfsvzsfdvvnfsjd@gmail.com"
      },
      {
        name:"Roman Coldwell",
        phoneNum: "+386963878333",
        email: "sdksfdvblvnfsjd@gmail.com"
      },
      {
        name:"Lady Sansa",
        phoneNum: "+38651515159",
        email: "sdklfsuryunfsjd@gmail.com"
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
