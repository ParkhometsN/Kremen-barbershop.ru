
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.866643, 30.387942], 
        zoom:14, // Уровень зума
        controls: ['zoomControl'], 
        suppressMapOpenBlock: true 
    });

    myMap.copyrights.add('<style>.ymaps-2-1-79-copyrights-pane { display: none !important; }</style>');

    var secondPlacemark = new ymaps.Placemark([59.866643, 30.387942], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark_logo_map.png', 
        iconImageSize: [30, 37], 
        iconImageOffset: [-15, -39] 
    });

    myMap.geoObjects.add(secondPlacemark);

    secondPlacemark.events.add('click', function () {
        window.location.href = 'https://yandex.ru/maps/2/saint-petersburg/search/kremen/?ll=30.354742%2C59.869268&sll=30.350415%2C59.932161&source=serp_navig&sspn=0.025148%2C0.008669&z=14';
    });
}
