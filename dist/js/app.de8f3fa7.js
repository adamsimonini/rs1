(function(e){function t(t){for(var l,o,i=t[0],s=t[1],r=t[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,r||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],l=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(l=!1)}l&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var l={},a={app:0},c=[];function o(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=l,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var l=n("19b3"),a=n.n(l);a.a},"0eab":function(e,t,n){},"19b3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var l=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.$store.state.drawer?n("FilterBar"):e._e(),n("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"#193D8F",dark:""}},[n("v-toolbar-title",{staticStyle:{width:"300px",display:"flex"}},[n("v-app-bar-nav-icon",{staticClass:"home-title",on:{click:e.handleToggle}}),n("router-link",{staticClass:"home-title",attrs:{to:"/"}},[n("h1",[e._v("RADARSAT-1")])])],1),n("v-spacer")],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":"",id:"map_container"}},[n("v-layout",{attrs:{"justify-center":""}},[n("div",{attrs:{id:"content-container"}},[n("router-view")],1)])],1)],1)],1)},c=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[e._l(e.filters,(function(t,l){return[n("v-list-group",{key:t.text,attrs:{"prepend-icon":t.show?t.icon:t["icon-alt"],"append-icon":""},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item",{staticClass:"filter_category"},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.name))])],1)],1)]},proxy:!0}],null,!0),model:{value:t.show,callback:function(n){e.$set(t,"show",n)},expression:"item.show"}},[t.children[0].name?n("v-list-item-subtitle",{staticClass:"filterSubtitle"},[e._v(e._s(t.children[l].name))]):e._e(),e._l(t.children,(function(t){return n("v-list-item",{key:t.name},[t.icon?n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1):e._e(),n("v-list-item-content",[n(t.componentName,{tag:"component"})],1)],1)}))],2)]}))],2)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_standard beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 1",value:"Standard 1"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 2",value:"Standard 2"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 3",value:"Standard 3"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 4",value:"Standard 4"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 5",value:"Standard 5"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 6",value:"Standard 6"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 7",value:"Standard 7"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},r=[],d={name:"BM_Standard",components:{},data(){return{selected:this.$store.state.filterState.Standard,toggleButtonName:"Select All"}},methods:{handleClick:function(){let e=this.$store.state.filterState;e.Standard=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){7==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7"],this.toggleButtonName="Select None");let e=this.$store.state.filterState;e.Standard=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},u=d,f=n("2877"),h=n("6544"),m=n.n(h),p=n("8336"),v=n("ac7c"),b=n("a523"),g=Object(f["a"])(u,s,r,!1,null,"f084cbf8",null),k=g.exports;m()(g,{VBtn:p["a"],VCheckbox:v["a"],VContainer:b["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_fine beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 1",value:"Fine 1"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 2",value:"Fine 2"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 3",value:"Fine 3"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 4",value:"Fine 4"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 5",value:"Fine 5"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 6",value:"Fine 6"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 7",value:"Fine 7"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 8",value:"Fine 8"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 9",value:"Fine 9"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 10",value:"Fine 10"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 11",value:"Fine 11"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 12",value:"Fine 12"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 13",value:"Fine 13"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 14",value:"Fine 14"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 15",value:"Fine 15"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},S=[],F={name:"BM_Fine",components:{},data(){return{selected:this.$store.state.filterState.Fine,toggleButtonName:"Select All"}},methods:{handleClick:function(){let e=this.$store.state.filterState;e.Fine=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){15==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["Fine 1","Fine 2","Fine 3","Fine 4","Fine 5","Fine 6","Fine 7","Fine 8","Fine 9","Fine 10","Fine 11","Fine 12","Fine 13","Fine 14","Fine 15"],this.toggleButtonName="Select None");let e=this.$store.state.filterState;e.Fine=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},_=F,w=Object(f["a"])(_,x,S,!1,null,"cee87118",null),C=w.exports;m()(w,{VBtn:p["a"],VCheckbox:v["a"],VContainer:b["a"]});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_scn beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"ScanSAR Narrow A",value:"ScanSAR Narrow A (W1 W2)"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"ScanSAR Narrow B",value:"ScanSAR Narrow B (W2 S5 S6)"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},O=[],B={name:"BM_Scn",components:{},data(){return{selected:this.$store.state.filterState.Scn,toggleButtonName:"Select All"}},methods:{handleClick:function(){let e=this.$store.state.filterState;e.Scn=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){2==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["ScanSAR Narrow A (W1 W2)","ScanSAR Narrow B (W2 S5 S6)"],this.toggleButtonName="Select None");let e=this.$store.state.filterState;e.Scn=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},$=B,E=Object(f["a"])($,y,O,!1,null,"2a5e2cab",null),A=E.exports;m()(E,{VBtn:p["a"],VCheckbox:v["a"],VContainer:b["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_extendedhigh beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 1",value:"Extended High 1"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 2",value:"Extended High 2"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 3",value:"Extended High 3"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 4",value:"Extended High 4"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 5",value:"Extended High 5"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 6",value:"Extended High 6"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},N=[],V={name:"BM_ExtendedHigh",components:{},data(){return{selected:this.$store.state.filterState.ExtendedHigh,toggleButtonName:"Select All"}},methods:{handleClick:function(){let e=this.$store.state.filterState;e.ExtendedHigh=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){6==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["Extended High 1","Extended High 2","Extended High 3","Extended High 4","Extended High 5","Extended High 6"],this.toggleButtonName="Select None");let e=this.$store.state.filterState;e.ExtendedHigh=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},D=V,H=Object(f["a"])(D,M,N,!1,null,"ae781a92",null),j=H.exports;m()(H,{VBtn:p["a"],VCheckbox:v["a"],VContainer:b["a"]});var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_extendedlow beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended Low 1",value:"Low Incidence 1"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},I=[],R={name:"BM_ExtendedLow",components:{},data(){return{selected:this.$store.state.filterState.ExtendedLow,toggleButtonName:"Select All"}},methods:{handleClick:function(){let e=this.$store.state.filterState;e.ExtendedLow=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){1==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["Low Incidence 1"],this.toggleButtonName="Select None");let e=this.$store.state.filterState;e.ExtendedLow=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},U=R,P=Object(f["a"])(U,L,I,!1,null,"12214a8f",null),W=P.exports;m()(P,{VBtn:p["a"],VCheckbox:v["a"],VContainer:b["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"location_search"},[n("v-row",[n("v-col",{attrs:{cols:"10",sm:"10"}},[n("v-text-field",{attrs:{label:"Location Name","prepend-icon":"place"}})],1)],1)],1)},T=[],Z={name:"Location_Search",components:{},data(){return{}},methods:{}},z=Z,J=n("62ad"),Q=n("0fd9"),q=n("8654"),G=Object(f["a"])(z,Y,T,!1,null,"0336a23e",null),K=G.exports;m()(G,{VCol:J["a"],VRow:Q["a"],VTextField:q["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",lg:"12"}},[n("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on;return[n("v-text-field",e._g({attrs:{label:"Date",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"event"},on:{blur:function(t){e.date=e.parseDate(e.dateFormatted)}},model:{value:e.dateFormatted,callback:function(t){e.dateFormatted=t},expression:"dateFormatted"}},l))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[n("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.menu1=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),n("v-col",{attrs:{cols:"12",lg:"12"}},[n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on;return[n("v-text-field",e._g({attrs:{label:"Date (read only text field)",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"event"},model:{value:e.computedDateFormatted,callback:function(t){e.computedDateFormatted=t},expression:"computedDateFormatted"}},l))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[n("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.menu2=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)],1)],1)},ee=[],te={name:"Date_Ranges",components:{},data:e=>({date:(new Date).toISOString().substr(0,10),dateFormatted:e.formatDate((new Date).toISOString().substr(0,10)),menu1:!1,menu2:!1}),computed:{computedDateFormatted(){return this.formatDate(this.date)}},watch:{date(e){this.dateFormatted=this.formatDate(this.date)}},methods:{formatDate(e){if(!e)return null;const[t,n,l]=e.split("-");return`${n}/${l}/${t}`},parseDate(e){if(!e)return null;const[t,n,l]=e.split("/");return`${l}-${t.padStart(2,"0")}-${n.padStart(2,"0")}`}}},ne=te,le=n("2e4b"),ae=n("e449"),ce=Object(f["a"])(ne,X,ee,!1,null,"11d646dd",null),oe=ce.exports;m()(ce,{VCol:J["a"],VContainer:b["a"],VDatePicker:le["a"],VMenu:ae["a"],VRow:Q["a"],VTextField:q["a"]});var ie={name:"FilterBar",props:{source:String},components:{BMStandard:k,BMFine:C,BMScn:A,BMExtendedHigh:j,BMExtendedLow:W,LocationSearch:K,DateRanges:oe},data:()=>({drawer:null,filters:[{name:"Search",show:!0,children:[{componentName:"LocationSearch"}]},{name:"Dates",show:!1,children:[{componentName:"DateRanges"}]},{name:"Beam Modes",show:!1,children:[{name:"ScanSAR Narrow",componentName:"BMScn"},{name:"Extended High",componentName:"BMExtendedHigh"},{name:"Extended Low",componentName:"BMExtendedLow"},{name:"Standard",componentName:"BMStandard"},{name:"Fine",componentName:"BMFine"}]}]})},se=ie,re=(n("dc38"),n("132d")),de=n("8860"),ue=n("56b0"),fe=n("da13"),he=n("1800"),me=n("5d23"),pe=n("f774"),ve=Object(f["a"])(se,o,i,!1,null,"84f5f000",null),be=ve.exports;m()(ve,{VIcon:re["a"],VList:de["a"],VListGroup:ue["a"],VListItem:fe["a"],VListItemAction:he["a"],VListItemContent:me["a"],VListItemSubtitle:me["b"],VListItemTitle:me["c"],VNavigationDrawer:pe["a"]});var ge={name:"App",props:{source:String},components:{FilterBar:be},data:()=>({}),methods:{handleToggle(){this.$store.commit("toggleDrawer")}}},ke=ge,xe=(n("034f"),n("7496")),Se=n("40dc"),Fe=n("5bc1"),_e=n("a75b"),we=n("a722"),Ce=n("2fa4"),ye=n("2a7f"),Oe=Object(f["a"])(ke,a,c,!1,null,null,null),Be=Oe.exports;m()(Oe,{VApp:xe["a"],VAppBar:Se["a"],VAppBarNavIcon:Fe["a"],VContainer:b["a"],VContent:_e["a"],VLayout:we["a"],VSpacer:Ce["a"],VToolbarTitle:ye["a"]});var $e=n("8c4f"),Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v("Image Map")]),n("Rs1Map")],1)},Ae=[],Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map"},[n("mapbox",{attrs:{"access-token":"pk.eyJ1Ijoia3Jiam9uZXMiLCJhIjoiYjZiM2UxZDYyYWQ0MmI0ZWY4ZDU0ZTAxMmRhNjIxMWEifQ.W29Ph-YqccKz7_pfVAd2qw","map-options":{style:"mapbox://styles/mapbox/streets-v11",center:[-75.72,45.45],zoom:1},"scale-control":{show:!0,position:"top-left"},"fullscreen-control":{show:!0,position:"top-left"}},on:{"map-init":e.mapInitialized,"map-load":e.loaded}})],1)},Ne=[],Ve=n("873e"),De={name:"rs1-map",components:{Mapbox:Ve["a"]},methods:{mapInitialized(e){this.$store.commit("assignMap",e)},loaded(e){e.addSource("rs1-centroids",{type:"geojson",data:this.buildCentroidsUrl(this.$store.state.filterState),cluster:!0,clusterMaxZoom:14,clusterRadius:10}),e.addSource("rs1-extents",{type:"geojson",data:this.buildFootprintsUrl(this.$store.state.filterState)}),e.addLayer({id:"rs1-extents-layer",type:"fill",source:"rs1-extents",paint:{"fill-color":"#888888","fill-opacity":.4},filter:["==","$type","Polygon"]}),e.addLayer({id:"rs1-centroids-layer",type:"circle",source:"rs1-centroids",paint:{"circle-radius":6,"circle-color":"#193D8F"},filter:["==","$type","Point"]}),e.addLayer({id:"rs1-centroids-clustering-layer",type:"circle",source:"rs1-centroids",paint:{"circle-radius":6,"circle-color":"#193D8F"},filter:["==","$type","Polygon"],filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#758ABB",5,"#4763A5",10,"#193D8F"],"circle-radius":["step",["get","point_count"],10,5,20,10,30]}}),e.addLayer({id:"cluster-count",type:"symbol",source:"rs1-centroids",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}})}}},He=De,je=(n("955c"),Object(f["a"])(He,Me,Ne,!1,null,"5b5dda4e",null)),Le=je.exports,Ie={name:"home",components:{Rs1Map:Le}},Re=Ie,Ue=Object(f["a"])(Re,Ee,Ae,!1,null,"4436aaca",null),Pe=Ue.exports;l["default"].use($e["a"]);var We=new $e["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Pe},{path:"/map",name:"map",component:Le}]}),Ye=n("2f62");l["default"].use(Ye["a"]);var Te=new Ye["a"].Store({state:{drawer:!0,filterState:{Scn:["ScanSAR Narrow A (W1 W2)","ScanSAR Narrow B (W2 S5 S6)"],ExtendedHigh:["Extended High 1","Extended High 2","Extended High 3","Extended High 4","Extended High 5","Extended High 6"],ExtendedLow:["Low Incidence 1"],Standard:["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7"],Fine:["Fine 1","Fine 2","Fine 3","Fine 4","Fine 5","Fine 6","Fine 7","Fine 8","Fine 9","Fine 10","Fine 11","Fine 12","Fine 13","Fine 14","Fine 15"]},the_map:{},centroidsApiUrl:"https://spa2019-admin.deploy.solutions/api/centroids",footprintsApiUrl:"https://spa2019-admin.deploy.solutions/api/footprints"},mutations:{toggleDrawer(e){e.drawer?e.drawer=!1:e.drawer=!0},assignMap(e,t){e.the_map=t},assignFilters(e,t){e.filterState=t}},actions:{}}),Ze=n("ce5b"),ze=n.n(Ze);n("bf40"),n("d1e7");l["default"].config.productionTip=!1;const Je={icons:{iconfont:"mdi"}};l["default"].use(ze.a),l["default"].mixin({methods:{buildQueryObject:function(e){let t={beam_modep:[]};for(var n in e)e.hasOwnProperty(n)&&(console.log(n+" -> "+e[n]),t.beam_modep=t.beam_modep.concat(e[n]));return"beam_modep="+t.beam_modep.join(",")},buildCentroidsUrl:function(e){let t=this.$store.state.centroidsApiUrl,n=this.buildQueryObject(e),l=t+"?"+n;return console.log("centroids:"+l),l},buildFootprintsUrl:function(e){let t=this.$store.state.footprintsApiUrl,n=this.buildQueryObject(e),l=t+"?"+n;return console.log("footprints:"+l),l},refreshMap:function(){let e=this.$store.state.the_map,t=this.$store.state.filterState,n=this.buildCentroidsUrl(t);console.log("refreshing centroids with data from "+n),e.getSource("rs1-centroids").setData(n);let l=this.buildFootprintsUrl(t);console.log("refreshing footprints with data from "+l),e.getSource("rs1-extents").setData(l)}}}),new l["default"]({store:Te,router:We,vuetify:new ze.a(Je),render:e=>e(Be)}).$mount("#app")},"955c":function(e,t,n){"use strict";var l=n("cf50"),a=n.n(l);a.a},cf50:function(e,t,n){},dc38:function(e,t,n){"use strict";var l=n("0eab"),a=n.n(l);a.a}});
//# sourceMappingURL=app.de8f3fa7.js.map