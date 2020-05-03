import Vue from 'vue';
import Router from 'vue-router';
import PostList from './components/posts/PostList.vue';
import SinglePost from './components/posts/SinglePost.vue';
import UserProfile from './components/users/UserProfile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList,
    },
    {
      path: '/post/:id',
      name: 'SinglePost',
      component: SinglePost,
    },
    {
      path: '/users/:id',
      name: 'UserProfile',
      component: UserProfile,
    },
  ],
});
