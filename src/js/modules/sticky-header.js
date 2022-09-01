export function stickyHeader() {
  window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let navToggle = header.querySelector('.nav-toggle');
    let headerHeight = window.getComputedStyle(header, null).height.slice(0, 2);
    header.classList.toggle('sticky', window.scrollY > Number(headerHeight));
    navToggle.classList.toggle('sticky', window.scrollY > Number(headerHeight));
  });
}