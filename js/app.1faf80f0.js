(function(t){function e(e){for(var s,i,r=e[0],l=e[1],c=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/taufiksandrio.github.io/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],i=a("2877"),r={},l=Object(i["a"])(r,o,n,!1,null,null,null),c=l.exports,p=(a("4989"),a("ab8b"),a("7b52"),a("ca47"),a("9bb9"),a("fb4f"),a("b0c0"),a("8c4f")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light navbar-red"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.user)+" ")]),a("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"}},[t._v("Profile")]),a("a",{staticClass:"dropdown-item",attrs:{href:"javascript:;"},on:{click:t.logout}},[t._v("Logout")])])])])])]),a("main",{staticClass:"wrapper"},[t._m(1),a("div",{staticClass:"content"},[a("div",{staticClass:"container mt-3"},[a("div",{staticClass:"row"},[t._m(2),t.success?a("div",{staticClass:"col-lg-12 mt-3"},[t._m(3)]):t._e(),t.error?a("div",{staticClass:"col-lg-12 mt-3"},[a("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" "+t._s(t.msg)+" "),t._m(4)])]):t._e(),t._m(5)])])])]),a("div",{staticClass:"modal fade",attrs:{"data-backdrop":"static",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(6),a("form",{attrs:{method:"POST"},on:{submit:t.postData}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[t._m(7),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_name,expression:"post.consignee_name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.consignee_name},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(8),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_number,expression:"post.consignee_number"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.consignee_number},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_number",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(9),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_address,expression:"post.consignee_address"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.consignee_address},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_address",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(10),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_postal,expression:"post.consignee_postal"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.consignee_postal},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_postal",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(11),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_country,expression:"post.consignee_country"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.consignee_country},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_country",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(12),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_city,expression:"post.consignee_city"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.consignee_city},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_city",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(13),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_state,expression:"post.consignee_state"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.consignee_state},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_state",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(14),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_province,expression:"post.consignee_province"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.consignee_province},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_province",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(15),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.consignee_email,expression:"post.consignee_email"}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.post.consignee_email},on:{input:function(e){e.target.composing||t.$set(t.post,"consignee_email",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Length")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.length,expression:"post.length"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.post.length},on:{input:function(e){e.target.composing||t.$set(t.post,"length",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Width")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.width,expression:"post.width"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.post.width},on:{input:function(e){e.target.composing||t.$set(t.post,"width",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Height")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.height,expression:"post.height"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.post.height},on:{input:function(e){e.target.composing||t.$set(t.post,"height",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Weight")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.weight,expression:"post.weight"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.post.weight},on:{input:function(e){e.target.composing||t.$set(t.post,"weight",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Payment Type")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.payment_type,expression:"post.payment_type"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.payment_type},on:{input:function(e){e.target.composing||t.$set(t.post,"payment_type",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(16),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.pickup_contact_name,expression:"post.pickup_contact_name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.pickup_contact_name},on:{input:function(e){e.target.composing||t.$set(t.post,"pickup_contact_name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(17),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.pickup_contact_number,expression:"post.pickup_contact_number"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.pickup_contact_number},on:{input:function(e){e.target.composing||t.$set(t.post,"pickup_contact_number",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(18),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.pickup_address,expression:"post.pickup_address"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.pickup_address},on:{input:function(e){e.target.composing||t.$set(t.post,"pickup_address",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(19),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.pickup_postal,expression:"post.pickup_postal"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.pickup_postal},on:{input:function(e){e.target.composing||t.$set(t.post,"pickup_postal",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(20),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.pickup_country,expression:"post.pickup_country"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.pickup_country},on:{input:function(e){e.target.composing||t.$set(t.post,"pickup_country",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(21),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.pickup_city,expression:"post.pickup_city"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.pickup_city},on:{input:function(e){e.target.composing||t.$set(t.post,"pickup_city",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(22),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.pickup_state,expression:"post.pickup_state"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.pickup_state},on:{input:function(e){e.target.composing||t.$set(t.post,"pickup_state",e.target.value)}}})]),a("div",{staticClass:"form-group"},[t._m(23),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.pickup_province,expression:"post.pickup_province"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.pickup_province},on:{input:function(e){e.target.composing||t.$set(t.post,"pickup_province",e.target.value)}}})])]),t._m(24)])])])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("ol",{staticClass:"mt-3"},[a("li",[a("a",{staticClass:"active",attrs:{href:""}},[t._v("Home")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12 text-right mt-3"},[a("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[t._v("Add Data")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" Data Berhasil Di Tambah "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12 mt-4",staticStyle:{"overflow-x":"hidden"}},[a("table",{staticClass:"table table-striped w-100",attrs:{id:"myTable"}},[a("thead",[a("tr",[a("th",[t._v("order id")]),a("th",[t._v("consignee name")]),a("th",[t._v("consignee number")]),a("th",[t._v("consignee address")]),a("th",[t._v("consignee postal")]),a("th",[t._v("consignee country")]),a("th",[t._v("consignee city")]),a("th",[t._v("consignee state")]),a("th",[t._v("consignee province")]),a("th",[t._v("consignee email")]),a("th",[t._v("length")]),a("th",[t._v("width")]),a("th",[t._v("height")]),a("th",[t._v("weight")]),a("th",[t._v("payment type")]),a("th",[t._v("pickup contact name")]),a("th",[t._v("pickup contact number")]),a("th",[t._v("pickup address")]),a("th",[t._v("pickup postal")]),a("th",[t._v("pickup country")]),a("th",[t._v("pickup city")]),a("th",[t._v("pickup state")]),a("th",[t._v("pickup province")])])]),a("tbody")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Add New Data")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee Name "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee Number "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee Address "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee Postal "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee Country "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee City "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee State "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee Province "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Consignee Email "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Pickup Contact Name "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Pickup Contact Number "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Pickup Address "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Pickup Postal "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Pickup Country "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Pickup City "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Pickup State "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[t._v("Pickup Province "),a("i",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Save"}})])}],m=a("1157"),v=a.n(m),_=a("bc3a"),g=a.n(_),f={name:"Home",data:function(){return{user:"",success:!1,error:!1,msg:"",post:{consignee_name:null,consignee_number:null,consignee_address:null,consignee_postal:null,consignee_country:null,consignee_city:null,consignee_state:null,consignee_province:null,consignee_email:null,length:null,width:null,height:null,weight:null,payment_type:null,pickup_contact_name:null,pickup_contact_number:null,pickup_address:null,pickup_postal:null,pickup_country:null,pickup_city:null,pickup_state:null,pickup_province:null}}},mounted:function(){this.user=localStorage.getItem("user"),this.getData()},methods:{getData:function(){g.a.get("https://frontend-screening-v1.herokuapp.com/order",{headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json"}}).then((function(t){v()("#myTable").DataTable({scrollX:!0,data:t.data.data,columns:[{data:"order_id"},{data:"consignee_name"},{data:"consignee_number"},{data:"consignee_address"},{data:"consignee_postal"},{data:"consignee_country"},{data:"consignee_city"},{data:"consignee_state"},{data:"consignee_province"},{data:"consignee_email"},{data:"length"},{data:"width"},{data:"height"},{data:"weight"},{data:"payment_type"},{data:"pickup_contact_name"},{data:"pickup_contact_number"},{data:"pickup_address"},{data:"pickup_postal"},{data:"pickup_country"},{data:"pickup_city"},{data:"pickup_state"},{data:"pickup_province"}]})})).catch((function(t){console.log(t)}))},postData:function(t){var e=this;t.preventDefault(),g.a.post("https://frontend-screening-v1.herokuapp.com/order",this.post,{headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json"}}).then((function(t){e.post.consignee_name=null,e.post.consignee_number=null,e.post.consignee_address=null,e.post.consignee_postal=null,e.post.consignee_country=null,e.post.consignee_city=null,e.post.consignee_state=null,e.post.consignee_province=null,e.post.consignee_email=null,e.post.length=null,e.post.width=null,e.post.height=null,e.post.weight=null,e.post.payment_type=null,e.post.pickup_contact_name=null,e.post.pickup_contact_number=null,e.post.pickup_address=null,e.post.pickup_postal=null,e.post.pickup_country=null,e.post.pickup_city=null,e.post.pickup_state=null,e.post.pickup_province=null,t&&(v()("#exampleModal").modal("hide"),v()("#myTable").DataTable().destroy(),v()("#myTable tbody").empty(),e.getData(),e.success=!0)})).catch((function(t){t&&(e.error=!0,e.msg=t.response.data.message)}))},logout:function(){localStorage.removeItem("user"),localStorage.removeItem("token"),this.$router.push({name:"Login"})}}},h=f,b=(a("cccb"),Object(i["a"])(h,u,d,!1,null,null,null)),C=b.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mvh-100"},[a("div",{staticClass:"col-lg-4 mx-auto my-auto"},[a("div",{staticClass:"card w-100",staticStyle:{"border-radius":"15px"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row"},[t.error?a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"alert alert-danger text-center",attrs:{role:"alert"}},[t._v(" "+t._s(t.message)+" ")])]):t._e(),a("form",{staticClass:"w-100",attrs:{method:"post"},on:{submit:t.login}},[a("div",{staticClass:"col-lg-12 form-group text-left"},[a("p",[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.email,expression:"post.email"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.post.email},on:{input:function(e){e.target.composing||t.$set(t.post,"email",e.target.value)}}})]),a("div",{staticClass:"col-lg-12 form-group text-left"},[a("p",[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.post.password,expression:"post.password"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.post.password},on:{input:function(e){e.target.composing||t.$set(t.post,"password",e.target.value)}}})]),t._m(0)])])])])])])])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12 form-group mb-4"},[a("input",{staticClass:"form-control",staticStyle:{background:"#4e73df",color:"white"},attrs:{type:"submit",value:"Login"}})])}],x={name:"Login",data:function(){return{message:"",error:!1,post:{email:null,password:null}}},methods:{login:function(t){var e=this;t.preventDefault(),g.a.post("https://frontend-screening-v1.herokuapp.com/login",this.post,{headers:{"Content-Type":"application/json"}}).then((function(t){t.data.data&&(localStorage.setItem("user",t.data.data.email),localStorage.setItem("token",t.data.data.session),e.$router.push({name:"Home"}))})).catch((function(t){t&&(e.error=!0,e.message=t.response.data.message)}))}}},w=x,$=(a("d6db"),Object(i["a"])(w,y,k,!1,null,null,null)),P=$.exports;s["a"].use(p["a"]);var N=[{path:"/",name:"Home",component:C},{path:"/login",name:"Login",component:P}],E=new p["a"]({mode:"history",base:"/taufiksandrio.github.io/",routes:N});E.beforeEach((function(t,e,a){var s=localStorage.getItem("token");"Login"===t.name||s||a({name:"Login"}),"Login"===t.name&&s?a({name:"Home"}):a()}));var S=E;s["a"].config.productionTip=!1,new s["a"]({router:S,render:function(t){return t(c)}}).$mount("#app")},"5ced":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")},d6db:function(t,e,a){"use strict";a("e67a")},e67a:function(t,e,a){}});
//# sourceMappingURL=app.1faf80f0.js.map