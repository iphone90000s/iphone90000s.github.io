// import Vue from 'vue'
// import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const setFrameShow = ({
    commit
}, show) => {
    commit(types.setFrameShow, show);
}
export const setOrder = ({
    commit
}, order) => {
    commit(types.setOrder, order);
}
export const setCart = ({
    commit
}, cart) => {
    commit(types.setCart, cart);
}
export const DeleteToCart = ({
    commit
}, num) => {
    commit(types.DeleteToCart, num);
}