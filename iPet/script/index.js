import Vue from "vue";
var hour, minute, second;
hour = minute = second = 0;
var millisecond = 0;
var int;
var km = 0;
var kmcount = 0;;
var app = new Vue({
   el: "#app",
   data() {
      return {
         kms: '',
         shownose: false,
         shownose1: false,
         shownose2: false,
         lightbox: false,
         qq: false,
         yearanimate: false,
         monthanimate: false,
         times: '',
         open: {
            total: false,
            saves: false,
            save1a: false,
            save1b: false,
            save1c: false,
            save1d: false,
            save1: false,
            save2: false,
            save: false,
            year: false,
            import: true,
            login: false,
            create: false,
            mypet: false,
            is03: false,
            vaccine: false,
            vaccine2: false,
            doc: false,
            doc2: false,
            docinfo: false,
            online: false,
            calendar: false,
            push: false,
            push2: false,
            ask: false,
            ask2: false,
            docfinal: false,
            step6: false,
            step6_1: false,
            step6_2: false,
            step6_3: false,
         },
         docs: {
            sort: false,
            select: false,
         },
         ig: false,
         runfinal: false,
         run2: false,
         event1: false,
         event2: false,
         event3: false,
         event4: false,
         event1_1: false,
         event4_1: false,
         event1ok: false,
         event2ok: false,
         event3ok: false,
         event4ok: false,
         callevent: false,
         isevent: 0,
         ischeck: false,
         ismap: false,
         iskind: 0,
         issex: 0,
         step6_an: false,
         is03active: false,
      };
   },
   methods: {
      scrollToTop() {
         window.scrollTo(0, 0);
      },
      chooseSex(num) {
         const vm = this;
         vm.issex = num;
      },
      isKind(num) {
         const vm = this;
         vm.iskind = num;
      },
      goLogin() {
         const vm = this;
         vm.open.import = false;
         vm.open.login = true;
         vm.scrollToTop();
      },
      goCreate() {
         const vm = this;
         vm.open.login = false;
         vm.open.create = true;
         vm.scrollToTop();
      },
      goMypet() {
         const vm = this;
         vm.open.create = false;
         vm.open.mypet = true;
         vm.scrollToTop();
      },
      go03() {
         const vm = this;
         vm.open.mypet = false;
         vm.open.is03 = true;
         vm.scrollToTop();
         setTimeout(function () {
            vm.is03active = true;
         }, 0);
      },
      goVaccine() {
         const vm = this;
         vm.open.is03 = false;
         vm.scrollToTop();
         vm.open.vaccine = true;
      },
      goVaccine2() {
         const vm = this;
         vm.open.vaccine = false;
         vm.scrollToTop();
         vm.open.vaccine2 = true;
      },
      goDoc() {
         const vm = this;
         vm.scrollToTop();
         vm.open.vaccine2 = false;
         vm.open.doc = true;
      },
      goDoc2() {
         const vm = this;
         vm.scrollToTop();
         vm.open.doc = false;
         vm.open.doc2 = true;
      },
      openSort() {
         const vm = this;
         vm.scrollToTop();
         vm.docs.sort = true;
         vm.docs.select = false;
      },
      openSelect() {
         const vm = this;
         vm.scrollToTop();
         vm.docs.sort = false;
         vm.docs.select = true;
      },
      docBack() {
         const vm = this;
         vm.scrollToTop();
         vm.docs.sort = false;
         vm.docs.select = false;
         vm.open.doc = true;
         vm.open.doc2 = false;
      },
      docClose() {
         const vm = this;
         vm.scrollToTop();
         vm.docs.sort = false;
         vm.docs.select = false;
      },
      docMap() {
         const vm = this;
         vm.scrollToTop();
         vm.docs.sort = false;
         vm.docs.select = false;
         vm.ismap = true;
      },
      goDocInfo() {
         const vm = this;
         vm.scrollToTop();
         vm.docs.sort = false;
         vm.docs.select = false;
         vm.ismap = false;
         vm.open.doc2 = false;
         vm.open.docinfo = true;
      },
      goOnline() {
         const vm = this;
         vm.scrollToTop();
         vm.open.docinfo = false;
         vm.open.online = true;
      },
      onlineSuccess() {
         const vm = this;
         vm.scrollToTop();
         vm.ischeck = true;
      },
      goCalendar() {
         const vm = this;
         vm.scrollToTop();
         vm.open.online = false;
         vm.open.calendar = true;
      },
      isEvent(num) {
         const vm = this;
         vm.isevent = num;
         vm.scrollToTop();
         if (num == 1) {
            vm.open.calendar = false;
            vm.event1 = true;
         }
         if (num == 2) {
            vm.open.calendar = false;
            vm.event2 = true;
         }
         if (num == 3) {
            vm.open.calendar = false;
            vm.event3 = true;
         }
         if (num == 4) {
            vm.open.calendar = false;
            vm.event4 = true;
         }
         vm.callevent = false;
         vm.isevent = 0;
      },
      callEvent() {
         const vm = this;
         vm.scrollToTop();
         vm.callevent = true;
      },
      callEvent1_1() {
         const vm = this;
         vm.scrollToTop();
         vm.event1_1 = true;
      },
      callEvent4_1() {
         const vm = this;
         vm.scrollToTop();
         vm.event4_1 = true;
      },
      event1_ok() {
         const vm = this;
         vm.scrollToTop();
         vm.open.calendar = true;
         vm.event1 = false;
         vm.event1_1 = false;
         vm.event1ok = true;
      },
      event4_ok() {
         const vm = this;
         vm.scrollToTop();
         vm.open.calendar = true;
         vm.event4 = false;
         vm.event4_1 = false;
         vm.event4ok = true;
      },
      goPush() {
         const vm = this;
         vm.scrollToTop();
         vm.open.push = true;
         vm.open.calendar = false;
         setTimeout(function () {
            vm.open.push2 = true;
         }, 500)
      },
      goCal() {
         const vm = this;
         vm.scrollToTop();
         vm.open.ask = false;
         vm.open.ask2 = false;
         vm.open.docfinal = false;
         vm.open.calendar = true;
      },
      pushok() {
         const vm = this;
         vm.scrollToTop();
         vm.open.calendar = true;
         vm.event4 = false;
         vm.event4_1 = false;
         vm.event4ok = true;
         vm.open.push = false;
      },
      event2_ok() {
         const vm = this;
         vm.scrollToTop();
         vm.open.calendar = true;
         vm.event2ok = true;
         vm.ig = false;
      },
      event3_ok() {
         const vm = this;
         vm.scrollToTop();
         vm.open.calendar = true;
         vm.event3 = false;
         vm.event3ok = true;
      },
      gobackToDoc() {
         const vm = this;
         vm.scrollToTop();
         vm.open.calendar = false;
         vm.open.doc = true;
      },
      goDocask() {
         const vm = this;
         vm.scrollToTop();
         vm.open.doc = false;
         vm.open.ask = true;
         setTimeout(function () {
            vm.open.ask2 = true;
         }, 500)
      },
      go04Final() {
         const vm = this;
         vm.scrollToTop();
         vm.open.calendar = false;
         vm.open.docfinal = true;
      },
      backtoCalender() {
         const vm = this;
         vm.scrollToTop();
         vm.open.docfinal = false;
         vm.open.calendar = true;
      },
      gotoRun2() {
         const vm = this;
         vm.event2 = false;
         vm.run2 = true;
         start();
      },
      runEnd() {
         const vm = this;
         vm.scrollToTop();
         stop();
         vm.run2 = false;
         vm.runfinal = true;
         vm.kms = document.getElementById('runtext').value;
         vm.times = document.getElementById('timetext').value;
      },
      goIG() {
         const vm = this;
         vm.scrollToTop();
         vm.runfinal = false;
         vm.ig = true;
      },
      gostep6() {
         const vm = this;
         vm.scrollToTop();
         vm.open.calendar = false;
         vm.open.step6 = true;
         vm.open.create = false;
      },
      backToStep6() {
         const vm = this;
         vm.scrollToTop();
         vm.open.step6 = true;
         vm.open.step6_1 = false;
         vm.open.step6_2 = false;
         vm.open.step6_3 = false;
      },
      gostep6_1() {
         const vm = this;
         vm.scrollToTop();
         vm.open.step6 = false;
         vm.open.step6_1 = true;
      },
      gostep6_2() {
         const vm = this;
         vm.scrollToTop();
         vm.open.step6 = false;
         vm.open.step6_2 = true;
         setTimeout(function () {
            vm.step6_an = true;
         }, 500)
      },
      gostep6_3() {
         const vm = this;
         vm.scrollToTop();
         vm.open.step6 = false;
         vm.open.step6_3 = true;
         setTimeout(function () {
            vm.monthanimate = true;
         }, 500)
      },
      switchYear() {
         const vm = this;
         vm.scrollToTop();
         vm.open.step6_3 = false;
         vm.open.year = true;
         setTimeout(function () {
            vm.yearanimate = true;
         }, 500)
      },
      switchMonth() {
         const vm = this;
         vm.scrollToTop();
         vm.open.year = false;
         vm.open.step6_3 = true;
      },
      goSave() {
         const vm = this;
         vm.scrollToTop();
         vm.open.year = false;
         vm.open.save = true;
      },
      goSave1() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save = false;
         vm.open.save1 = true;
      },
      goSave2() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save = false;
         vm.open.save2 = true;
      },
      goSave1a() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save1 = false;
         vm.open.save1a = true;
      },
      goSave1b() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save1a = false;
         vm.open.save1b = true;
      },
      goSave1c() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save1b = false;
         vm.open.save1c = true;
         setTimeout(function () {
            vm.qq = true;
         }, 500)
      },
      goSave1d() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save1c = false;
         vm.open.save1d = true;
      },
      backBQ() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save1a = false;
         vm.open.save1b = false;
         vm.open.save1c = false;
         vm.open.save1d = false;
         vm.open.save1 = true;
         vm.open.saves = false;
      },
      gos() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save1 = false;
         vm.open.saves = true;
      },
      openlightbox() {
         const vm = this;
         vm.scrollToTop();
         vm.lightbox = true;
      },
      closelightbox() {
         const vm = this;
         vm.scrollToTop();
         vm.lightbox = false;
      },
      baaa() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save1 = false;
         vm.open.save = true;
      },
      showNose() {
         const vm = this;
         vm.scrollToTop();
         vm.shownose = true;
      },
      takenose() {
         const vm = this;
         vm.scrollToTop();
         vm.shownose2 = true;
      },
      closenose() {
         const vm = this;
         vm.scrollToTop();
         vm.shownose = false;
      },
      showzz() {
         const vm = this;
         vm.scrollToTop();
         vm.open.save2 = false;
         vm.open.total = true;
      }

   },
   created() {},
});

function start() {
   int = setInterval(timer, 50); //每隔50毫秒执行一次timer函数
}

function timer() {
   kmcount += 1;
   millisecond = millisecond + 50;
   if (millisecond >= 1000) {
      millisecond = 0;
      second = second + 1;
   }
   if (second >= 60) {
      second = 0;
      minute = minute + 1;
   }

   if (minute >= 60) {
      minute = 0;
      hour = hour + 1;
   }

   var hour1, minute1, second1;
   if (hour < 10) {
      hour1 = '0' + hour
   } else {
      hour1 = hour
   }
   if (minute < 10) {
      minute1 = '0' + minute
   } else {
      minute1 = minute
   }
   if (second < 10) {
      second1 = '0' + second
   } else {
      second1 = second
   }
   if (kmcount % 15 == 0) {
      km += 0.1;
   } else {
      km = km;
   }
   document.getElementById('timetext').value = hour1 + ':' + minute1 + ':' + second1;


   document.getElementById('runtext').value = Math.round(km * 10) / 10 + 'km';
}

function stop() {
   window.clearInterval(int);
}