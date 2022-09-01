export function renderPopup() {
  const popupCloseBtns = document.querySelectorAll('.popup__btn-close');
  const popupOverlays = document.querySelectorAll('.popup-overlay');
  const buttons = [
    document.querySelectorAll('.js-popup'),
  ];

  const openPopup = function (elem) {
    const dataTarget = elem.dataset.target;
    popupOverlays.forEach(function (item) {
      const dataPopup = item.dataset.popup;
      if (dataTarget === dataPopup) {
        item.classList.add('is-open');
      }
    });
  };

  const closePopup = function (item) {
    const dataTarget = item.dataset.target;
    popupOverlays.forEach(function (elem) {
      const dataPopup = elem.dataset.popup;
      if (dataTarget === dataPopup) {
        elem.classList.remove('is-open');
      }
    });
  };

  buttons.forEach(function (button) {
    if (button instanceof NodeList) {
      button.forEach(function (btn) {
        btn.addEventListener('click', function () {
          openPopup(this);
        });
      });
    }
  });

  const resetDataForm = function (item) {
    let parent = null;
    if (item.classList.contains('popup-overlay')) {
      parent = item.querySelector('.popup');
    } else {
      parent = item.closest('div.popup');
    }
    const innerForm = parent.querySelector('form');
    const innerInputs = innerForm.querySelectorAll('input');
    innerInputs.forEach(function (input) {
      input.classList.remove('form-error');
    });
    innerForm.reset();
  };

  popupCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const form = btn.closest('div.popup').querySelector('form');
      if (form) {
        resetDataForm(this);
      }
      closePopup(this);
    });
  });

  popupOverlays.forEach(function (overlay) {
    overlay.addEventListener('click', function (event) {
      const form = overlay.querySelector('form');

      if (event.target.matches('.popup-overlay')) {
        if (form) {
          resetDataForm(this);
        };
        //resetDataForm(this);
        overlay.classList.remove('is-open');
      }
    });
  });
}