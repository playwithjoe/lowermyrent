function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(43.651070,-79.347015),
      zoom:10,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

const searchAdd = document.querySelector('#search-btn')

function printTest() {
console.log("Test")
}

searchAdd.addEventListener('click', () => {
printTest()
})