import '../sass/style.scss';
const cors = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://tw.rter.info/capi.php';


var app = new Vue({
      el: "#app",
      data: {
            coinData: {
                  USD: {
                        name: '美金',
                        money: ''
                  },
                  USDJPY: {
                        name: '日幣',
                        money: ''
                  },
                  USDEUR: {
                        name: '歐元',
                        money: ''
                  },
                  USDHKD: {
                        name: '港幣',
                        money: ''
                  },
                  USDKRW: {
                        name: '韓幣',
                        money: ''
                  },
                  USDTHB: {
                        name: '泰銖',
                        money: ''
                  },
                  USDGBP: {
                        name: '英鎊',
                        money: ''
                  },
                  USDCAD: {
                        name: '加拿大元',
                        money: ''
                  },
                  USDAUD: {
                        name: '澳幣',
                        money: ''
                  },
                  USDSGD: {
                        name: '新加坡幣',
                        money: ''
                  },
                  USDCNY: {
                        name: '人民幣',
                        money: ''
                  },
                  USDMYR: {
                        name: '馬來西亞令吉',
                        money: ''
                  },
                  USDIDR: {
                        name: '印尼盾',
                        money: ''
                  },
                  USDNZD: {
                        name: '紐西蘭元',
                        money: ''
                  },
                  USDVND: {
                        name: '越南盾',
                        money: ''
                  },
                  USDPHP: {
                        name: '菲律賓披索',
                        money: ''
                  },
            },
            ntd: "",
            totalMoney: '',
            country: {
                  name: '',
                  money: ''
            },
            show: false,
            title: '請選擇您要兌換的幣別',
            title: '請選擇您的幣別',
            boxtitle: '請輸入欲兌換之台幣金額',
            switchTitle: '切換成外幣換台幣',
            lock: 0,
            data: ''
      },
      components: {
            // Exange
      },
      methods: {
            countMoney: function () {
                  if (this.lock == 0) {
                        this.totalMoney = (this.country.money * this.ntd).toFixed(2);
                  } else {
                        this.totalMoney = (1 / this.country.money * this.ntd).toFixed(2);
                  }

                  if (this.country.money && this.ntd) {
                        this.show = true;
                  }
            },
            switchChange: function () {
                  if (this.lock == 0) {
                        this.lock = 1;
                        this.switchTitle = '切換成台幣換外幣'
                        this.title = '請選擇您的幣別'
                        this.boxtitle = '請輸入您的貨幣金額'
                        this.country.name = '';
                        this.country.money = '';
                        this.ntd = '';
                        this.totalMoney = '';
                        this.show = false;
                  } else {
                        this.lock = 0;
                        this.switchTitle = '切換成外幣換台幣'
                        this.title = '請選擇您要兌換的幣別'
                        this.boxtitle = '請輸入欲兌換之台幣金額'
                        this.country.name = '';
                        this.country.money = '';
                        this.ntd = '';
                        this.totalMoney = '';
                        this.show = false;
                  }
            }
      },
      created() {
            axios.get(`${cors}${url}`)
                  .then((response) => {
                              this.data = response.data;
                              this.num = 1 / response.data.USDTWD.Exrate;
                              this.coinData.USDJPY.money = (this.num * response.data.USDJPY.Exrate);
                              this.coinData.USD.money = this.num;
                              this.coinData.USDEUR.money = (this.num * response.data.USDEUR.Exrate);
                              this.coinData.USDHKD.money = (this.num * response.data.USDHKD.Exrate);
                              this.coinData.USDKRW.money = (this.num * response.data.USDKRW.Exrate);
                              this.coinData.USDTHB.money = (this.num * response.data.USDTHB.Exrate);
                              this.coinData.USDGBP.money = (this.num * response.data.USDGBP.Exrate);
                              this.coinData.USDCAD.money = (this.num * response.data.USDCAD.Exrate);
                              this.coinData.USDAUD.money = (this.num * response.data.USDAUD.Exrate);
                              this.coinData.USDSGD.money = (this.num * response.data.USDSGD.Exrate);
                              this.coinData.USDCNY.money = (this.num * response.data.USDCNY.Exrate);
                              this.coinData.USDMYR.money = (this.num * response.data.USDMYR.Exrate);
                              this.coinData.USDIDR.money = (this.num * response.data.USDIDR.Exrate);
                              this.coinData.USDNZD.money = (this.num * response.data.USDNZD.Exrate);
                              this.coinData.USDVND.money = (this.num * response.data.USDVND.Exrate);
                              this.coinData.USDPHP.money = (this.num * response.data.USDPHP.Exrate);
                        },
                        (error) => {}
                  );
      }
})