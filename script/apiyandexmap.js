// mapScript.js

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.963539, 30.273171], 
        zoom:10, // Уровень зума
        controls: ['zoomControl'], 
        suppressMapOpenBlock: true 
    });

    myMap.copyrights.add('<style>.ymaps-2-1-79-copyrights-pane { display: none !important; }</style>');

    
    var firstPlacemark = new ymaps.Placemark([59.866522, 30.387769], {}, {
        iconLayout: 'default#image', 
        iconImageHref: 'img/mark_logo_map.png', 
        iconImageSize: [30, 37], 
        iconImageOffset: [-15, -39] 
    });

    
    myMap.geoObjects.add(firstPlacemark);

    
    firstPlacemark.events.add('click', function () {
        window.location.href = 'mezhdunarodaya.html'; 
    });

    var secondPlacemark = new ymaps.Placemark([59.872331, 30.320962], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark_logo_map.png', 
        iconImageSize: [30, 37], 
        iconImageOffset: [-15, -39] 
    });

    myMap.geoObjects.add(secondPlacemark);

    secondPlacemark.events.add('click', function () {
        window.location.href = 'winer_park.html';
    });
    firstPlacemark.events.add('click', function () {
        window.location.href = 'mezhdunarodaya.html'; 
    });

    var secondPlacemark = new ymaps.Placemark([60.032740, 30.200336], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark_logo_map.png', 
        iconImageSize: [30, 37], 
        iconImageOffset: [-15, -39] 
    });

    myMap.geoObjects.add(secondPlacemark);

    secondPlacemark.events.add('click', function () {
        window.location.href = 'Komendansky-Avenue.html';
    });
}
