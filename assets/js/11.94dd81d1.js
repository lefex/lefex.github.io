(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{410:function(t,e,i){},480:function(t,e,i){"use strict";var n=i(410);i.n(n).a},517:function(t,e,i){"use strict";i.r(e);var n={data:function(){return{actions:[{title:"stretch"},{title:"flex-start"},{title:"flex-end"},{title:"center"},{title:"baseline"}],items:[{title:"1"},{title:"2"},{title:"3"},{title:"4"},{title:"5"}],currentIndex:"stretch"}},computed:{classObject:function(){return{"action-active":this.isActive&&!this.error}}},methods:{changeWay:function(t){this.currentIndex=t.title}}},c=(i(480),i(48)),s=Object(c.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-wrap"},[i("div",{staticClass:"content-wrap",style:{alignItems:t.currentIndex}},t._l(t.items,(function(e){return i("div",{staticClass:"item"},[t._v(t._s(e.title))])})),0),t._v(" "),i("div",{staticClass:"action-wrap"},t._l(t.actions,(function(e){return i("div",{staticClass:"action-item",class:[t.currentIndex===e.title?"action-active":"action-item"],on:{click:function(i){return t.changeWay(e)}}},[t._v(t._s(e.title)+"\n        ")])})),0)])}),[],!1,null,"45f1a7d1",null);e.default=s.exports}}]);