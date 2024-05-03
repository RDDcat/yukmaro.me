import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: [],
});

// 작성한 모듈을 가져오기
import cacheStore from '@/store/cacheStore.js';
import modalStore from './store/modalStore';
const store = new Vuex.Store({
  
  modules: {
    cacheStore,
    modalStore,
  },
  plugins: [vuexLocal.plugin],
});
export default store;