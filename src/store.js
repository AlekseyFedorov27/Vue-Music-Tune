import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    searchArtist: [],
    items: []

  },
  getters:{
    getPlayList(state){
      return state.items
    },
    getPlay:(state)=>(id)=>{
      return state.items.find(items=>items.artistId==id)
    }
  },
  mutations: {
    searchMusic(state, payload) {
      state.items = payload
    },
  },
  actions: {
    searchMusic({commit}, payload){

      axios
      .get(`https://itunes.apple.com/search?term=${payload}`)
      .then(response => {
        this.info = response.data.results;
        commit('searchMusic', this.info)
        // console.log(this.info)
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    }
  }
})
