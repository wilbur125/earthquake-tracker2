const usgsUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

const recentRumbles = document.querySelector('#mostRecentRumbles');

async function fetchRecentQuakes() {
    const response = await fetch(usgsUrl+'&limit=3');
    const recentQuakes = await response.json();
    localStorage.setItem("results", JSON.stringify(recentQuakes))
    return recentQuakes;
}


fetchRecentQuakes().then(recentQuakes => {
    recentRumbles.innerHTML = 
            `
                <div class="col-lg-12">
                    <div class="card">
                        <input type="radio" class="btn-check" name="btnradio" value="0" id="btnradio1" autocomplete="off" checked="">
                        <label class="btn btn-outline-info" for="btnradio1" onclick="radioUpdate1()" checked>
                            <div class="card-body">
                                <h5 class="card-title">${recentQuakes.features[0].properties.place}</h5>
                                <h6 class="card-subtitle mb-2 text-muted fw-bold">Magnitude: ${recentQuakes.features[0].properties.mag}</h6>
                                <p class="card-subtitle mb-2 text-muted" id="latValue1">Latitude: ${recentQuakes.features[0].geometry.coordinates[1]} </p>
                                <p class="card-subtitle mb-2 text-muted" id="lngValue1">Longitude: ${recentQuakes.features[0].geometry.coordinates[0]}</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="card">
                        <input type="radio" class="btn-check" name="btnradio" value="1" id="btnradio2" autocomplete="off">
                        <label class="btn btn-outline-info" for="btnradio2" onclick="radioUpdate2()">
                            <div class="card-body">
                                <h5 class="card-title">${recentQuakes.features[1].properties.place}</h5>
                                <h6 class="card-subtitle mb-2 text-muted fw-bold">Magnitude: ${recentQuakes.features[1].properties.mag}</h6>
                                <p class="card-subtitle mb-2 text-muted" id="latValue2">Latitude: ${recentQuakes.features[1].geometry.coordinates[1]} </p>
                                <p class="card-subtitle mb-2 text-muted" id="lngValue2">Longitude: ${recentQuakes.features[1].geometry.coordinates[0]}</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="card">
                        <input type="radio" class="btn-check" name="btnradio" value="2" id="btnradio3" autocomplete="off">
                        <label class="btn btn-outline-info" for="btnradio3" onclick="radioUpdate3()">
                            <div class="card-body">
                                <h5 class="card-title">${recentQuakes.features[2].properties.place}</h5>
                                <h6 class="card-subtitle mb-2 text-muted fw-bold">Magnitude: ${recentQuakes.features[2].properties.mag}</h6>
                                <p class="card-subtitle mb-2 text-muted" id="latValue3">Latitude: ${recentQuakes.features[2].geometry.coordinates[1]} </p>
                                <p class="card-subtitle mb-2 text-muted" id="lngValue3">Longitude: ${recentQuakes.features[2].geometry.coordinates[0]}</p>
                            </div>
                        </label>
                    </div>
                </div>
            `
});

let map;
let marker;
let quakeRadius;
let infowindow;
let storedResults = JSON.parse(localStorage.getItem("results"));
let lat1 = storedResults.features[0].geometry.coordinates[1];
let lng1 = storedResults.features[0].geometry.coordinates[0];
let lat2 = storedResults.features[1].geometry.coordinates[1];
let lng2 = storedResults.features[1].geometry.coordinates[0];
let lat3 = storedResults.features[2].geometry.coordinates[1];
let lng3 = storedResults.features[2].geometry.coordinates[0];

function initMap(lat = lat1, lng = lng1) {
        map = new google.maps.Map(
            document.getElementById("map"),
            {
                center: new google.maps.LatLng(lat, lng),
                zoom: 7,
            }
        );
        marker = new google.maps.Marker({
            position: {lat, lng},
            map: map
        });

}

function radioUpdate1() {
    initMap(lat1, lng1);

}

function radioUpdate2() {
    initMap(lat2, lng2)
}

function radioUpdate3() {
    initMap(lat3, lng3)
}
