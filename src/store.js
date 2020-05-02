import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: null,
    comments: null,
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    updateComments(state, comments) {
      state.comments = comments;
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
    getComments({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          .then((comments) => {
            // save comments to state
            commit('updateComments', comments.data);
            // return comments in promise immediately, to be used on SinlePost component load
            resolve(comments.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
  },
});
