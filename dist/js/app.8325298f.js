(function(e){function t(t){for(var E,o,a=t[0],A=t[1],T=t[2],l=0,O=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(P,o)&&P[o]&&O.push(P[o][0]),P[o]=0;for(E in A)Object.prototype.hasOwnProperty.call(A,E)&&(e[E]=A[E]);R&&R(t);while(O.length)O.shift()();return n.push.apply(n,T||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],E=!0,a=1;a<r.length;a++){var A=r[a];0!==P[A]&&(E=!1)}E&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var E={},P={app:0},n=[];function o(t){if(E[t])return E[t].exports;var r=E[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=E,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var E in e)o.d(r,E,function(t){return e[t]}.bind(null,E));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],A=a.push.bind(a);a.push=t,a=a.slice();for(var T=0;T<a.length;T++)t(a[T]);var R=A;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var E=r("19b3"),P=r.n(E);P.a},"19b3":function(e,t,r){},"359d":function(e,t,r){},"4c5c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var E=r("2b0e"),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[e._l(e.items,(function(t){return[t.heading?r("v-layout",{key:t.heading,attrs:{"align-center":""}}):t.children?r("v-list-group",{key:t.text,attrs:{"prepend-icon":t.model?t.icon:t["icon-alt"],"append-icon":""},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[e._v("\n                  "+e._s(t.text)+"\n                ")])],1)],1)]},proxy:!0}],null,!0),model:{value:t.model,callback:function(r){e.$set(t,"model",r)},expression:"item.model"}},e._l(t.children,(function(t,E){return r("v-list-item",{key:E},[r("router-link",{attrs:{to:t.route}},[t.icon?r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1):e._e(),r("v-list-item-content",[r("v-list-item-title",[e._v("\n                  "+e._s(t.text)+"\n                ")])],1)],1)],1)})),1):r("v-list-item",{key:t.text},[r("v-list-item-action",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("\n              "+e._s(t.text)+"\n            ")])],1)],1)]}))],2)],1),r("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"green darken-3",dark:""}},[r("v-toolbar-title",{staticStyle:{width:"300px",display:"flex"}},[r("v-app-bar-nav-icon",{staticClass:"home-title",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("router-link",{staticClass:"home-title",attrs:{to:"/"}},[r("h1",[e._v("RADARSAT-1")])])],1),r("v-spacer")],1),r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":""}},[r("div",{attrs:{id:"content-container"}},[r("router-view")],1)])],1)],1)],1)},n=[],o={name:"App",props:{source:String},components:{},data:()=>({drawer:null,items:[{text:"Part I",model:!0,children:[{text:"Filter",route:"/"},{text:"About",route:"/"}]}]})},a=o,A=(r("034f"),r("2877")),T=r("6544"),R=r.n(T),l=r("7496"),O=r("40dc"),S=r("5bc1"),i=r("a523"),p=r("a75b"),I=r("132d"),u=r("a722"),_=r("8860"),d=r("56b0"),s=r("da13"),D=r("1800"),c=r("5d23"),M=r("f774"),y=r("2fa4"),N=r("2a7f"),C=Object(A["a"])(a,P,n,!1,null,null,null),L=C.exports;R()(C,{VApp:l["a"],VAppBar:O["a"],VAppBarNavIcon:S["a"],VContainer:i["a"],VContent:p["a"],VIcon:I["a"],VLayout:u["a"],VList:_["a"],VListGroup:d["a"],VListItem:s["a"],VListItemAction:D["a"],VListItemContent:c["a"],VListItemTitle:c["b"],VNavigationDrawer:M["a"],VSpacer:y["a"],VToolbarTitle:N["a"]});var m=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h2",[e._v("Image Map")]),r("Rs1Map")],1)},v=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"map"},[r("mapbox",{attrs:{"access-token":"pk.eyJ1Ijoia3Jiam9uZXMiLCJhIjoiYjZiM2UxZDYyYWQ0MmI0ZWY4ZDU0ZTAxMmRhNjIxMWEifQ.W29Ph-YqccKz7_pfVAd2qw","map-options":{style:"mapbox://styles/mapbox/streets-v11",center:[-75.72,45.45],zoom:1},"geolocate-control":{show:!0,position:"top-left"},"scale-control":{show:!0,position:"top-left"},"fullscreen-control":{show:!0,position:"top-left"}},on:{"map-load":e.loaded}})],1)},G=[],V=r("873e"),B={name:"rs1-map",components:{Mapbox:V["a"]},methods:{loaded(e){e.addSource("rs1-centroids",{type:"geojson",data:{type:"FeatureCollection",name:"catalog_centroids",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-01-28 13:36:55 GMT",BEAM_MODEP:"Standard 4",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980128_N5786W10910",END_DATEPr:"1998-01-28 13:37:12 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-109.10402585282804,57.868858151907176]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-01-28 13:37:09 GMT",BEAM_MODEP:"Standard 4",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980128_N5705W10939",END_DATEPr:"1998-01-28 13:37:26 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-109.396158253789,57.05230254084239]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-01-28 13:37:23 GMT",BEAM_MODEP:"Standard 4",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980128_N5631W10965",END_DATEPr:"1998-01-28 13:37:37 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-109.65542240677887,56.3126268121322]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-05-04 13:37:08 GMT",BEAM_MODEP:"Standard 6",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980504_N5784W11162",END_DATEPr:"1998-05-04 13:37:25 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.62696779228001,57.8492340841565]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-05-04 13:37:22 GMT",BEAM_MODEP:"Standard 6",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980504_N5709W11184",END_DATEPr:"1998-05-04 13:37:36 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.84766584707295,57.091500925107354]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-05-17 13:57:59 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980517_N5787W11187",END_DATEPr:"1998-05-17 13:58:16 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.86923343350989,57.87274984902567]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-05-17 13:58:14 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980517_N5713W11219",END_DATEPr:"1998-05-17 13:58:27 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-112.18916711607537,57.13469024728929]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-05-19 00:55:47 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980519_N5735W11102",END_DATEPr:"1998-05-19 00:56:04 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.02829428825042,57.35802490487095]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-05-19 00:55:58 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980519_N5798W11129",END_DATEPr:"1998-05-19 00:56:15 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.30001839666214,57.98517408900506]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-06-03 14:02:05 GMT",BEAM_MODEP:"Standard 1",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980603_N5780W11181",END_DATEPr:"1998-06-03 14:02:22 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.81058484454033,57.80546502259327]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-06-03 14:02:19 GMT",BEAM_MODEP:"Standard 1",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980603_N5707W11214",END_DATEPr:"1998-06-03 14:02:33 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-112.14803986890144,57.077136577067684]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-06-04 13:32:53 GMT",BEAM_MODEP:"Standard 7",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980604_N5784W11161",END_DATEPr:"1998-06-04 13:33:09 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.60920432799405,57.849208535228804]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-06-04 13:33:07 GMT",BEAM_MODEP:"Standard 7",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980604_N5708W11180",END_DATEPr:"1998-06-04 13:33:21 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.80788740574698,57.08499741806916]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-06-11 01:24:50 GMT",BEAM_MODEP:"Standard 7",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980611_N5695W11229",END_DATEPr:"1998-06-11 01:25:07 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-112.29933516331211,56.95715109733154]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-06-11 01:25:05 GMT",BEAM_MODEP:"Standard 7",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980611_N5778W11251",END_DATEPr:"1998-06-11 01:25:21 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-112.5170269731465,57.78728620582362]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-06-21 13:37:08 GMT",BEAM_MODEP:"Standard 6",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980621_N5797W11159",END_DATEPr:"1998-06-21 13:37:24 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.59816723529651,57.97375884509278]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-06-21 13:37:22 GMT",BEAM_MODEP:"Standard 6",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980621_N5721W11182",END_DATEPr:"1998-06-21 13:37:36 GMT",OPTIONSPro:null,ORBIT_DIRP:"Descending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.82066382474953,57.21195315188206]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-07-06 00:55:47 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980706_N5714W11094",END_DATEPr:"1998-07-06 00:56:04 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-110.94427718001961,57.149049606443455]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-07-06 00:55:56 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980706_N5770W11118",END_DATEPr:"1998-07-06 00:56:13 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.18421061090241,57.70512963925538]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-08-23 00:55:46 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980823_N5725W11098",END_DATEPr:"1998-08-23 00:56:03 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-110.98307180285342,57.257882203137534]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-08-23 00:55:57 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980823_N5787W11124",END_DATEPr:"1998-08-23 00:56:13 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.251033210079,57.879014322773656]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"GSS",DATEProper:"1998-08-30 00:51:18 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_19980830_N5623W10952",END_DATEPr:"1998-08-30 00:51:35 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-109.52242168670902,56.23561965049606]}},{type:"Feature",properties:{SATELLITEP:"RADARSAT-1",ARCHIVE_FP:"CCMEO",RECEPTIONP:"PASS",DATEProper:"2012-09-14 00:54:07 GMT",BEAM_MODEP:"Standard 2",POLARIZATP:"HH",IMAGE_INFP:null,REASONProp:null,METADATAPr:"dummy value",SENSOR_MOP:"Standard",TITLEPrope:"rsat1_20120914_N5784W11130",END_DATEPr:"2012-09-14 00:54:23 GMT",OPTIONSPro:null,ORBIT_DIRP:"Ascending",ORDERABLEP:"true",SERVICE_UP:"SERVICE-RSAT1_001-000000000000000000",LOOK_ORIEP:"Right",targettype:"DSA"},geometry:{type:"Point",coordinates:[-111.31012038878465,57.850868861626914]}}]},cluster:!0,clusterMaxZoom:14,clusterRadius:50});var t="https://radarsat-1-archive.space/catalog_extents.geojson";e.addSource("rs1-extents",{type:"geojson",data:t}),e.addLayer({id:"rs1-centroids-layer",type:"circle",source:"rs1-centroids",paint:{"circle-radius":6,"circle-color":"#B42222"},filter:["==","$type","Point"]}),e.addLayer({id:"rs1-extents-layer",type:"fill",source:"rs1-extents",paint:{"fill-color":"#888888","fill-opacity":.4},filter:["==","$type","Polygon"]}),e.addLayer({id:"rs1-centroids-clustering-layer",type:"circle",source:"rs1-centroi",paint:{"fill-color":"#888888","fill-opacity":.4},filter:["==","$type","Polygon"]})}}},F=B,h=(r("6116"),Object(A["a"])(F,f,G,!1,null,"21433186",null)),H=h.exports,b={name:"home",components:{Rs1Map:H}},x=b,Z=(r("91d7"),Object(A["a"])(x,g,v,!1,null,"7201d7fc",null)),w=Z.exports;E["default"].use(m["a"]);var U=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:w},{path:"/map",name:"map",component:H}]}),W=r("2f62");E["default"].use(W["a"]);var K=new W["a"].Store({state:{},mutations:{},actions:{}}),j=r("ce5b"),k=r.n(j);r("bf40"),r("d1e7");E["default"].config.productionTip=!1;const $={icons:{iconfont:"mdi"}};E["default"].use(k.a),new E["default"]({store:K,router:U,vuetify:new k.a($),render:e=>e(L)}).$mount("#app")},6116:function(e,t,r){"use strict";var E=r("359d"),P=r.n(E);P.a},"91d7":function(e,t,r){"use strict";var E=r("4c5c"),P=r.n(E);P.a}});
//# sourceMappingURL=app.8325298f.js.map