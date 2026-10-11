


console.log("Map token loaded:", Boolean(mapToken));

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    center: listing.geometry.coordinates,
    style: "mapbox://styles/mapbox/streets-v12",
    zoom: 8
});

const marker1 = new mapboxgl.Marker({
    color: "red"
})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({
            offset: 25,
            className: "my-class"
        }).setHTML(
            `<h4>${listing.location}</h4>
             <p>Exact location provided after booking</p>`
        )
    )
    .addTo(map);
 