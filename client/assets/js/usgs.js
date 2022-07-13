const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

const recentRumbles = document.querySelector('#mostRecentRumbles');

// Most Recent Rumbles
async function fetchUsgsData() {
    const response = await fetch(url+'&limit=5');
    const recentQuakes = await response.json();
    return recentQuakes;
  }
  fetchUsgsData().then(recentQuakes => {
    recentRumbles.innerHTML = recentQuakes.features.map(function(recentQuake) {
        return (
            `
                <li>
                    <p>Place: ${recentQuake.properties.place}</p>
                    <p>Magnitude: ${recentQuake.properties.mag}</p>
                </li>
            `
        )
    }).join('')
    console.log(recentQuakes.features); // fetched quakes
  });
