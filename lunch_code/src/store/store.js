const store = new Vuex.Store({
    state: {
        count: 20
    },
    mutations: { // 包含了多個直接更新state函式的物件
        INCREMENT(state) {
            state.count = state.count + 1;
        },
        DECREMENT(state) {
            state.count = state.count - 1;
        }
    },
    getters: { // 當讀取屬性值時自動呼叫並返回屬性值
        evenOrOdd(state) {
            return state.count % 2 === 0 ? "偶數" : "奇數";
        }
    },
    actions: { // 包含了多個對應事件回撥函式的物件
        incrementIfOdd({
            commit,
            state
        }) { // 帶條件的action
            if (state.count % 2 === 1) {
                commit('INCREMENT')
            }
        },
        incrementAsync({
            commit
        }) { //非同步的action
            setInterval(function () {
                commit('INCREMENT')
            }, 2000);
        }

    }
})