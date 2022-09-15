export function rangeSlider() {
  let currencyLang = '₽';
  let days = ' дня';
  const filterRoot = document.querySelector('.js-filter-range');
  
  if (filterRoot) {
    let sliderPrice = document.querySelector('#range-price');
    let sliderDuration = document.querySelector('#range-duration');

    let valueElement = document.querySelectorAll('.filter-select__inputs-input');

    const configPrice = {
      range: {
        'min': [0],
        'max': 900000
      },
      start: [0, 900000],
      connect: true,
      format: wNumb({
        decimals: 0,
        thousand: ',',
        suffix: currencyLang,
      })
    };

    const configDays = {
      range: {
        'min': [2],
        'max': 93
      },
      start: [2, 93],
      connect: true,
      format: wNumb({
        decimals: 0,
        suffix: days,
      })
    }

    valueElement.forEach((el) => {
      el.oninput = function () {
        this.value = this.value.replace(/[^\d]/g, '');
      };
    });

    noUiSlider.create(sliderPrice, configPrice);
    noUiSlider.create(sliderDuration, configDays);

    sliderPrice.noUiSlider.on('update', function (values, handle) {
      let inputs = Array.prototype.slice.call(valueElement);
      inputs[handle].value = `${values[handle]}`;
    });

    sliderDuration.noUiSlider.on('update', function (values, handle) {
      const durationInputOne = valueElement[2];
      const durationInputSecond = valueElement[3];
      const inputsDuration = [durationInputOne, durationInputSecond];
      inputsDuration[handle].value = `${values[handle]}`;
    });
  }

}