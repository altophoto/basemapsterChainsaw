<template>
    <div>
        <p>Basemap: {{ name }}</p>
        <hr>
        <button @click="openStreetMap">Open Street Map</button>
        <button @click="openTopoMap">Open Topo Map</button>
        <button @click="pencilMap">Stylized Pencil Map</button>
        <button @click="wheatPaste">Stylized Wheatpaste Map</button>
        <button @click="stamenTerrain">Stamen Terrain Map</button>
        <button @click="stamenBackground">Stamen Background Map</button>
        <button @click="stamenWatercolor">Stylized Stamen Watercolor Map</button>
        <button @click="mapzenTerrarium">Stylized Mapzen Terrarium Map</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                name: 'OpenStreetMap',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }
        },
        methods: {
            openStreetMap () {
                this.name = 'OpenStreetMap',
                this.url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                this.attribution = '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            },
            openTopoMap () {
                this.name = 'OpenTopoMap',
                this.url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                this.attribution = 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            },
            pencilMap () {
                this.name = 'Pencil',
                this.url = 'https://a.tiles.mapbox.com/v4/examples.a4c252ab/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWx0b3Bob3RvIiwiYSI6ImNqNTg3YnQyeDE1bHMyd3RndGtmMzhyaDAifQ.sNFPJ1oHAeURc75FZtcR3A',
                this.attribution = 'Map tiles: <a href="https://www.mapbox.com/blog/pencil-drawn-style/">Pencil</a> by <a href="https://www.mapbox.com/">Mapbox</a>'
            },
            wheatPaste () {
                this.name = 'Wheatpaste',
                this.url = 'https://a.tiles.mapbox.com/v3/villeda.c4c63d13/{z}/{x}/{y}.png',
                this.attribution = 'Wheatpaste - Mapbox <a href="https://www.mapbox.com/about/maps/">&copy; Mapbox &copy; OpenStreetMap</a>'
            },
            stamenTerrain () {
                this.name = 'Stamen Terrain',
                this.url = 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
                this.attribution = ''
            },
            stamenBackground () {
                this.name = 'Stamen Terrain Background',
                this.url = 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
                this.attribution = ''
            },
            stamenWatercolor () {
                this.name = 'Stamen Terrain Watercolor',
                this.url = 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
                this.attribution = ''
            },
            mapzenTerrarium () {
                this.name = 'Mapzen Terrarium',
                this.url = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
                this.attribution = ''
            }
        }
    }
</script>
