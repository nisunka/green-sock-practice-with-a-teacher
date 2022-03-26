// 1. Обработать курсор
// 2. Стартовая анимация
// 3. Анимация фона
// 4. Анимация текста
// 5. Анимация фона справа
// 6. Анимация шейп-оф
// 7. Файл глобал настроек
// 8. Результирующий файл с запуском скролла

// функция, которая вызывает все остальное
const init = () => {

  window.onload = function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-animation');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      // скрытие прелоадера
      preloader.classList.add('preloader-hidden');
    }, 3000);

    setTimeout(() => {
      startAnimation();
      preloader.classList.add('preloader-none');
    }, 3200);
  };

  // функция, которая перелистывает вперед, когда мы будем скроллить сайт вниз
  const showNextSlide = () => {
    bgSlides('down');
    imagesSlides('down');
    shapesSlides('down');
    textSlides('down');
  };

  const showPrevSlide = () => {
    bgSlides('up');
    imagesSlides('up');
    shapesSlides('up');
    textSlides('up');
  };

  // событие движения колесом мышки, на мобилке не нужно, там будет другое
  if (window.innerWidth >= 768) {
    window.addEventListener('wheel', (e) => {

      // определяем в какую сторону идет скролл, переменная дельта понадобится. нужно прописать обратное значение, так как скролл может рбаотать в обратную сторону
      let delta = -e.deltaY;

      // дельта > 0 скролл мышкой вверх
      if (delta > 0) {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          // говорим, что через 1,5 секунды ты хелперу дай 1, то есть верни обратно
          showPrevSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      } else {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showNextSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      }
    });
  } else {
        // тут мы на малых разрешениях свайпаем
    // берем спец событие из библиотеки свайп эвентс
    document.addEventListener('swiped-left', () => {
      showNextSlide();
     // свайп влево и вызывай следующее
    });

    document.addEventListener('swiped-right', () => {
      showPrevSlide();
    });
  }
};

init();
