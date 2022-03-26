const imagesSlides = (direction) => {
  let currentSlide = document.querySelector('.slide-bg__inner--current');
  let nextSlide;
  direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

  if (nextSlide) {
    imageSlides.forEach(el => { el.classList.remove('index'); });

    // даем класс текущему элементу индекс, чтобы стал на 1 меньше, чем был

    currentSlide.classList.add('index');

    const tl = gsap.timeline({
      defaults: { ease: easing },
      onComplete: function() {
        currentSlide.classList.remove('index');
      }
    });

    tl.from(nextSlide, 0.5, {
      xPercent: 100
    })
    .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
      xPercent: -100,
      delay: -0.5
    });

    currentSlide.classList.remove('slide-bg__inner--current');
    // задаем тут следующему элементу, чтобы стал на 1 больше. Текущий останется и на него накладывается следующий. Всегда при анимации виден предыдущий слайд
    nextSlide.classList.add('slide-bg__inner--current');
  }
};
