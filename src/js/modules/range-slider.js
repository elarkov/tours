export function rangeSlider() {
  let currencyLang = '₽';
  let days = ' дня';
  const filterRoot = document.querySelector('.js-filter-range');

 
  
  // if (filterRoot) {
    const filterSelectRange = document.querySelectorAll('.filter-select--range');
    filterSelectRange.forEach(function(item) {
      let sliderPrice = item.querySelectorAll('.range-price');
      let sliderDuration = item.querySelectorAll('.range-duration');
      let valueElement = item.querySelectorAll('.filter-select__inputs-input');

      valueElement.forEach((input) => {
        input.oninput = function () {
          this.value = this.value.replace(/[^\d]/g, '');
        };
      });

      sliderPrice.forEach(function(slider) {
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
        
        noUiSlider.create(slider, configPrice);
        slider.noUiSlider.on('update', function (values, handle) {
          let inputs = Array.prototype.slice.call(valueElement);
          inputs[handle].value = `${values[handle]}`;
        });
      });


      sliderDuration.forEach(function(slider) {
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
        
        noUiSlider.create(slider, configDays);
        slider.noUiSlider.on('update', function (values, handle) {
          let inputs = Array.prototype.slice.call(valueElement);
          inputs[handle].value = `${values[handle]}`;
        });
      });
    });
    
    // let sliderDuration = document.querySelector('#range-duration');

    

    

    
    
  

    

    

    
    // noUiSlider.create(sliderDuration, configDays);

    // sliderPrice.noUiSlider.on('update', function (values, handle) {
    //   let inputs = Array.prototype.slice.call(valueElement);
    //   inputs[handle].value = `${values[handle]}`;
    // });

    // sliderDuration.noUiSlider.on('update', function (values, handle) {
    //   const durationInputOne = valueElement[2];
    //   const durationInputSecond = valueElement[3];
    //   const inputsDuration = [durationInputOne, durationInputSecond];
    //   inputsDuration[handle].value = `${values[handle]}`;
    // });
  // }

}