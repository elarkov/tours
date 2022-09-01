import Swiper, {Pagination, Navigation, EffectFade} from "swiper";
Swiper.use([Pagination]);
Swiper.use([Navigation]);
Swiper.use([EffectFade]);


export function renderSlider() {
  const sliders = document.querySelectorAll('.js-slider');
  sliders.forEach(function (slider) {
    initSlider(slider);
  });

  function initSlider(item) {
    const sliderItem = item.querySelector('.js-hero-slider');
    const sliderPopular = item.querySelector('.js-slider-popular');
    const sliderReviews = item.querySelector('.js-slider-reviews');
    const sliderTabs = item.querySelector('.js-slider-tabs');
    const sliderProduct = item.querySelector('.js-slider-product');

    var swiper = new Swiper(sliderItem, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    var swiperPopular = new Swiper(sliderPopular, {
      slidesPerView: 5,
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".popular-button-next",
        prevEl: ".popular-button-prev",
      },
    });
    var swiperReviews = new Swiper(sliderReviews, {
      slidesPerView: 1,
      fadeEffect: { crossFade: true },
      speed: 500,
      effect: 'fade',
      spaceBetween: 10,
      navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
      },
    });
    var swiperTabs = new Swiper(sliderTabs, {
      slidesPerView: 10,
      pagination: {
        el: ".tabs-progress",
        type: "progressbar",
      },
    });
    var swiperProduct = new Swiper(sliderProduct, {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
      },
    });
  }
}