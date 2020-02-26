<template>
  <div>
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
    <Blackframe />
  </div>
</template>

<script>
import Blackframe from "./blackframe.vue";
export default {
  name: "app",
  components: { Blackframe },
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  },
  methods: {
    checkOrder: function(list) {
      this.$store.dispatch("setFrameShow", true);
      this.$store.dispatch("setOrder", list);
    }
  },
  data() {
    return {
      show: false,
      order: {
        name: ""
      },
      ricebox: {
        box1: {
          name: "明太子厚切豬排弁当",
          price: 150,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box2: {
          name: "蔥香鹽烤松阪弁当",
          price: 120,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box3: {
          name: "泡菜岩燒牛五花弁当",
          price: 110,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box4: {
          name: "芝香骰子牛肉弁当",
          price: 120,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box5: {
          name: "芝士嫩雞腿排弁当",
          price: 130,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box6: {
          name: "鹽焗鮮味白蝦弁当",
          price: 120,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box7: {
          name: "五彩纖蔬素食弁当",
          price: 100,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        }
      },
      twbox: {
        box1: {
          name: "雞腿便當",
          price: 80,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box2: {
          name: "排骨便當",
          price: 80,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box3: {
          name: "滷肉便當",
          price: 60,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box4: {
          name: "香腸便當",
          price: 75,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
        },
        box5: {
          name: "素食便當",
          price: 50,
          kind: "rice",
          choose: {
            egg: {
              one: {
                name: "加蛋",
                price: 10
              },
              two: {
                name: "不加蛋",
                price: 0
              }
            },
            hot: {
              one: {
                name: "加辣"
              },
              two: {
                name: "不加辣"
              }
            }
          }
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
