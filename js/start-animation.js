const startAnimation = () => {
  console.log('start');

  const currentSlide = document.querySelector('.slide-bg__inner--current');
  const currentShape = document.querySelector('.shapes__item--current');
  const currentText = document.querySelector('.slides-container__slide--active');

  startingTl.to('.header', .5,{
    opacity: 1,
    y: 0,
    delay: .5
  })
  .to('.main-section__explore', .5,{
    opacity: 1,
    y: 0,
  }, '-=.5')     //.5 чтобы 2 действия выполнились одновременно
  .to(currentText.querySelector('.slides-container__title'), .6,{
    opacity: 1,
    y: 0,
  }, '-=.1')
  .to(currentText.querySelector('.designers-info'), .6,{
    opacity: 1,
    y: 0,
  }, '-=.5')
  .from(currentSlide, .4,{
    xPercent: 100
  }, '-=.4')
  .from(currentSlide.querySelector('.slide-bg__link'), .4,{
    xPercent: -100
  }, '-=.4')
  .from(currentShape, .6,{
    xPercent: 100
  }, '-=.2')
  .from(currentSlide.querySelector('.shapes__content'), .6,{
    xPercent: -100,
    delay: -.6
  }, '-=.2')
};
