// import Vue from 'vue'
// import mutations from './mutations'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const AddMemberId = ({
    commit
}, memberId) => {
    commit(types.AddMemberId, memberId);
}

export const setBaseUrl = ({
    commit
}, baseurl) => {
    commit(types.setBaseUrl, baseurl);
}


export const setLogo = ({
    commit
}, logo) => {
    commit(types.setLogo, logo);
}

export const clearProduct = ({
    commit
}) => {
    commit(types.clearProduct);
}

export const AddToken = ({
    commit
}, token) => {
    commit(types.AddToken, token);
}

export const setFreight = ({
    commit
}, freight) => {
    commit(types.setFreight, freight);
}

export const checkLoging = ({
    commit
}, cookie) => {
    commit(types.checkLoging, cookie);
}

export const AddToCart = ({
    commit
}, carData) => {
    commit(types.ADDTOCART, carData);
}

export const DeleteToCart = ({
    commit
}, num) => {
    commit(types.DeleteToCart, num);
}

export const setLayers = ({
    commit
}) => {
    commit(types.setLayers);
}

export const setLayer = ({
    commit
}, layer) => {
    commit(types.setLayer, layer);
}

export const setOption = ({
    commit
}, option) => {
    commit(types.setOption, option);
}

export const setLevel = ({
    commit
}, level) => {
    commit(types.setLevel, level);
}

export const setNewsData = ({
    commit
}, data) => {
    commit(types.setNewsData, data);
}
export const setProductData = ({
    commit
}, data) => {
    commit(types.setProductData, data);
}
export const setPhotoData = ({
    commit
}, data) => {
    commit(types.setPhotoData, data);
}
export const setQaData = ({
    commit
}, data) => {
    commit(types.setQaData, data);
}
export const setDownloadData = ({
    commit
}, data) => {
    commit(types.setDownloadData, data);
}