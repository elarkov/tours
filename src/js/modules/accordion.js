export function renderAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-list__item')

  accordionItems.forEach((accordionItem, key) => {
    const btn = accordionItem.querySelector('.accordion-list__button');
    btn.id = `accordion-btn-${key}`;
    btn.addEventListener('click', function(event) {
      const clickedAccordion = accordionItems[event.target.id.slice(-1)];
      if (clickedAccordion.classList.contains('isActive')) {
        clickedAccordion.classList.remove('isActive');
      } else {
        accordionItems.forEach(function(accordionItem) {
          accordionItem.classList.remove('isActive')
        });
        clickedAccordion.classList.add('isActive')
      }
    });
  });
}