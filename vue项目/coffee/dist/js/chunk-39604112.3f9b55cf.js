(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39604112"],{b288:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"home"},[i("div",{staticClass:"tittle"},[i("van-nav-bar",{scopedSlots:t._u([{key:"right",fn:function(){return[i("h2",[t._v(t._s(t.timeText))]),i("span",[t._v(t._s(t.nickName))])]},proxy:!0},{key:"left",fn:function(){return[i("div",{staticClass:"img"},[i("img",{staticClass:"auto-img",attrs:{src:e("de21"),alt:""}})])]},proxy:!0}])})],1),i("div",{staticClass:"search"},[i("van-search",{attrs:{shape:"round",background:"#0C34BA",placeholder:"请输入搜索关键词"},on:{input:function(a){return t.searchShop(t.value)}},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}}),t.isshow?i("ul",t._l(t.searchData,(function(a,e){return i("li",{key:e,staticClass:"search-text",on:{click:function(e){return t.viewProductInfo(a.pid)}}},[t._v(t._s(a.name))])})),0):t._e()],1),i("div",{staticClass:"swipe"},[i("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.bgImg,(function(a,e){return i("van-swipe-item",{key:e},[i("img",{staticClass:"auto-img",attrs:{src:a.bannerImg,alt:""},on:{click:function(e){return t.viewProductInfo(a.pid)}}})])})),1)],1),i("div",{staticClass:"recommend"},[i("h1",[t._v("热门推荐")]),i("van-tabs",t._l(t.shopData,(function(a,e){return i("van-tab",{key:e,attrs:{title:"周"+(e+1)}},[i("div",{staticClass:"p-img",on:{click:function(e){return t.viewProductInfo(a.pid)}}},[i("img",{staticClass:"auto-img",attrs:{src:a.smallImg,alt:""}}),i("div",{staticClass:"p-text"},[t._v(t._s(a.name))])])])})),1)],1)])},s=[],n={data:function(){return{value:"",timeText:"",bgImg:[],shopData:[],searchData:[],nickName:"",isshow:!1}},created:function(){this.getTime(),this.getSwipeImg(),this.getRecommendShop(),this.getUserInfo()},methods:{getTime:function(){var t=(new Date).getHours();this.timeText=t>=6&&t<12?"早上好！":t>=12&&t<18?"下午好！":t>=18&&t<24?"晚上好！":"深夜好！"},getSwipeImg:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/banner",params:{appkey:this.appkey}}).then((function(a){t.$toast.clear(),300==a.data.code&&(t.bgImg=a.data.result)})).catch((function(t){}))},getRecommendShop:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/typeProducts",params:{appkey:this.appkey,key:"isHot",value:1}}).then((function(a){t.$toast.clear(),500==a.data.code&&(t.shopData=a.data.result)})).catch((function(t){}))},searchShop:function(t){var a=this;if(""!=t){this.isshow=!0;var e={appkey:this.appkey,name:this.value};this.axios({method:"GET",url:"search",params:e}).then((function(t){a.searchData=t.data.result}))}else this.isshow=!1},viewProductInfo:function(t){this.$router.push({name:"Detail",query:{pid:t}})},getUserInfo:function(){var t=this,a=localStorage.getItem("CSTK");a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findMy",params:{appkey:this.appkey,tokenString:a}}).then((function(a){t.$toast.clear(),"A001"==a.data.code&&(t.nickName=a.data.result[0].nickName,a.data.result.length>0&&(t.isLogin=!0,t.userInfo=a.data.result[0]))})).catch((function(a){t.$toast.clear()})))}}},o=n,c=(e("f68f"),e("2877")),r=Object(c["a"])(o,i,s,!1,null,"8aafd352",null);a["default"]=r.exports},de21:function(t,a,e){t.exports=e.p+"img/icon_luckin_coffee.b930dd28.png"},ece4:function(t,a,e){},f68f:function(t,a,e){"use strict";var i=e("ece4"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-39604112.3f9b55cf.js.map