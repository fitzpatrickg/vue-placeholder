import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    comments: [],
    users: [],
  },
  getters: {
    associateUserAndPost(state) {
      const usersAndPosts = state.users.map((user) => ({
        id: user.id,
        username:
          user.username,
      }));

      state.posts.forEach((post) => {
        for (let i = 0; i < usersAndPosts.length; i++) {
          if (post.userId === usersAndPosts[i].id) {
            usersAndPosts[i].title = post.title;
            usersAndPosts[i].id = post.id;
            usersAndPosts[i].userId = post.userId;
            break;
          }
        }
      });
      return usersAndPosts;
    },
    getUserById(state, id) {
      return state.users.find((user) => user.id === parseInt(id, 10));
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    updateComments(state, comments) {
      state.comments = comments;
    },
    updateUsers(state, users) {
      state.users = users;
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
    getUsers({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then((users) => {
          commit('updateUsers', users.data);
        });
    },
  },
});
