
     ymaps.ready(init);
        var myMap, 
            myPlacemark;

        function init(){ 
            myMap = new ymaps.Map ("map-canvas", {
                center: [55.816735, 37.644468],
                zoom: 16
            }); 
            
   

var myPlacemark = new ymaps.Placemark([55.816717, 37.647364], {
	hintContent: '129164, город Москва, Ярославская улица, дом 8, корпус 4'
}, 
{
        preset: 'twirl#redDotIcon' 
    });


			// Р”РѕР±Р°РІР»РµРЅРёРµ РјРµС‚РєРё РЅР° РєР°СЂС‚Сѓ
			myMap.geoObjects.add(myPlacemark);
        }
