(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-352a7092"],{"0fdf":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"forgot"},[n("div",{staticClass:"login-top"},[n("van-nav-bar",{scopedSlots:e._u([{key:"left",fn:function(){return[n("div",{staticClass:"login-left"},[n("div",{staticClass:"icon"},[n("img",{staticClass:"auto-img",attrs:{src:a("de21"),alt:""}})]),n("div",{staticClass:"text"},[e._v("Luckin Coffee")])])]},proxy:!0},{key:"right",fn:function(){return[n("router-link",{attrs:{to:"main/Home"}},[n("div",{staticClass:"login-right"},[e._v("关闭")])])]},proxy:!0}])})],1),n("div",{staticClass:"login-form"},[n("h1",[e._v("忘记密码")]),n("p",[e._v("forget password！")]),n("van-form",[n("van-field",{attrs:{label:"手机号",placeholder:"手机号"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}}),n("van-field",{attrs:{label:"密码",placeholder:"密码",type:e.isPassword?"password":"text","right-icon":e.isPassword?"closed-eye":"eye-o"},on:{"click-right-icon":e.viewPassword},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}}),n("van-field",{attrs:{label:"邮箱",placeholder:"邮箱"},model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}}),n("van-field",{attrs:{center:"",clearable:"",label:"邮箱验证码",placeholder:"请输入邮箱验证码"},scopedSlots:e._u([{key:"button",fn:function(){return[n("van-button",{attrs:{size:"small",color:"#0C34BA",disabled:e.isSend},on:{click:e.sendValidCode}},[e._v(e._s(e.text))])]},proxy:!0}]),model:{value:e.userInfo.validCode,callback:function(t){e.$set(e.userInfo,"validCode",t)},expression:"userInfo.validCode"}}),n("div",{staticClass:"clearfix forgot-text"},[n("span",{staticClass:"fr",on:{click:function(t){return e.goPage("Login")}}},[e._v("已有账号，立即登录")])]),n("div",{staticClass:"login-btn"},[n("van-button",{attrs:{round:"",block:"","native-type":"submit",color:"#0C34BA"},on:{click:e.commit}},[e._v("提 交")])],1)],1)],1)])},o=[],r=a("e3a8"),s=a("2f14"),i={data:function(){return{isPassword:!0,userInfo:{phone:"",password:"",email:"",validCode:""},text:"发送验证码",isSend:!1}},methods:{goPage:function(e){this.$router.push(e)},viewPassword:function(){this.isPassword=!this.isPassword},sendValidCode:function(){var e=this,t=5;this.text=t+"s后重新发送",this.isSend=!0;var a=setInterval((function(){0==t?(clearInterval(a),e.isSend=!1,e.text="发送验证码"):(t--,e.text=t+"s后重新发送")}),1e3);this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var n=s["a"].queryString({email:this.userInfo.email,appkey:this.appkey});this.axios({method:"POST",url:"/emailValidCode",data:n}).then((function(t){e.$toast.clear(),e.$notify({type:"warning",message:t.data.msg})})).catch((function(t){e.$toast.clear()}))},commit:function(){var e=this,t={phone:{value:this.userInfo.phone,reg:/^1[3-9]\d{9}$/,errorMsg:"手机号格式不正确"},password:{value:this.userInfo.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"密码支持字母数字_组合"},email:{value:this.userInfo.email,reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,errorMsg:"邮箱格式不正确"},validCode:{value:this.userInfo.validCode,reg:/^\d{6}$/,errorMsg:"验证为6位数字"}};if(r["a"].valid(t)){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var a=s["a"].queryString({validCode:this.userInfo.validCode,appkey:this.appkey});this.axios({method:"POST",url:"/checkValidCode",data:a}).then((function(t){e.$toast.clear(),"K001"==t.data.code?e.updatePassword():e.$notify({type:"warning",message:t.data.msg}).catch((function(t){e.$toast.clear()}))}))}},updatePassword:function(){var e=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var t=s["a"].queryString({phone:this.userInfo.phone,password:this.userInfo.password,appkey:this.appkey});this.axios({method:"POST",url:"/retrievePassword",data:t}).then((function(t){e.$toast.clear(),"L001"==t.data.code?e.$router.push({name:"Login"}):e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}}},c=i,l=(a("f526"),a("2877")),u=Object(l["a"])(c,n,o,!1,null,"2c0074cb",null);t["default"]=u.exports},2179:function(e,t,a){},"2f14":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("99af"),a("fb6a");var n=a("d4ec"),o=a("bee2"),r=function(){function e(){Object(n["a"])(this,e)}return Object(o["a"])(e,[{key:"queryString",value:function(e){var t="";for(var a in e)t+="".concat(a,"=").concat(e[a],"&");return t.slice(0,-1)}}]),e}(),s=new r},"99af":function(e,t,a){"use strict";var n=a("23e7"),o=a("d039"),r=a("e8b5"),s=a("861d"),i=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),f=a("b622"),p=a("2d00"),v=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",w=p>=51||!o((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),b=d("concat"),m=function(e){if(!s(e))return!1;var t=e[v];return void 0!==t?!!t:r(e)},y=!w||!b;n({target:"Array",proto:!0,forced:y},{concat:function(e){var t,a,n,o,r,s=i(this),d=u(s,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(r=-1===t?s:arguments[t],m(r)){if(o=c(r.length),f+o>h)throw TypeError(g);for(a=0;a<o;a++,f++)a in r&&l(d,f,r[a])}else{if(f>=h)throw TypeError(g);l(d,f++,r)}return d.length=f,d}})},bee2:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return o}))},d4ec:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},de21:function(e,t,a){e.exports=a.p+"img/icon_luckin_coffee.b930dd28.png"},e3a8:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("d4ec"),o=a("bee2"),r=(a("9a83"),a("f564")),s=a("2b0e");s["a"].use(r["a"]);var i=function(){function e(){Object(n["a"])(this,e)}return Object(o["a"])(e,[{key:"valid",value:function(e){for(var t in e)if(!e[t].reg.test(e[t].value))return Object(r["a"])({type:"warning",message:e[t].errorMsg}),!1;return!0}}]),e}(),c=new i},f526:function(e,t,a){"use strict";var n=a("2179"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-352a7092.fac6fabf.js.map