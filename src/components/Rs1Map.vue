<template>
  <div class="map">
    <mapbox
      access-token="pk.eyJ1Ijoia3Jiam9uZXMiLCJhIjoiYjZiM2UxZDYyYWQ0MmI0ZWY4ZDU0ZTAxMmRhNjIxMWEifQ.W29Ph-YqccKz7_pfVAd2qw"
      :map-options="{
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-75.72, 45.45],
        zoom: 1,
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      :scale-control="{
        show: true,
        position: 'top-left',
      }"
      :fullscreen-control="{
        show: true,
        position: 'top-left',
      }"
      @map-init="mapInitialized"
      @map-load="loaded"
    />
    <!-- <div id="map"></div> -->
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'
// import initializeMap from "@/utilities/rs1-map.js";

export default {
  name: "rs1-map",
  components: { Mapbox },
  methods: {
    mapInitialized (map) {
      this.$store.commit('assignMap', map)
    },
    loaded(map){
      
            var rs1_centroids_url = 'https://spa2019-admin.deploy.solutions/api/search';
            map.addSource('rs1-centroids', {
                type: 'geojson',
                data: rs1_centroids_url,
                cluster: true,
                clusterMaxZoom: 14, // Max zoom to cluster points on
                clusterRadius: 10 // Radius of each cluster when clustering points (defaults to 50)
            });

            // var rs1_centroids_url = 'https://radarsat-1-archive.space/catalog_centroids.geojson';
            // map.addSource('rs1-centroids', {
            //     type: 'geojson',
            //     data: rs1_centroids_url,
            //     cluster: true,
            //     clusterMaxZoom: 14, // Max zoom to cluster points on
            //     clusterRadius: 10 // Radius of each cluster when clustering points (defaults to 50)
            // });

            // map.addSource('rs1-centroids', {
            //     "type": "geojson",
            //     "data": {
            //         "type": "FeatureCollection",
            //         "name": "catalog_centroids",
            //         "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
            //         "features": [
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-01-28 13:36:55 GMT", "BEAM_MODEP": "Standard 4", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980128_N5786W10910", "END_DATEPr": "1998-01-28 13:37:12 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-109.104025852828045, 57.868858151907176] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-01-28 13:37:09 GMT", "BEAM_MODEP": "Standard 4", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980128_N5705W10939", "END_DATEPr": "1998-01-28 13:37:26 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-109.396158253788997, 57.05230254084239] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-01-28 13:37:23 GMT", "BEAM_MODEP": "Standard 4", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980128_N5631W10965", "END_DATEPr": "1998-01-28 13:37:37 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-109.655422406778868, 56.312626812132201] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-04 13:37:08 GMT", "BEAM_MODEP": "Standard 6", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980504_N5784W11162", "END_DATEPr": "1998-05-04 13:37:25 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.626967792280013, 57.8492340841565] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-04 13:37:22 GMT", "BEAM_MODEP": "Standard 6", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980504_N5709W11184", "END_DATEPr": "1998-05-04 13:37:36 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.847665847072946, 57.091500925107354] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-17 13:57:59 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980517_N5787W11187", "END_DATEPr": "1998-05-17 13:58:16 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.869233433509891, 57.872749849025674] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-17 13:58:14 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980517_N5713W11219", "END_DATEPr": "1998-05-17 13:58:27 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-112.189167116075367, 57.134690247289292] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-19 00:55:47 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980519_N5735W11102", "END_DATEPr": "1998-05-19 00:56:04 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.028294288250422, 57.358024904870952] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-19 00:55:58 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980519_N5798W11129", "END_DATEPr": "1998-05-19 00:56:15 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.300018396662139, 57.985174089005064] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-03 14:02:05 GMT", "BEAM_MODEP": "Standard 1", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980603_N5780W11181", "END_DATEPr": "1998-06-03 14:02:22 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.81058484454033, 57.805465022593268] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-03 14:02:19 GMT", "BEAM_MODEP": "Standard 1", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980603_N5707W11214", "END_DATEPr": "1998-06-03 14:02:33 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-112.148039868901435, 57.077136577067684] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-04 13:32:53 GMT", "BEAM_MODEP": "Standard 7", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980604_N5784W11161", "END_DATEPr": "1998-06-04 13:33:09 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.60920432799405, 57.849208535228804] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-04 13:33:07 GMT", "BEAM_MODEP": "Standard 7", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980604_N5708W11180", "END_DATEPr": "1998-06-04 13:33:21 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.807887405746982, 57.084997418069158] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-11 01:24:50 GMT", "BEAM_MODEP": "Standard 7", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980611_N5695W11229", "END_DATEPr": "1998-06-11 01:25:07 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-112.299335163312108, 56.95715109733154] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-11 01:25:05 GMT", "BEAM_MODEP": "Standard 7", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980611_N5778W11251", "END_DATEPr": "1998-06-11 01:25:21 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-112.5170269731465, 57.787286205823619] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-21 13:37:08 GMT", "BEAM_MODEP": "Standard 6", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980621_N5797W11159", "END_DATEPr": "1998-06-21 13:37:24 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.598167235296515, 57.973758845092782] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-21 13:37:22 GMT", "BEAM_MODEP": "Standard 6", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980621_N5721W11182", "END_DATEPr": "1998-06-21 13:37:36 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.820663824749531, 57.211953151882057] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-07-06 00:55:47 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980706_N5714W11094", "END_DATEPr": "1998-07-06 00:56:04 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-110.944277180019611, 57.149049606443455] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-07-06 00:55:56 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980706_N5770W11118", "END_DATEPr": "1998-07-06 00:56:13 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.184210610902412, 57.705129639255382] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-08-23 00:55:46 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980823_N5725W11098", "END_DATEPr": "1998-08-23 00:56:03 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-110.983071802853416, 57.257882203137534] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-08-23 00:55:57 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980823_N5787W11124", "END_DATEPr": "1998-08-23 00:56:13 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.251033210079001, 57.879014322773656] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-08-30 00:51:18 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980830_N5623W10952", "END_DATEPr": "1998-08-30 00:51:35 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-109.522421686709023, 56.235619650496062] } },
            //             { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "PASS", "DATEProper": "2012-09-14 00:54:07 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_20120914_N5784W11130", "END_DATEPr": "2012-09-14 00:54:23 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "Point", "coordinates": [-111.310120388784654, 57.850868861626914] } }
            //         ]
            //     },
            //     cluster: true,
            //     clusterMaxZoom: 14, // Max zoom to cluster points on
            //     clusterRadius: 10 // Radius of each cluster when clustering points (defaults to 50)
            // }
            // );



            // var rs1_extents_url = 'https://radarsat-1-archive.space/catalog_extents.geojson';
            // map.addSource('rs1-extents', {
            //     type: 'geojson',
            //     data: rs1_extents_url,
            // });

            map.addSource('rs1-extents', {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "name": "catalog_extents",
                    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                    "features": [
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-01-28 13:36:55 GMT", "BEAM_MODEP": "Standard 4", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980128_N5786W10910", "END_DATEPr": "1998-01-28 13:37:12 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-109.855204, 58.437327], [-108.007214, 58.24996], [-108.379629, 57.297253], [-110.179022, 57.482815], [-109.855204, 58.437327]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-01-28 13:37:09 GMT", "BEAM_MODEP": "Standard 4", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980128_N5705W10939", "END_DATEPr": "1998-01-28 13:37:26 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-110.1302, 57.620205], [-108.326446, 57.434624], [-108.68753, 56.481294], [-110.445196, 56.665244], [-110.1302, 57.620205]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-01-28 13:37:23 GMT", "BEAM_MODEP": "Standard 4", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980128_N5631W10965", "END_DATEPr": "1998-01-28 13:37:37 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-110.401111, 56.802271], [-108.636263, 56.618023], [-108.930001, 55.820966], [-110.658053, 56.003973], [-110.401111, 56.802271]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-04 13:37:08 GMT", "BEAM_MODEP": "Standard 6", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980504_N5784W11162", "END_DATEPr": "1998-05-04 13:37:25 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.392693, 58.401011], [-110.58114, 58.25323], [-110.887567, 57.293548], [-112.651096, 57.440911], [-112.392693, 58.401011]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-04 13:37:22 GMT", "BEAM_MODEP": "Standard 6", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980504_N5709W11184", "END_DATEPr": "1998-05-04 13:37:36 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.617988, 57.565857], [-110.847928, 57.418408], [-111.098371, 56.614496], [-112.830125, 56.761683], [-112.617988, 57.565857]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-17 13:57:59 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980517_N5787W11187", "END_DATEPr": "1998-05-17 13:58:16 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.578948, 58.479871], [-110.727017, 58.25468], [-111.187807, 57.262932], [-112.988747, 57.484681], [-112.578948, 58.479871]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-17 13:58:14 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980517_N5713W11219", "END_DATEPr": "1998-05-17 13:58:27 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.92548, 57.644522], [-111.115063, 57.422066], [-111.474484, 56.6234], [-113.245663, 56.843263], [-112.92548, 57.644522]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-19 00:55:47 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980519_N5735W11102", "END_DATEPr": "1998-05-19 00:56:04 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.153317, 57.737222], [-110.324165, 57.961417], [-109.925149, 56.972915], [-111.705182, 56.751997], [-112.153317, 57.737222]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-05-19 00:55:58 GMT", "BEAM_MODEP": "Standard 2", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980519_N5798W11129", "END_DATEPr": "1998-05-19 00:56:15 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Ascending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.447983, 58.362806], [-110.583955, 58.589473], [-110.174824, 57.601441], [-111.987733, 57.378244], [-112.447983, 58.362806]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-03 14:02:05 GMT", "BEAM_MODEP": "Standard 1", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980603_N5780W11181", "END_DATEPr": "1998-06-03 14:02:22 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.501811, 58.418622], [-110.656911, 58.177273], [-111.147744, 57.18997], [-112.941591, 57.427136], [-112.501811, 58.418622]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-03 14:02:19 GMT", "BEAM_MODEP": "Standard 1", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980603_N5707W11214", "END_DATEPr": "1998-06-03 14:02:33 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.869588, 57.589554], [-111.06864, 57.351855], [-111.447962, 56.563571], [-113.209966, 56.798129], [-112.869588, 57.589554]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-04 13:32:53 GMT", "BEAM_MODEP": "Standard 7", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980604_N5784W11161", "END_DATEPr": "1998-06-04 13:33:09 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.416524, 58.388269], [-110.553903, 58.251846], [-110.82852, 57.30607], [-112.642429, 57.442641], [-112.416524, 58.388269]]]] } },
                        { "type": "Feature", "properties": { "SATELLITEP": "RADARSAT-1", "ARCHIVE_FP": "CCMEO", "RECEPTIONP": "GSS", "DATEProper": "1998-06-04 13:33:07 GMT", "BEAM_MODEP": "Standard 7", "POLARIZATP": "HH", "IMAGE_INFP": null, "REASONProp": null, "METADATAPr": "dummy value", "SENSOR_MOP": "Standard", "TITLEPrope": "rsat1_19980604_N5708W11180", "END_DATEPr": "1998-06-04 13:33:21 GMT", "OPTIONSPro": null, "ORBIT_DIRP": "Descending", "ORDERABLEP": "true", "SERVICE_UP": "SERVICE-RSAT1_001-000000000000000000", "LOOK_ORIEP": "Right", "targettype": "DSA" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-112.611748, 57.558275], [-110.794962, 57.42192], [-111.025842, 56.608771], [-112.802848, 56.745324], [-112.611748, 57.558275]]]] } },
                    ]
                }

            }
            );


            map.addLayer({
                "id": "rs1-extents-layer",
                "type": "fill",
                "source": "rs1-extents",
                "paint": {
                    "fill-color": "#888888",
                    "fill-opacity": 0.4
                },
                "filter": ["==", "$type", "Polygon"]
            });

            map.addLayer({
                "id": "rs1-centroids-layer",
                "type": "circle",
                "source": "rs1-centroids",
                "paint": {
                    "circle-radius": 6,
                    "circle-color": "#193D8F"
                },
                "filter": ["==", "$type", "Point"],
            });

            map.addLayer({
                "id": "rs1-centroids-clustering-layer",
                "type": "circle",
                "source": "rs1-centroids",
                "paint": {
                    "circle-radius": 6,
                    "circle-color": "#193D8F"
                },
                "filter": ["==", "$type", "Polygon"],
                "filter": ["has", "point_count"],
                "paint": {
                // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                // with three steps to implement three types of circles:
                //   * Blue, 20px circles when point count is less than 100
                //   * Yellow, 30px circles when point count is between 100 and 750
                //   * Pink, 40px circles when point count is greater than or equal to 750
                "circle-color": [
                "step",
                ["get", "point_count"],
                "#758ABB",
                5,
                "#4763A5",
                10,
                "#193D8F"
                ],
                "circle-radius": [
                "step",
                ["get", "point_count"],
                10,
                5,
                20,
                10,
                30
                ]
                }
            });

            map.addLayer({
id: "cluster-count",
type: "symbol",
source: "rs1-centroids",
filter: ["has", "point_count"],
layout: {
"text-field": "{point_count_abbreviated}",
"text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
"text-size": 12
}
});

    }
  }
};
</script>

<style scoped>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 95%;
}
</style>

