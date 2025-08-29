// mapScript.js

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.872331, 30.320962], 
        zoom:14, // Уровень зума
        controls: ['zoomControl'], 
        suppressMapOpenBlock: true 
    });

    myMap.copyrights.add('<style>.ymaps-2-1-79-copyrights-pane { display: none !important; }</style>');

    var secondPlacemark = new ymaps.Placemark([59.872331, 30.320962], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark_logo_map.png', 
        iconImageSize: [30, 37], 
        iconImageOffset: [-15, -39] 
    });

    myMap.geoObjects.add(secondPlacemark);

    secondPlacemark.events.add('click', function () {
        window.location.href = 'https://yandex.ru/maps/2/saint-petersburg/?ll=30.320962%2C59.872331&mode=poi&poi%5Bpoint%5D=30.321542%2C59.871892&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D110333451738&z=16.68';
    });
}
