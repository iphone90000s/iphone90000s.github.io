<template>
  <div class="main-content">
    <div class="top-menu">
      <div class="title">吃便當囉</div>
    </div>
    <div class="content">
      <div class="order-menu">
        <div class="kind">特選商業套餐</div>
        <div class="list" v-for="(list, index) in ricebox" :key="index">
          <div @click="checkOrder(list)" class="name">{{list.name}}</div>
        </div>
      </div>
      <div class="order-menu">
        <div class="kind">台式便當類</div>
        <div class="list" v-for="(list, index) in twbox" :key="index">
          <div @click="checkOrder(list)" class="name">{{list.name}}</div>
        </div>
      </div>
      <div class="order-menu">
        <div class="kind">茶類</div>
        <div class="list" v-for="(list, index) in tea" :key="index">
          <div @click="checkOrder(list)" class="name">{{list.name}}</div>
        </div>
      </div>
      <div class="order-menu">
        <div class="kind">果汁類</div>
        <div class="list" v-for="(list, index) in juice" :key="index">
          <div @click="checkOrder(list)" class="name">{{list.name}}</div>
        </div>
      </div>
      <div class="order-menu">
        <div class="kind">口感飲類</div>
        <div class="list" v-for="(list, index) in othertea" :key="index">
          <div @click="checkOrder(list)" class="name">{{list.name}}</div>
        </div>
      </div>
    </div>
    <div class="blackFrame" v-if="show">
      <div class="inner">
        <div class="title">{{order.name}}</div>
        <button @click="closeframe()" type="button">關閉視窗</button>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  name: "app",
  components: {},
  methods: {
    checkOrder: function(list) {
      this.show = true;
      this.order.name = list.name;
    },
    closeframe: function() {
      this.show = false;
    }
  },
  data() {
    return {
      show: false,
      order: {
        name: ""
      },
      tea: {
        box1: {
          name: "翡翠綠茶"
        },
        box2: {
          name: "錫蘭紅茶"
        },
        box3: {
          name: "烏龍綠茶"
        },
        box4: {
          name: "普洱茶"
        },
        box5: {
          name: "伯爵紅茶"
        }
      },
      juice: {
        box1: {
          name: "綜合果汁"
        },
        box2: {
          name: "鮮榨柳橙汁"
        },
        box3: {
          name: "奇異果汁"
        },
        box4: {
          name: "火龍果汁"
        },
        box5: {
          name: "胡蘿蔔汁"
        }
      },
      othertea: {
        box1: {
          name: "珍珠奶茶"
        },
        box2: {
          name: "芋園奶綠"
        },
        box3: {
          name: "養樂多綠"
        },
        box4: {
          name: "決明子珍奶"
        }
      },
      ricebox: {
        box1: {
          name: "明太子厚切豬排弁当"
        },
        box2: {
          name: "蔥香鹽烤松阪弁当"
        },
        box3: {
          name: "泡菜岩燒牛五花弁当"
        },
        box4: {
          name: "芝香骰子牛肉弁当"
        },
        box5: {
          name: "芝士嫩雞腿排弁当"
        },
        box6: {
          name: "鹽焗鮮味白蝦弁当"
        },
        box7: {
          name: "五彩纖蔬素食弁当"
        }
      },
      twbox: {
        box1: {
          name: "雞腿便當"
        },
        box2: {
          name: "排骨便當"
        },
        box3: {
          name: "滷肉便當"
        },
        box4: {
          name: "香腸便當"
        },
        box5: {
          name: "素食便當"
        }
      }
    };
  },
  computed: {
    getOption() {
      return this.$store.getters.getOption;
    },
    newsData() {
      return this.$store.getters.getNewsData;
    },
    productData() {
      return this.$store.getters.getProductData;
    },
    photoData() {
      return this.$store.getters.getPhotoData;
    },
    qaData() {
      return this.$store.getters.getQaData;
    },
    downloadData() {
      return this.$store.getters.getDoanloadData;
    }
  },

  mounted: function() {},
  created() {}
};
</script>

<style>
</style>
