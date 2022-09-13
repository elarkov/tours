export function stickyBlock() {
  const elRoot = document.querySelector('.js-sticky');
  const elItem = elRoot.querySelector('.js-sticky__item');
  const margin = 20;
  let startPosition = null;
  const modifiers = {
    fixed: 'sidebar-fixed'
  };

  window.addEventListener('scroll', () => {
    const rect = elItem.getBoundingClientRect();

    if (startPosition === null && rect.top <= margin) {
      elItem.style.width = `${elItem.clientWidth}px`;
      elItem.classList.add(modifiers.fixed);
      startPosition = window.pageYOffset;
      return;
    }

    if (startPosition !== null && startPosition >= window.pageYOffset) {
      elItem.style.width = '';
      elItem.classList.remove(modifiers.fixed);
      startPosition = null;
    }
  });
}