import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: null,
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    getPosts({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((posts) => {
          commit('updatePosts', posts.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getPostTitles(state) {
      return state.posts.map((post) => post.title);
    },
  },
});
