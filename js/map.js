function initMap() {
    var beetroot = {lat: 46.4782984, lng: 30.7214134};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: beetroot

    });

    var marker_url = 'img/academybeetroot.png';
    var marker = new google.maps.Marker({
        position: beetroot,
        map: map,
        visible: true,
        icon: marker_url

    });
}
