<template>
    <div id = "leafletmap"></div>
</template>

<script>

let pixel = 11;
 var latlon = [42.851176, -72.597994
 ];
 var map = L.map('map').setView(latlon, 15);
 var attribution ="<a href ='https://www.polka.rodeo' target='_blank'>Copyright Sebastian Noah Frank at Polka.Rodeo, 2017 </a> | <a href='https://www.mapbox.com/about/maps/' target='_blank'>© Mapbox © OpenStreetMap</a> | ÖPNV Daten © <a href='https://www.vbb.de/de/index.html' target='_blank'>VBB</a> | developed by <a href='https://www.route360.net/de/' target='_blank'>Route360°</a>";
 L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2ViYXN0aWFuZnJhbmsiLCJhIjoiY2l2MGN4aDJ5MDAwdDJ6cGR3aXl2aTNpaCJ9.59MJfDHkE30OxxFJvBtdkQ',
 { maxZoom: 20, attribution: attribution, mapID: '__your-mapbox-map-id__' }).addTo(map);
 var marker = L.marker(latlon, { 'draggable': true }).addTo(map);
 var polygonLayer = r360.leafletPolygonLayer().addTo(map);
 polygonLayer.setColors([
 { 'time': 300, 'opacity': 0.4, 'color': '#006837' },
 { 'time': 600, 'opacity': 0.4, 'color': '#39B54A' },
 { 'time': 900, 'opacity': 0.4, 'color': '#F7931E' },
 { 'time': 1200, 'opacity': 0.4, 'color': '#C1272D' },
 ]);
 var showPolygons = function() {
 polygonLayer.setStrokeWidth(pixel);
 var travelOptions = r360.travelOptions();
 travelOptions.setServiceKey('N2T7JHHPOTJAWSFQ7YOMJYH');
 travelOptions.setServiceUrl('https://service.route360.net/na_northeast/');
 travelOptions.addSource(marker);
 travelOptions.setTravelTimes([300,600,900,1200]);
 travelOptions.setTravelType('car');
 r360.PolygonService.getTravelTimePolygons(travelOptions,
 function(polygons) {
 polygonLayer.clearAndAddLayers(polygons, false);
 });
 }
 showPolygons();
 marker.on('dragend', showPolygons);

</script>
<<style>


</style>
