// Vuex 스토어를 정의하여 모달과 관련된 상태를 관리
const modalStore = {
  state: {
    // 로그인 창
    isIntroExplode: false,
    isIntroBuzz: false,
  },

  getters: {

  },
  
  mutations: {
    CloseAll: (state) => {
      state.isIntroExplode = false
      state.isIntroBuzz = false
    },
  },

  actions: {

  }
};

// modalStore를 내보냄
export default modalStore;
