(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{427:function(t,e,s){},498:function(t,e,s){"use strict";var a=s(427);s.n(a).a},534:function(t,e,s){"use strict";s.r(e);s(440);var a=s(388),o=s.n(a),n={props:{title:String},data:function(){return{orginText:"",base64Text:""}},watch:{orginText:function(t,e){t!==e&&this.toBase64(t)},base64Text:function(t,e){t!==e&&this.toOrgin(t)}},methods:{toBase64:function(t){if(t)try{this.base64Text=window.btoa(t)}catch(t){this.showText("请输入正确的文本，不支持汉语")}else this.base64Text=""},toOrgin:function(t){if(t)try{this.orginText=window.atob(t)}catch(t){this.showText("请输入正确的Base64编码")}else this.orginText=""},showText:function(t){var e=this;this.isShowedMsg||(this.$message.error(t),this.isShowedMsg=!0,setTimeout((function(){e.isShowedMsg=!1}),1e4))},base64Copy:function(){this.copyText(".copy-btn-base64",this.base64Text)},nomalCopy:function(){this.copyText(".copy-btn-nomal",this.orginText)},copyText:function(t,e){var s=this,a=new o.a(t,{text:function(){return e}});a.on("success",(function(t){s.$message.success("已复制到剪贴板")})),a.on("error",(function(t){s.$message.error("复制时发生了错误")}))},clear:function(){this.orginText=""}}},i=(s(498),s(48)),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tool-title-wrap"},[s("div",{staticClass:"content-wrap"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.orginText,expression:"orginText"}],staticClass:"area orgin-area",attrs:{placeholder:"我是普通的文本内容"},domProps:{value:t.orginText},on:{input:function(e){e.target.composing||(t.orginText=e.target.value)}}}),t._v(" "),s("div",{staticClass:"action-wrap"},[s("el-button",{attrs:{type:"primary"},on:{click:t.clear}},[t._v("清空")]),t._v(" "),s("el-button",{staticClass:"copy-btn-nomal",attrs:{type:"primary"},on:{click:t.nomalCopy}},[t._v("复制")])],1),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.base64Text,expression:"base64Text"}],staticClass:"area base64-area",attrs:{placeholder:"我是 base64"},domProps:{value:t.base64Text},on:{input:function(e){e.target.composing||(t.base64Text=e.target.value)}}}),t._v(" "),s("div",{staticClass:"action-wrap"},[s("el-button",{staticClass:"copy-btn-base64",attrs:{type:"primary"},on:{click:t.base64Copy}},[t._v("复制")])],1)])])}),[],!1,null,"85d06142",null);e.default=r.exports}}]);