var map = L.map('map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidHJpZ2VvIiwiYSI6ImNsOXlmZXlheTA0a3kzdmxuemE5MHVsMnQifQ.abEIHxGUIn-Yz1IwcRTT7Q',
}).addTo(map);

map.locate({setView: true, maxZoom: 16});