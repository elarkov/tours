//import $ from 'jquery';

export function ymap() {
  //Ymap start
  let ymapContainer = document.querySelector('.ymap-container');
  let spinner = document.querySelector('.loader');
  let check_if_load = 0;

  function init() {
    let myMapTemp = new ymaps.Map("map", {
      center: [55.761193, 37.579457],
      zoom: 18,
      controls: ['zoomControl', 'fullscreenControl']
    });

    let myPlacemarkTemp = new ymaps.Placemark([55.761193, 37.579457], {
      iconCaption: 'ООО "СК "СМАРТ"',
      balloonContentBody: 'г. Москва, Каширское шоссе, дом 19, корпус 1, 2 этаж',
    });

    myMapTemp.geoObjects.add(myPlacemarkTemp);

    //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    let layer = myMapTemp.layers.get(0).get(0);

    waitForTilesLoad(layer).then(function () {
      spinner.classList.remove('is-active');
    });
  }

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      let tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (let k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  function loadScript(url, callback) {
    let script = document.createElement("script");
    if (script.readyState) {  //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  //Другие браузеры
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function ymap() {
    ymapContainer.addEventListener('mouseenter', function () {
      if (check_if_load == 0) {
        check_if_load = 1;
        //spinner.addClass('is-active');
        spinner.classList.add('is-active');
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
          ymaps.load(init);
        });
      }
    });
  };
  ymap();

}