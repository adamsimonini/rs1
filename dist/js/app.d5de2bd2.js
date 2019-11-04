(function(e){function t(t){for(var a,i,s=t[0],c=t[1],r=t[2],u=0,f=[];u<s.length;u++)i=s[u],l[i]&&f.push(l[i][0]),l[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==l[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},l={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var r=0;r<s.length;r++)t(s[r]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("19b3"),l=n.n(a);l.a},1473:function(e,t,n){"use strict";var a=n("332a"),l=n.n(a);l.a},"19b3":function(e,t,n){},"1b8c":function(e,t,n){"use strict";(function(e){var a=n("bd86"),l=n("873e"),o=n("8fbc");t["a"]={name:"rs1-map",components:{Mapbox:l["a"]},methods:{mapInitialized:function(e){this.$store.commit("assignMap",e)},loaded:function(e){var t;e.addSource("rs1-centroids",{type:"geojson",data:this.buildCentroidsUrl(this.$store.state.filterState),cluster:!0,clusterMaxZoom:14,clusterRadius:50}),e.addSource("rs1-extents",{type:"geojson",data:this.buildFootprintsUrl(this.$store.state.filterState)}),e.addLayer({id:"rs1-extents-layer",type:"fill",source:"rs1-extents",layout:{visibility:"none"},paint:{"fill-color":"#888888","fill-opacity":.4},filter:["==","$type","Polygon"]}),e.addLayer({id:"rs1-centroids-layer",type:"circle",source:"rs1-centroids",paint:{"circle-radius":6,"circle-color":"#193D8F"},filter:["==","$type","Point"]}),e.addLayer((t={id:"rs1-centroids-clustering-layer",type:"circle",source:"rs1-centroids",paint:{"circle-radius":6,"circle-color":"#193D8F"},filter:["==","$type","Polygon"]},Object(a["a"])(t,"filter",["has","point_count"]),Object(a["a"])(t,"paint",{"circle-color":["step",["get","point_count"],"#758ABB",5,"#4763A5",10,"#193D8F"],"circle-radius":["step",["get","point_count"],10,5,20,10,30]}),t)),e.addLayer({id:"cluster-count",type:"symbol",source:"rs1-centroids",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12}})},centroidsLayerMouseEntered:function(e){e.getCanvas().style.cursor="pointer"},centroidsLayerMouseLeft:function(e){e.getCanvas().style.cursor=""},centroidsLayerClicked:function(t,n){if(n.features){var a=n.features[0].geometry.coordinates.slice();while(Math.abs(n.lngLat.lng-a[0])>180)a[0]+=n.lngLat.lng>a[0]?360:-360;var l=!1,i=n.features[0].properties,s=1;(n.features.length>1||n.features[0].properties.cluster)&&(l=!0,s=n.features[0].properties.point_count,i={BEAM_MODEP:"Standard 4",TITLEPrope:"rsat1_19980128_N5786W10910",ORBIT_DIRP:"Descending",LOOK_ORIEP:"Right",DATEProper:"1998-01-28 13:36:55 GMT",END_DATEPr:"1998-01-28 13:37:12 GMT"}),(new e.Popup).setLngLat({lng:a[0],lat:a[1]}).setHTML('<div id="vue-popup-content"></div>').addTo(t),new o["a"]({propsData:{feature:{info:{properties:i,multipleFeatures:l,numFeatures:s,lng:n.lngLat.lng,lat:n.lngLat.lat}}}}).$mount("#vue-popup-content")}}}}}).call(this,n("e192"))},"2aa2":function(e,t,n){},"332a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.$store.state.drawer?n("FilterBar"):e._e(),n("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"#193D8F",dark:""}},[n("v-toolbar-title",{staticStyle:{width:"300px",display:"flex"}},[n("v-app-bar-nav-icon",{staticClass:"home-title",on:{click:e.handleToggle}}),n("router-link",{staticClass:"home-title",attrs:{to:"/"}},[n("h1",[e._v("RADARSAT-1")])])],1),n("v-spacer")],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":"",id:"map_container"}},[n("v-layout",{attrs:{"justify-center":""}},[n("div",{attrs:{id:"content-container"}},[n("router-view")],1)])],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[n("ToggleExtents")],1)],1)],1),n("v-list",{attrs:{dense:""}},[e._l(e.filters,function(t,a){return[n("v-list-group",{key:t.text,attrs:{"prepend-icon":t.show?t.icon:t["icon-alt"],"append-icon":""},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item",{staticClass:"filter_category"},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.name))])],1)],1)]},proxy:!0}],null,!0),model:{value:t.show,callback:function(n){e.$set(t,"show",n)},expression:"item.show"}},[t.children[0].name?n("v-list-item-subtitle",{staticClass:"filterSubtitle"},[e._v(e._s(t.children[a].name))]):e._e(),e._l(t.children,function(t){return n("v-list-item",{key:t.name},[t.icon?n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1):e._e(),n("v-list-item-content",[n(t.componentName,{tag:"component"})],1)],1)})],2)]})],2)],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_standard beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 1",value:"Standard 1"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 2",value:"Standard 2"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 3",value:"Standard 3"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 4",value:"Standard 4"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 5",value:"Standard 5"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 6",value:"Standard 6"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Standard 7",value:"Standard 7"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},r=[],d={name:"BM_Standard",components:{},data:function(){return{selected:this.$store.state.filterState.Standard,toggleButtonName:"Select All"}},methods:{handleClick:function(){var e=this.$store.state.filterState;e.Standard=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){7==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7"],this.toggleButtonName="Select None");var e=this.$store.state.filterState;e.Standard=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},u=d,f=n("2877"),h=n("6544"),p=n.n(h),v=n("8336"),m=n("ac7c"),b=n("a523"),g=Object(f["a"])(u,c,r,!1,null,"f084cbf8",null),x=g.exports;p()(g,{VBtn:v["a"],VCheckbox:m["a"],VContainer:b["a"]});var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_fine beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 1",value:"Fine 1"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 2",value:"Fine 2"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 3",value:"Fine 3"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 4",value:"Fine 4"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 5",value:"Fine 5"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 6",value:"Fine 6"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 7",value:"Fine 7"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 8",value:"Fine 8"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 9",value:"Fine 9"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 10",value:"Fine 10"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 11",value:"Fine 11"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 12",value:"Fine 12"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 13",value:"Fine 13"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 14",value:"Fine 14"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Fine 15",value:"Fine 15"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},_=[],S={name:"BM_Fine",components:{},data:function(){return{selected:this.$store.state.filterState.Fine,toggleButtonName:"Select All"}},methods:{handleClick:function(){var e=this.$store.state.filterState;e.Fine=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){15==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["Fine 1","Fine 2","Fine 3","Fine 4","Fine 5","Fine 6","Fine 7","Fine 8","Fine 9","Fine 10","Fine 11","Fine 12","Fine 13","Fine 14","Fine 15"],this.toggleButtonName="Select None");var e=this.$store.state.filterState;e.Fine=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},F=S,w=Object(f["a"])(F,k,_,!1,null,"cee87118",null),y=w.exports;p()(w,{VBtn:v["a"],VCheckbox:m["a"],VContainer:b["a"]});var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_scn beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"ScanSAR Narrow A",value:"ScanSAR Narrow A (W1 W2)"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"ScanSAR Narrow B",value:"ScanSAR Narrow B (W2 S5 S6)"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},C=[],O={name:"BM_Scn",components:{},data:function(){return{selected:this.$store.state.filterState.Scn,toggleButtonName:"Select All"}},methods:{handleClick:function(){var e=this.$store.state.filterState;e.Scn=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){2==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["ScanSAR Narrow A (W1 W2)","ScanSAR Narrow B (W2 S5 S6)"],this.toggleButtonName="Select None");var e=this.$store.state.filterState;e.Scn=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},B=O,M=Object(f["a"])(B,E,C,!1,null,"2a5e2cab",null),$=M.exports;p()(M,{VBtn:v["a"],VCheckbox:m["a"],VContainer:b["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_extendedhigh beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 1",value:"Extended High 1"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 2",value:"Extended High 2"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 3",value:"Extended High 3"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 4",value:"Extended High 4"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 5",value:"Extended High 5"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended High 6",value:"Extended High 6"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},L=[],D={name:"BM_ExtendedHigh",components:{},data:function(){return{selected:this.$store.state.filterState.ExtendedHigh,toggleButtonName:"Select All"}},methods:{handleClick:function(){var e=this.$store.state.filterState;e.ExtendedHigh=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){6==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["Extended High 1","Extended High 2","Extended High 3","Extended High 4","Extended High 5","Extended High 6"],this.toggleButtonName="Select None");var e=this.$store.state.filterState;e.ExtendedHigh=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},N=D,V=Object(f["a"])(N,A,L,!1,null,"ae781a92",null),j=V.exports;p()(V,{VBtn:v["a"],VCheckbox:m["a"],VContainer:b["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bm_extendedlow beam_mode_filter"},[n("v-container",{attrs:{fluid:""}},[n("v-checkbox",{attrs:{color:"#193d8f",dense:"",label:"Extended Low 1",value:"Low Incidence 1"},nativeOn:{click:function(t){return e.handleClick(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-btn",{staticClass:"selectButton",attrs:{color:"#193d8f"},on:{click:e.toggleAll}},[e._v(e._s(e.toggleButtonName))])],1)},I=[],P={name:"BM_ExtendedLow",components:{},data:function(){return{selected:this.$store.state.filterState.ExtendedLow,toggleButtonName:"Select All"}},methods:{handleClick:function(){var e=this.$store.state.filterState;e.ExtendedLow=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()},toggleAll:function(){1==this.selected.length?(this.selected=[],this.toggleButtonName="Select All"):(this.selected=["Low Incidence 1"],this.toggleButtonName="Select None");var e=this.$store.state.filterState;e.ExtendedLow=this.selected,this.$store.commit("assignFilters",e),this.refreshMap()}}},T=P,R=Object(f["a"])(T,H,I,!1,null,"12214a8f",null),U=R.exports;p()(R,{VBtn:v["a"],VCheckbox:m["a"],VContainer:b["a"]});var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"location_search"},[n("v-row",[n("v-col",{attrs:{cols:"10",sm:"10"}},[n("v-text-field",{attrs:{label:"Location Name","prepend-icon":"place"}})],1)],1)],1)},Y=[],Z={name:"Location_Search",components:{},data:function(){return{}},methods:{}},z=Z,J=n("62ad"),Q=n("0fd9"),q=n("8654"),G=Object(f["a"])(z,W,Y,!1,null,"0336a23e",null),K=G.exports;p()(G,{VCol:J["a"],VRow:Q["a"],VTextField:q["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",lg:"12"}},[n("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Date",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"event"},on:{blur:function(t){e.date=e.parseDate(e.dateFormatted)}},model:{value:e.dateFormatted,callback:function(t){e.dateFormatted=t},expression:"dateFormatted"}},a))]}}]),model:{value:e.menu1,callback:function(t){e.menu1=t},expression:"menu1"}},[n("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.menu1=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),n("v-col",{attrs:{cols:"12",lg:"12"}},[n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-text-field",e._g({attrs:{label:"Date (read only text field)",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"event"},model:{value:e.computedDateFormatted,callback:function(t){e.computedDateFormatted=t},expression:"computedDateFormatted"}},a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[n("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.menu2=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)],1)],1)},ee=[],te=(n("f576"),n("28a5"),n("768b")),ne={name:"Date_Ranges",components:{},data:function(e){return{date:(new Date).toISOString().substr(0,10),dateFormatted:e.formatDate((new Date).toISOString().substr(0,10)),menu1:!1,menu2:!1}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(e){this.dateFormatted=this.formatDate(this.date)}},methods:{formatDate:function(e){if(!e)return null;var t=e.split("-"),n=Object(te["a"])(t,3),a=n[0],l=n[1],o=n[2];return"".concat(l,"/").concat(o,"/").concat(a)},parseDate:function(e){if(!e)return null;var t=e.split("/"),n=Object(te["a"])(t,3),a=n[0],l=n[1],o=n[2];return"".concat(o,"-").concat(a.padStart(2,"0"),"-").concat(l.padStart(2,"0"))}}},ae=ne,le=n("2e4b"),oe=n("e449"),ie=Object(f["a"])(ae,X,ee,!1,null,"3684fc3d",null),se=ie.exports;p()(ie,{VCol:J["a"],VContainer:b["a"],VDatePicker:le["a"],VMenu:oe["a"],VRow:Q["a"],VTextField:q["a"]});var ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toggle_extents"},[n("v-row",[n("v-col",{attrs:{cols:"10",sm:"10"}},[n("v-switch",{attrs:{label:"Image Extents: "+(this.$store.state.showExtents?"on":"off")},on:{change:this.updateExtentsVisibility},model:{value:e.toggle,callback:function(t){e.toggle=t},expression:"toggle"}})],1)],1)],1)},re=[],de={name:"Toggle_Extents",components:{},data:function(){return{showExtents:this.$store.state.showExtents}},computed:{toggle:{get:function(){return this.$store.state.showExtents},set:function(){this.$store.commit("toggleExtents")}}},methods:{}},ue=de,fe=n("b73d"),he=Object(f["a"])(ue,ce,re,!1,null,"25f3a4ea",null),pe=he.exports;p()(he,{VCol:J["a"],VRow:Q["a"],VSwitch:fe["a"]});var ve={name:"FilterBar",props:{source:String},components:{BMStandard:x,BMFine:y,BMScn:$,BMExtendedHigh:j,BMExtendedLow:U,LocationSearch:K,DateRanges:se,ToggleExtents:pe},data:function(){return{drawer:null,filters:[{name:"Search",show:!0,children:[{componentName:"LocationSearch"}]},{name:"Dates",show:!1,children:[{componentName:"DateRanges"}]},{name:"Beam Modes",show:!1,children:[{name:"ScanSAR Narrow",componentName:"BMScn"},{name:"Extended High",componentName:"BMExtendedHigh"},{name:"Extended Low",componentName:"BMExtendedLow"},{name:"Standard",componentName:"BMStandard"},{name:"Fine",componentName:"BMFine"}]}]}}},me=ve,be=(n("1473"),n("132d")),ge=n("8860"),xe=n("56b0"),ke=n("da13"),_e=n("1800"),Se=n("5d23"),Fe=n("f774"),we=Object(f["a"])(me,i,s,!1,null,"90faf34e",null),ye=we.exports;p()(we,{VIcon:be["a"],VList:ge["a"],VListGroup:xe["a"],VListItem:ke["a"],VListItemAction:_e["a"],VListItemContent:Se["a"],VListItemSubtitle:Se["b"],VListItemTitle:Se["c"],VNavigationDrawer:Fe["a"]});var Ee={name:"App",props:{source:String},components:{FilterBar:ye},data:function(){return{}},methods:{handleToggle:function(){this.$store.commit("toggleDrawer")}}},Ce=Ee,Oe=(n("034f"),n("7496")),Be=n("40dc"),Me=n("5bc1"),$e=n("a75b"),Ae=n("a722"),Le=n("2fa4"),De=n("2a7f"),Ne=Object(f["a"])(Ce,l,o,!1,null,null,null),Ve=Ne.exports;p()(Ne,{VApp:Oe["a"],VAppBar:Be["a"],VAppBarNavIcon:Me["a"],VContainer:b["a"],VContent:$e["a"],VLayout:Ae["a"],VSpacer:Le["a"],VToolbarTitle:De["a"]});var je=n("8c4f"),He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h2",[e._v("Image Map")]),n("Rs1Map")],1)},Ie=[],Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"map"},[n("mapbox",{attrs:{"access-token":"pk.eyJ1Ijoia3Jiam9uZXMiLCJhIjoiYjZiM2UxZDYyYWQ0MmI0ZWY4ZDU0ZTAxMmRhNjIxMWEifQ.W29Ph-YqccKz7_pfVAd2qw","map-options":{style:"mapbox://styles/mapbox/streets-v11",center:[-75.72,45.45],zoom:1},"scale-control":{show:!0,position:"top-left"},"fullscreen-control":{show:!0,position:"top-left"}},on:{"map-init":e.mapInitialized,"map-load":e.loaded,"map-click:rs1-centroids-layer":e.centroidsLayerClicked,"map-mouseenter:rs1-centroids-layer":e.centroidsLayerMouseEntered,"map-mouseleave:rs1-centroids-layer":e.centroidsLayerMouseLeft}})],1)},Te=[],Re=n("1b8c"),Ue=Re["a"],We=(n("8e37"),Object(f["a"])(Ue,Pe,Te,!1,null,"9c72504e",null)),Ye=We.exports,Ze={name:"home",components:{Rs1Map:Ye}},ze=Ze,Je=Object(f["a"])(ze,He,Ie,!1,null,"4436aaca",null),Qe=Je.exports;a["default"].use(je["a"]);var qe=new je["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Qe},{path:"/map",name:"map",component:Ye}]}),Ge=n("2f62");a["default"].use(Ge["a"]);var Ke=new Ge["a"].Store({state:{drawer:!0,showExtents:!1,filterState:{Scn:["ScanSAR Narrow A (W1 W2)","ScanSAR Narrow B (W2 S5 S6)"],ExtendedHigh:["Extended High 1","Extended High 2","Extended High 3","Extended High 4","Extended High 5","Extended High 6"],ExtendedLow:["Low Incidence 1"],Standard:["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7"],Fine:["Fine 1","Fine 2","Fine 3","Fine 4","Fine 5","Fine 6","Fine 7","Fine 8","Fine 9","Fine 10","Fine 11","Fine 12","Fine 13","Fine 14","Fine 15"]},the_map:{},centroidsApiUrl:"https://spa2019-admin.deploy.solutions/api/centroids",footprintsApiUrl:"https://spa2019-admin.deploy.solutions/api/footprints"},mutations:{toggleDrawer:function(e){e.drawer?e.drawer=!1:e.drawer=!0},assignMap:function(e,t){e.the_map=t},assignFilters:function(e,t){e.filterState=t},toggleExtents:function(e){e.showExtents?e.showExtents=!1:e.showExtents=!0}},actions:{}}),Xe=n("ce5b"),et=n.n(Xe);n("bf40"),n("d1e7");a["default"].config.productionTip=!1;var tt={icons:{iconfont:"mdi"}};a["default"].use(et.a),a["default"].mixin({methods:{buildQueryObject:function(e){var t={beam_modep:[]};for(var n in e)e.hasOwnProperty(n)&&(console.log(n+" -> "+e[n]),t.beam_modep=t.beam_modep.concat(e[n]));return"beam_modep="+t.beam_modep.join(",")},buildCentroidsUrl:function(e){var t=this.$store.state.centroidsApiUrl,n=this.buildQueryObject(e),a=t+"?"+n;return console.log("centroids:"+a),a},buildFootprintsUrl:function(e){var t=this.$store.state.footprintsApiUrl,n=this.buildQueryObject(e),a=t+"?"+n;return console.log("footprints:"+a),a},refreshMap:function(){var e=this.$store.state.the_map,t=this.$store.state.filterState,n=this.buildCentroidsUrl(t);console.log("refreshing centroids with data from "+n),e.getSource("rs1-centroids").setData(n);var a=this.buildFootprintsUrl(t);console.log("refreshing footprints with data from "+a),e.getSource("rs1-extents").setData(a)},updateExtentsVisibility:function(){var e=this.$store.state.the_map;this.$store.state.showExtents?e.setLayoutProperty("rs1-extents-layer","visibility","visible"):e.setLayoutProperty("rs1-extents-layer","visibility","none")}}}),new a["default"]({store:Ke,router:qe,vuetify:new et.a(tt),render:function(e){return e(Ve)}}).$mount("#app")},"8e37":function(e,t,n){"use strict";var a=n("ccf4"),l=n.n(a);l.a},"8fbc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.feature.info.multipleFeatures?n("h4",[e._v(e._s(e.feature.info.numFeatures)+" features at this location. Sample feature shown.")]):e._e(),n("h3",[e._v(e._s(e.feature.info.properties.BEAM_MODEP))]),n("p",{staticClass:"image-info"},[n("b",[e._v("ID: ")]),e._v(e._s(e.feature.info.properties.TITLEPrope))]),n("p",{staticClass:"image-info"},[n("b",[e._v("Pass Direction: ")]),e._v(e._s(e.feature.info.properties.ORBIT_DIRP))]),n("p",{staticClass:"image-info"},[n("b",[e._v("Look Orientation: ")]),e._v(e._s(e.feature.info.properties.LOOK_ORIEP))]),n("p",{staticClass:"image-info"},[n("b",[e._v("Longitude: ")]),e._v(e._s(e.feature.info.lng))]),n("p",{staticClass:"image-info"},[n("b",[e._v("Latitude: ")]),e._v(e._s(e.feature.info.lat))]),n("p",{staticClass:"image-info"},[n("b",[e._v("Start Date: ")]),e._v(e._s(e.feature.info.properties.DATEProper))]),n("p",{staticClass:"image-info"},[n("b",[e._v("End Date: ")]),e._v(e._s(e.feature.info.properties.END_DATEPr))])])},l=[],o=n("2b0e"),i=o["default"].extend({props:{feature:{required:!1,info:Object}},methods:{}}),s=i,c=(n("d622"),n("2877")),r=Object(c["a"])(s,a,l,!1,null,null,null);t["a"]=r.exports},ccf4:function(e,t,n){},d622:function(e,t,n){"use strict";var a=n("2aa2"),l=n.n(a);l.a}});
//# sourceMappingURL=app.d5de2bd2.js.map