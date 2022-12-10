// Initialize and add the map
function initMap() {
    // The location
    const home = { lat: -25.344, lng: 131.031 };
    // The map, centered at home
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: home,
    });
    // The marker, positioned at home
    const marker = new google.maps.Marker({
      position: home,
      map: map,
    });
  }
  
  window.initMap = initMap;