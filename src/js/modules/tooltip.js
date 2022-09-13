export function tooltip() {
  const tooltipRoot = document.querySelector('#card-info');
  if (tooltipRoot) {
    const tooltipEl = tooltipRoot.querySelector('.card-tooltip');
    tooltipRoot.addEventListener('click', function () {
      tooltipEl.classList.toggle('card-tooltip--active')
    });
  }
}