import * as types from './mutations_type.js'
// import Vue from 'vue'

// state
export const state = {
    logo: '',
    baseurl: '',
    count: 0,
    products: [],
    prices: 0,
    totalCount: 0,
    original_freight: 0,
    freight: 0,
    full: 0,
    token: 0,
    checkLogin: 0,
    memberId: null,
    blocks: {},
    selected: '',
    layers: '',
    layer1: '',
    layer2: '',
    layer3: '',
    layer4: '',
    newsData: '',
    productData: '',
    photoData: '',
    qaData: '',
    downloadData: '',
    option: {
        profile: "",
        profilePick: "",
        news: "",
        newsPick: "",
        product: "",
        productPick: "",
        photo: "",
        photoPick: "",
        qa: "",
        qaPick: "",
        download: "",
        downloadPick: "",
        contact: "",
        contactPick: "",
        login: "",
        loginPick: "",
        carPick: "",
        profilePick2: "",
        newsPick2: "",
        productPick2: "",
        photoPick2: "",
        qaPick2: "",
        downloadPick2: "",
        contactPick2: "",
        newsnum: 0,
        productnum: 0,
        photonum: 0,
        qanum: 0,
        downloadnum: 0
    },
    level: 0,
    config: {
        toolbar: [
            ["Source", "-"],
            ["PasteFromWord", "-", "Undo", "Redo"],
            [
                "Bold",
                "Italic",
                "Underline",
                "Strike",
                "Subscript",
                "Superscript",
                "-",
                "CopyFormatting",
                "RemoveFormat"
            ],
            [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "-",
                "Blockquote",
                "CreateDiv",
                "-",
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock",
                "-",
                "BidiLtr",
                "BidiRtl",
                "Language"
            ],
            ["Link", "Unlink", "Anchor"],
            [
                "Image",
                "EasyImageUpload",
                "Table",
                "HorizontalRule",
                "Smiley",
                "SpecialChar",
                "PageBreak",
                "Iframe"
            ],
            ["Styles", "Format", "Font", "FontSize"],
            ["TextColor", "BGColor"],
            ["Maximize", "ShowBlocks"],
            ["About"]
        ],
        height: 300,
        filebrowserImageBrowseUrl: "/api/js/ckfinder/ckfinder.html?type=Images",
        // filebrowserImageUploadUrl: "/api/images.php",
        filebrowserImageUploadUrl: "/api/js/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files",
        filebrowserWindowWidth: "1000",
        filebrowserWindowHeight: "700"
    }
}

// mutations
export const mutations = {

    [types.setNewsData](state, data) {
        state.newsData = data;
    },

    [types.setProductData](state, data) {
        state.productData = data;
    },

    [types.setBaseUrl](state, baseurl) {
        state.baseurl = baseurl;
    },

    [types.setPhotoData](state, data) {
        state.photoData = data;
    },

    [types.setQaData](state, data) {
        state.qaData = data;
    },

    [types.setDownloadData](state, data) {
        state.downloadData = data;
    },


    [types.setLevel](state, level) {
        state.level = level;
    },
    [types.setLogo](state, logo) {
        state.logo = logo;
    },
    [types.setLayer](state, layer) {
        state.layer1 = layer.layer1;
        state.layer2 = layer.layer2;
        state.layer3 = layer.layer3;
        state.layer4 = layer.layer4;
        for (let i = 0; i < state.layer1.length; i++) {
            for (let j = 0; j < state.layer2.length; j++) {
                if (state.layer2[j].layer1_id == state.layer1[i].serial) {
                    state.layer1[i].hasnext = 'has';
                }
                for (let k = 0; k < state.layer3.length; k++) {
                    if (state.layer3[k].layer2_id == state.layer2[j].serial) {
                        state.layer2[j].hasnext = 'has';
                    }
                    for (let m = 0; m < state.layer4.length; m++) {
                        if (state.layer4[m].layer3_id == state.layer3[k].serial) {
                            state.layer3[k].hasnext = 'has';
                        }
                    }
                }
            }
        }
    },
    [types.setOption](state, option) {
        state.option.profile = option.profile;
        state.option.profilePick = option.profilePick;
        state.option.news = option.news;
        state.option.newsPick = option.newsPick;
        state.option.product = option.product;
        state.option.productPick = option.productPick;
        state.option.photo = option.photo;
        state.option.photoPick = option.photoPick;
        state.option.qa = option.qa;
        state.option.qaPick = option.qaPick;
        state.option.download = option.download;
        state.option.downloadPick = option.downloadPick;
        state.option.contact = option.contact;
        state.option.contactPick = option.contactPick;
        state.option.login = option.login;
        state.option.loginPick = option.loginPick;
        state.option.carPick = option.carPick;

        state.option.profilePick2 = option.profilePick2;
        state.option.newsPick2 = option.newsPick2;
        state.option.productPick2 = option.productPick2;
        state.option.photoPick2 = option.photoPick2;
        state.option.qaPick2 = option.qaPick2;
        state.option.downloadPick2 = option.downloadPick2;
        state.option.contactPick2 = option.contactPick2;
        state.option.newsnum = option.newsnum;
        state.option.productnum = option.productnum;
        state.option.photonum = option.photonum;
        state.option.qanum = option.qanum;
        state.option.downloadnum = option.downloadnum;
    },
    [types.clearProduct](state) {
        state.products = [];
        state.prices = 0;
        state.freight = 0;
        state.totalCount = 0;
    },
    [types.AddToken](state, token) {
        state.token = token;
    },
    [types.checkLoging](state, cookie) {
        if (state.token == cookie) {
            state.checkLogin = true;
        } else {
            state.checkLogin = false;
        }
    },
    [types.AddMemberId](state, memberId) {
        state.memberId = memberId;
    },
    [types.setFreight](state, freight) {
        state.original_freight = freight[0];
        state.full = freight[1];
        state.selected = freight[2];
        state.blocks = freight[3];
    },
    [types.ADDTOCART](state, carData) {
        // let newCar = carData;
        var check = true;
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].serial == carData[0].serial) {
                check = false;
                state.products[i].buycount = carData[1];
                // state.prices = parseInt(carData[0].new_price * carData[1]) + state.prices;
            }
        }
        if (check) {
            state.products.push({
                serial: carData[0].serial,
                title: carData[0].title,
                s_title: carData[0].title,
                content: carData[0].content,
                price: carData[0].price,
                new_price: carData[0].new_price,
                reserve: carData[0].reserve,
                savetystock: carData[0].savetystock,
                gift: carData[0].gift,
                buycount: carData[1],
            });
            // state.prices = parseInt(carData[0].new_price * carData[1]) + state.prices;
        }
        let new_num = 0;
        for (let j = 0; j < state.products.length; j++) {
            new_num += state.products[j].new_price * state.products[j].buycount;
        }
        state.prices = new_num;

        if (state.selected == '1') {
            if (state.prices >= state.full) {
                state.freight = 0;
            } else {
                state.freight = parseInt(state.original_freight);
            }
        } else {
            if (state.prices >= state.blocks.interval1_1 && state.prices <= state.blocks.interval1_2) {
                state.freight = parseInt(state.blocks.money1);
            } else if (state.prices >= state.blocks.interval2_1 && state.prices <= state.blocks.interval2_2) {
                state.freight = parseInt(state.blocks.money2);
            } else if (state.prices >= state.blocks.interval3_1 && state.prices <= state.blocks.interval3_2) {
                state.freight = parseInt(state.blocks.money3);
            }
        }

        state.totalCount = parseInt(state.prices + state.freight);
        alert("加入購物車成功");
    },

    [types.DeleteToCart](state, num) {
        for (let i = 0; i < state.products.length; i++) {
            if (state.products[i].serial == num) {
                state.products.splice(i, 1);
            }
        }

        let new_num = 0;
        for (let j = 0; j < state.products.length; j++) {
            new_num += state.products[j].new_price * state.products[j].buycount;
        }
        state.prices = new_num;

        if (state.prices >= state.full) {
            state.freight = 0;
        } else {
            state.freight = parseInt(state.original_freight);
        }
        state.totalCount = parseInt(state.prices + state.freight);
        alert("刪除成功");
    },
}