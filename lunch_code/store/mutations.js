import * as types from './mutations_type.js'
// import Vue from 'vue'

// state
export const state = {
    show: false,
    order: {},
    cart: [],
    totalPrice: 0

}

// mutations
export const mutations = {

    [types.setFrameShow](state, data) {
        state.show = data;
    },
    [types.setOrder](state, data) {
        state.order = data;
    },
    [types.setCart](state, data) {
        // state.cart = data;
        let num = state.cart.length;
        state.cart.push({
            name: data[0],
            ice: data[1],
            sugar: data[2],
            total: data[3],
            count: data[4],
            price: data[5],
            size: data[6],
            egg: data[7],
            hot: data[8],
            serial: num
        });
        state.totalPrice += data[3]
    },
    [types.DeleteToCart](state, data) {
        let num;
        for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].serial == data) {
                num = state.cart[i].total;
                state.cart.splice(i, 1);

            }
        }
        state.totalPrice -= num;
        alert("刪除成功");
    },


}