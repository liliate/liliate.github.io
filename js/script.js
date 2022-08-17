const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 400,
  transition: 600,
  interval: 3000,
});
