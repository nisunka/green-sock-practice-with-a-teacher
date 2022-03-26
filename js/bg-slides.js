shapes.forEach(el => { el.style.backgroundColor = `${el.dataset.bg}` });
bgItems.forEach(el => { el.style.backgroundImage = `url('${el.dataset.bg}')` });


// определяем, скроллим вверх или вниз и вызываем либо вверх либо вниз
const bgSlides = (direction) => {
  let itemClass = `slide-${slideCounter}`;
  if(direction === 'down') {
    if(slideCounter < slidesCount) {
      mainSection.classList.remove(itemClass);
      // увеличение на 1, то есть след слайт
      slideCounter++;

      itemClass = `slide-${slideCounter}`; // теперь тут уже находится слайд 2, 3 и тд
      mainSection.classList.add(itemClass);
    }
  } else if(direction == 'up') {
    if(slideCounter > 1) {
      mainSection.classList.remove(itemClass);
      // увеличение на 1, то есть след слайт
      slideCounter--;

      itemClass = `slide-${slideCounter}`; // теперь тут уже находится слайд 2, 3 и тд
      mainSection.classList.add(itemClass);
    }
  }
};
