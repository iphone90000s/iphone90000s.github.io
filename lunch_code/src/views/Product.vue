<template>
    <div class="main-content">
        <topmenu></topmenu>        
        <div class='inner-page'>
          <div class='banner block'>
            <img v-if='this.image' :src="baseurl+'/connect/upload/ogimage/'+this.image">
            <div class='banner_text'>
              <div class='text1'>{{bannerTitle}}</div>
              <div class='text2'>{{bannerTitle2}}</div>
            </div>
          </div>
          <div class='contents block'>
            <div class='left'>
              <div class='title'>商品介紹</div>
              <div class='en_title'>Product</div>
              <ul>
                <slick v-if='fullWidth < 799' ref="slick" :options="slickOptions">
                  <li v-for="(list, index) in layer1" :key='index'>
                    <div class='productBlock productBlock1' v-if='list.hasnext'>
                      <div @click='showLayer(index)' class='layer1'>{{list.title}}</div>
                      <div v-for="(list2, index2) in layer2" :key='index2'>
                        <div v-if='list2.hasnext && list2.layer1_id == list.serial'>
                          <div @click='showLayer2(index2)' class='layer2' :class="{hide:index!=shows}">{{list2.title}}</div>
                          <div v-for="(list3, index3) in layer3" :key='index3'>
                            <div v-if='list3.hasnext && list3.layer2_id == list2.serial'>
                              <div @click='showLayer3(index3)'  class='layer3' :class="{hide:index2!=shows2}">{{list3.title}}</div>
                              <div v-for="(list4, index4) in layer4" :key='index4'>
                                <router-link class='layer4' :class="{hide:index3!=shows3}" v-if='list4.layer3_id == list3.serial' :to="{name:'product',params:{id:list4.serial,layer:4}}">
                                  {{list4.title}}
                                </router-link>
                              </div>
                            </div>
                            <router-link class='layer3' :class="{hide:index2!=shows2}" v-if='!list3.hasnext && list3.layer2_id == list2.serial' :to="{name:'product',params:{id:list3.serial,layer:3}}">
                              {{list3.title}}
                            </router-link>
                          </div>
                        </div>
                        <router-link class='layer2' :class="{hide:index!=shows}" v-if='!list2.hasnext && list2.layer1_id == list.serial' :to="{name:'product',params:{id:list2.serial,layer:2}}">
                          {{list2.title}}
                        </router-link>    
                      </div>
                    </div>        
                    <div class='productBlock productBlock1'>      
                      <router-link class='layer1' v-if='!list.hasnext' :to="{name:'product',params:{id:list.serial,layer:1}}">
                        {{list.title}}
                      </router-link>    
                    </div>
                  </li>
                </slick>
                <li v-else v-for="(list, index) in layer1" :key='index'>
                    <div class='productBlock productBlock1' v-if='list.hasnext'>
                      <div @click='showLayer(index)' class='layer1'>{{list.title}}</div>
                      <div v-for="(list2, index2) in layer2" :key='index2'>
                        <div v-if='list2.hasnext && list2.layer1_id == list.serial'>
                          <div @click='showLayer2(index2)' class='layer2' :class="{hide:index!=shows}">{{list2.title}}</div>
                          <div v-for="(list3, index3) in layer3" :key='index3'>
                            <div v-if='list3.hasnext && list3.layer2_id == list2.serial'>
                              <div @click='showLayer3(index3)'  class='layer3' :class="{hide:index2!=shows2}">{{list3.title}}</div>
                              <div v-for="(list4, index4) in layer4" :key='index4'>
                                <router-link class='layer4' :class="{hide:index3!=shows3}" v-if='list4.layer3_id == list3.serial' :to="{name:'product',params:{id:list4.serial,layer:4}}">
                                  {{list4.title}}
                                </router-link>
                              </div>
                            </div>
                            <router-link class='layer3' :class="{hide:index2!=shows2}" v-if='!list3.hasnext && list3.layer2_id == list2.serial' :to="{name:'product',params:{id:list3.serial,layer:3}}">
                              {{list3.title}}
                            </router-link>
                          </div>
                        </div>
                        <router-link class='layer2' :class="{hide:index!=shows}" v-if='!list2.hasnext && list2.layer1_id == list.serial' :to="{name:'product',params:{id:list2.serial,layer:2}}">
                          {{list2.title}}
                        </router-link>    
                      </div>
                    </div>        
                    <div class='productBlock productBlock1'>      
                      <router-link class='layer1' v-if='!list.hasnext' :to="{name:'product',params:{id:list.serial,layer:1}}">
                        {{list.title}}
                      </router-link>    
                    </div>
                  </li>
              </ul>
            </div>
            <router-view :key="key"></router-view>
          </div>
        </div>
        <Footer></Footer>   
    </div>
</template>

<script>
import Topmenu from "../components/topmenu.vue";
import Footer from "../components/footer.vue";
import Slick from "vue-slick";
export default {
  name: "app",
  components: {
    Topmenu,
    Slick,
    Footer
  },
  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      fullWidth: 0,
      fullHeight: 0,
      KindData1: {}, //分類
      KindData2: {}, //分類
      KindData3: {}, //分類
      KindData4: {}, //分類
      TotalKind: {},
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: "",
      show: true,
      shows: -1,
      shows2: -1,
      shows3: -1,
      slickOptions: {
        slidesToShow: 4,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        arrows: false,
        dots: false,
        draggable: true,
        edgeFriction: 0.3,
        swipe: true
      },
      bannerTitle: "",
      bannerTitle2: "",
      image: ""
    };
  },
  methods: {
    showLayer(index) {
      if (this.shows != index) {
        this.shows = index;
      } else {
        this.shows = -1;
        this.shows2 = -1;
        this.shows3 = -1;
      }
    },
    showLayer2(index) {
      if (this.shows2 != index) {
        this.shows2 = index;
      } else {
        this.shows2 = -1;
        this.shows3 = -1;
      }
    },
    showLayer3(index) {
      if (this.shows3 != index) {
        this.shows3 = index;
      } else {
        this.shows3 = -1;
      }
    }
  },
  computed: {
    layer1() {
      return this.$store.getters.getLayer1;
    },
    layer2() {
      return this.$store.getters.getLayer2;
    },
    layer3() {
      return this.$store.getters.getLayer3;
    },
    layer4() {
      return this.$store.getters.getLayer4;
    },
    key() {
      return this.$route.path + Math.random();
    }
  },
  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    vm.fullHeight = window.innerHeight;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
    };
  },
  beforeCreate() {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    let formData = new FormData();
    formData.append("options", "3");
    this.$axios
      .post("/connect/get/options.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          vm.Datas = {};
        } else {
          this.bannerTitle = response.data.title1;
          this.bannerTitle2 = response.data.title2;
          this.image = response.data.image;
        }
      });
    this.$axios
      .get("/connect/get/front_product.php?setlayer=1", {})
      .then(response => {
        if (response.data.status == "error") {
          vm.KindData1 = {};
        } else {
          this.$store.dispatch("setLayer", response.data);
        }
      });
  }
};
</script>