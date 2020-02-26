<template>
  <div>
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
    <Blackframe />
  </div>
</template>

<script>
// import $ from "jquery";
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
      order: {
        name: ""
      },
      tea: {
        box1: {
          name: "翡翠綠茶",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "35",
              check: false
            },
            small: {
              name: "M",
              price: "30",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box2: {
          name: "錫蘭紅茶",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "35",
              check: false
            },
            small: {
              name: "M",
              price: "30",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box3: {
          name: "烏龍綠茶",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "35",
              check: false
            },
            small: {
              name: "M",
              price: "30",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box4: {
          name: "普洱茶",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "35",
              check: false
            },
            small: {
              name: "M",
              price: "30",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box5: {
          name: "伯爵紅茶",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "35",
              check: false
            },
            small: {
              name: "M",
              price: "30",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        }
      },
      juice: {
        box1: {
          name: "綜合果汁",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "120",
              check: false
            },
            small: {
              name: "M",
              price: "100",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box2: {
          name: "鮮榨柳橙汁",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "110",
              check: false
            },
            small: {
              name: "M",
              price: "90",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box3: {
          name: "奇異果汁",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "140",
              check: false
            },
            small: {
              name: "M",
              price: "120",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box4: {
          name: "火龍果汁",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "120",
              check: false
            },
            small: {
              name: "M",
              price: "100",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box5: {
          name: "胡蘿蔔汁",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "120",
              check: false
            },
            small: {
              name: "M",
              price: "100",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        }
      },
      othertea: {
        box1: {
          name: "珍珠奶茶",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "50",
              check: false
            },
            small: {
              name: "M",
              price: "40",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box2: {
          name: "芋園奶綠",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "50",
              check: false
            },
            small: {
              name: "M",
              price: "40",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box3: {
          name: "養樂多綠",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "50",
              check: false
            },
            small: {
              name: "M",
              price: "40",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        },
        box4: {
          name: "決明子珍奶",
          kind: "drink",
          size: {
            big: {
              name: "L",
              price: "50",
              check: false
            },
            small: {
              name: "M",
              price: "40",
              check: false
            }
          },
          ice: {
            choose1: "去冰",
            choose2: "微冰",
            choose3: "少冰",
            choose4: "正常冰"
          },
          sugar: {
            choose1: "無糖",
            choose2: "微糖",
            choose3: "少糖",
            choose4: "正常糖"
          }
        }
      }
    };
  },
  computed: {},

  mounted: function() {},
  created() {}
};
</script>

<style>
</style>
