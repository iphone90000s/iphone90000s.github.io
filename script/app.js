!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);new Vue({el:"#app",data:{coinData:{USD:{name:"美金",money:""},USDJPY:{name:"日幣",money:""},USDEUR:{name:"歐元",money:""},USDHKD:{name:"港幣",money:""},USDKRW:{name:"韓幣",money:""},USDTHB:{name:"泰銖",money:""},USDGBP:{name:"英鎊",money:""},USDCAD:{name:"加拿大元",money:""},USDAUD:{name:"澳幣",money:""},USDSGD:{name:"新加坡幣",money:""},USDCNY:{name:"人民幣",money:""},USDMYR:{name:"馬來西亞令吉",money:""},USDIDR:{name:"印尼盾",money:""},USDNZD:{name:"紐西蘭元",money:""},USDVND:{name:"越南盾",money:""},USDPHP:{name:"菲律賓披索",money:""}},ntd:"",totalMoney:"",country:{name:"",money:""},show:!1,title:"請選擇您要兌換的幣別",title:"請選擇您的幣別",boxtitle:"請輸入欲兌換之台幣金額",switchTitle:"切換成外幣換台幣",lock:0,data:""},components:{},methods:{countMoney:function(){0==this.lock?this.totalMoney=(this.country.money*this.ntd).toFixed(2):this.totalMoney=(1/this.country.money*this.ntd).toFixed(2),this.country.money&&this.ntd&&(this.show=!0)},switchChange:function(){0==this.lock?(this.lock=1,this.switchTitle="切換成台幣換外幣",this.title="請選擇您的幣別",this.boxtitle="請輸入您的貨幣金額",this.country.name="",this.country.money="",this.ntd="",this.totalMoney="",this.show=!1):(this.lock=0,this.switchTitle="切換成外幣換台幣",this.title="請選擇您要兌換的幣別",this.boxtitle="請輸入欲兌換之台幣金額",this.country.name="",this.country.money="",this.ntd="",this.totalMoney="",this.show=!1)}},created(){axios.get("https://cors-anywhere.herokuapp.com/https://tw.rter.info/capi.php").then(t=>{this.data=t.data,this.num=1/t.data.USDTWD.Exrate,this.coinData.USDJPY.money=this.num*t.data.USDJPY.Exrate,this.coinData.USD.money=this.num,this.coinData.USDEUR.money=this.num*t.data.USDEUR.Exrate,this.coinData.USDHKD.money=this.num*t.data.USDHKD.Exrate,this.coinData.USDKRW.money=this.num*t.data.USDKRW.Exrate,this.coinData.USDTHB.money=this.num*t.data.USDTHB.Exrate,this.coinData.USDGBP.money=this.num*t.data.USDGBP.Exrate,this.coinData.USDCAD.money=this.num*t.data.USDCAD.Exrate,this.coinData.USDAUD.money=this.num*t.data.USDAUD.Exrate,this.coinData.USDSGD.money=this.num*t.data.USDSGD.Exrate,this.coinData.USDCNY.money=this.num*t.data.USDCNY.Exrate,this.coinData.USDMYR.money=this.num*t.data.USDMYR.Exrate,this.coinData.USDIDR.money=this.num*t.data.USDIDR.Exrate,this.coinData.USDNZD.money=this.num*t.data.USDNZD.Exrate,this.coinData.USDVND.money=this.num*t.data.USDVND.Exrate,this.coinData.USDPHP.money=this.num*t.data.USDPHP.Exrate},t=>{})}})},function(t,e,n){var o=n(2),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1},r=(o(a,i),a.locals?a.locals:{});t.exports=r},function(t,e,n){"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function c(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],a=0;a<t.length;a++){var i=t[a],s=e.base?i[0]+e.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=c(l),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(r[d].references++,r[d].updater(m)):r.push({identifier:l,updater:y(m,e),references:1}),o.push(l)}return o}function u(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var r=i(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function m(t,e,n,o){var a=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(e,a);else{var i=document.createTextNode(a),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(i,r[e]):t.appendChild(i)}}function f(t,e,n){var o=n.css,a=n.media,i=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var h=null,p=0;function y(t,e){var n,o,a;if(e.singleton){var i=p++;n=h||(h=u(e)),o=m.bind(null,n,i,!1),a=m.bind(null,n,i,!0)}else n=u(e),o=f.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var a=c(n[o]);r[a].references--}for(var i=s(t,e),u=0;u<n.length;u++){var l=c(n[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=i}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,'body{overflow-x:hidden;background-color:#f0f2f5;margin:0;padding:0;min-height:100vh}*{font-family:"Microsoft JhengHei" !important;box-sizing:border-box}a{text-decoration:none !important}.btns{background:no-repeat #3AAFD8 90% 50%;box-shadow:0px 2px 0px 0px #0090c5;color:#fff;padding:10px 20px 10px 20px;border:none;outline:none;cursor:pointer;transition:0.5s ease all;font-size:14px;border-radius:5px;display:table;margin:20px auto 0}.btns:hover{background:#308eaf}.title{background:#3bafda;padding:0.75em 0;text-align:center;color:#fff;text-transform:uppercase;font-size:1.5em;font-weight:500}.content{background:#FFF;margin:2.5em 0;padding:2em 1.5em 2em 1.5em;display:table;margin:0 auto}.content select,.content input{display:inline-block;vertical-align:middle;width:100%;padding:5px;border:1px solid #e3e4e8;margin:10px 0;border-radius:5px;color:#777F8C;border-bottom:4px solid #e3e4e8;font-size:15px}.content .coin{text-align:right}.content label{width:100%;display:inline-block;vertical-align:middle;color:#475965;font-size:1.2em;text-transform:uppercase;margin:0}.total{color:#475965;line-height:2em}.footer{position:fixed;bottom:0;width:100%;background:#3bafda;text-align:center;padding:5px 0}.footer a{font-size:14px;color:#fff}\n',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var a=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([a]).join("\n")}var r,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);o&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}}]);