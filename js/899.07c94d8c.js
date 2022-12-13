"use strict";(self["webpackChunkall_kar_pro"]=self["webpackChunkall_kar_pro"]||[]).push([[899],{7899:function(a,t,s){s.r(t),s.d(t,{default:function(){return _}});var e=function(){var a=this,t=a._self._c;return t("div",{class:a.loading?"loader-main":""},[a.loading?a._e():t("div",[a._m(0),a._l(a.booksList,(function(s,e){return t("div",{key:e,staticClass:"card mt-5 mr-3 ml-3"},[t("BookItem",{attrs:{book:s},on:{refresh:a.refreshBooks}})],1)})),t("nav",{staticClass:"d-flex justify-content-center mt-2 mb-2",attrs:{"aria-label":"Page navigation example"}},[t("ul",{staticClass:"pagination"},[t("li",{class:a.paginator["hasPrevPage"]?"page-item visible":"page-item invisible",on:{click:function(t){return a.refreshBooks(a.paginator["currentPage"]-1)}}},[t("a",{staticClass:"page-link"},[a._v(a._s(a.paginator["currentPage"]-1))])]),t("li",{staticClass:"page-item active"},[t("a",{staticClass:"page-link"},[a._v(a._s(a.paginator["currentPage"])+" "),t("span",{staticClass:"sr-only"},[a._v("(current)")])])]),t("li",{class:a.paginator["hasNextPage"]?"page-item visible":"page-item invisible",on:{click:function(t){return a.refreshBooks(a.paginator["currentPage"]+1)}}},[t("a",{staticClass:"page-link"},[a._v(a._s(a.paginator["currentPage"]+1))])])])])],2),t("SpinnerLoading",{attrs:{loading:a.loading}})],1)},i=[function(){var a=this,t=a._self._c;return t("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a._v("AntGate")]),t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})]),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"nav-link",attrs:{href:"#/"}},[a._v("Home "),t("span",{staticClass:"sr-only"},[a._v("(current)")])])]),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"nav-link",attrs:{href:"#/addCategory"}},[a._v("Add Category "),t("span",{staticClass:"sr-only"},[a._v("(current)")])])]),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"nav-link",attrs:{href:"#/category"}},[a._v("Category "),t("span",{staticClass:"sr-only"},[a._v("(current)")])])]),t("li",{staticClass:"nav-item active"},[t("a",{staticClass:"nav-link",attrs:{href:"#/books"}},[a._v("Books "),t("span",{staticClass:"sr-only"},[a._v("(current)")])])])])])])}],n=s(19),r=function(){var a=this,t=a._self._c;return t("div",[t("img",{staticClass:"card-img-top custom-img",attrs:{src:s(7830),alt:"Card image cap"}}),t("div",{staticClass:"card-body"},[t("h5",{staticClass:"card-title"},[a._v(a._s(a.book["title"]))]),t("p",{staticClass:"card-text custom-text"},[a._v(a._s(a.book["body"]))]),t("a",{staticClass:"btn btn-danger btn-custom",on:{click:a.deleteBook}},[a._v("Delete")])])])},o=[],l={props:["book"],methods:{async deleteBook(){const a={id:this.book["_id"]};await n.Z.post(`${this.$hostname}/deleteBook`,a),this.$emit("refresh")}}},c=l,g=s(1001),v=(0,g.Z)(c,r,o,!1,null,"dcbefebe",null),d=v.exports,p=s(906),u={components:{BookItem:d,SpinnerLoading:p.Z},data(){return{booksList:[],paginator:null,loading:!1}},created(){this.refreshBooks(1)},methods:{async refreshBooks(a){console.log(a),this.loading=!0;const t=await n.Z.get(`${this.$hostname}/books?page=${a}`);this.booksList=t["data"]["data"]["bookList"],this.paginator=t["data"]["data"]["paginator"],this.loading=!1}}},b=u,k=(0,g.Z)(b,e,i,!1,null,"38f6a132",null),_=k.exports},906:function(a,t,s){s.d(t,{Z:function(){return c}});var e=function(){var a=this,t=a._self._c;return t("div",{class:{loader:a.loading}})},i=[],n={props:["loading"]},r=n,o=s(1001),l=(0,o.Z)(r,e,i,!1,null,"4e38ad4d",null),c=l.exports},7830:function(a,t,s){a.exports=s.p+"img/free_pen.ae5e3139.jpg"}}]);
//# sourceMappingURL=899.07c94d8c.js.map