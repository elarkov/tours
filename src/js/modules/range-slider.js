export function rangeSlider() {
  let currencyLang = '₽';
  let sliderInner = document.querySelector('#range-slider');
  let valueElement = document.querySelectorAll('.filter-select__inputs-input');
  const config = {
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

  valueElement.forEach((el) => {
    el.oninput = function () {
      this.value = this.value.replace(/[^\d]/g, '');
    };
  });

  noUiSlider.create(sliderInner, config);

  sliderInner.noUiSlider.on('update', function (values, handle) {
    let inputs = Array.prototype.slice.call( valueElement );
    inputs[handle].value = `${values[handle]}`;
  });


  valueElement.forEach(function (input) {
    input.addEventListener('blur', function () {
      sliderInner.noUiSlider.set(this.value);
    });
  });
}