const toggle = document.querySelector('.toggle-navigation');

toggle.classList.remove('toggle-navigation--no-js');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('toggle-navigation--burger');
  toggle.classList.toggle('toggle-navigation--cross');
});

let mainNavigation = document.querySelector('.main-navigation ');
let toggleNavigation = document.querySelector('.toggle-navigation');

mainNavigation.classList.remove('main-navigation--no-js');

toggleNavigation.addEventListener('click', function () {
  if (mainNavigation.classList.contains('main-navigation--closed')) {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('main-navigation--opened');
  } else {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('main-navigation--opened');
  }
});
