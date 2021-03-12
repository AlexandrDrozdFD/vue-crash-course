import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

//register our router
Vue.use(Router);

//as result
export default new Router({
  mode: 'history', //! history ==> чтобы были hash('/') в путях
                  //! каждый объект представляет из себя новую страницу
                  //! два обязательных параметра:
                  //! path ==> главная страница
                  //! component ==> компонент, который должен быть загружен

  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todos',
      //! применим лэйзи лоадинг для каких-нибудь страниц
      component: () => import('./views/Todos.vue') //!динамический импорт
    }
  ],
});
