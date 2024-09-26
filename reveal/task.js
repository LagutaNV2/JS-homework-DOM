function isVisible(element) {
    const coords = element.getBoundingClientRect();
    return (
      coords.top < window.innerHeight
      // coords.top > 0
      &&
      coords.bottom > 0
      // coords.bottom > window.innerHeight
    );
  }

window.addEventListener('scroll', function () {
    const rElements = document.querySelectorAll('.reveal');

    rElements.forEach((element) => {

      if (isVisible(element)) {
        element.classList.add('reveal_active');
      } else {
        element.classList.remove('reveal_active');
      }
    });
});
