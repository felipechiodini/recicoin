<template>
  <div id="map" style="height: 600px;"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MapComponent',
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = L.map('map').setView([-26.407425, -49.085334], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      L.marker([-26.407425, -49.085334]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    }
  }
};
</script>

<style>
#map {
  height: 100%;
}
</style>
