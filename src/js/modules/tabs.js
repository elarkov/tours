export function renderTabs(elRoot) {
  
  elRoot.forEach(function (el) {
    const modifiers = {
      buttonActive: 'tabs__button--active',
      contentActive: 'tabs__content--active'
    };
  
    const attributes = {
      tabIndex: 'data-tab-index'
    };
    const elsButton = el.querySelectorAll('.js-tabs__button');
    const elsContent = el.querySelectorAll('.js-tabs__content');
    const changeTab = index => {
      elsButton.forEach(el => {
        el.classList.remove(modifiers.buttonActive);
        if (el.getAttribute(attributes.tabIndex) === index) {
          el.classList.add(modifiers.buttonActive);
        }
      });

      elsContent.forEach(el => {
        el.classList.remove(modifiers.contentActive);
        if (el.getAttribute(attributes.tabIndex) === index) {
          el.classList.add(modifiers.contentActive);
        }
      });
    };

    elsButton.forEach(el => {
      el.addEventListener('click', e => {
        const tabIndex = el.getAttribute(attributes.tabIndex);
        e.preventDefault();
        changeTab(tabIndex);
      });
    });
  });


}