// 創建 Vuex Store
const store=Vuex.createStore({
	state: {
		count: 0,
		inpFilter: "",
		tags:['小資旅遊','中秋節','日本','韓國','彩繪租車']
	},
	mutations: {
		set_InpFilter(state, str) { state.inpFilter=str },
	},
	actions: {
		setInpFilter({ commit }, str) {
			commit('set_InpFilter', str);
		},
	},
});