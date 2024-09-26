const rotators = document.querySelectorAll('.rotator');    // для условия: на странице несколько ротаторов одновременно

rotators.forEach(function (rotator) {
    const currentRotator = Array.from(rotator.querySelectorAll('.rotator__case'));
    let currentIndex = currentRotator.indexOf(rotator.querySelector('.rotator__case_active'));
    if (currentIndex === -1) {currentIndex = 0;}

    function changeCase() {
        currentRotator[currentIndex].setAttribute('class', 'rotator__case');
        currentIndex = (currentIndex + 1) % currentRotator.length; // счетчик закольцован
        currentRotator[currentIndex].setAttribute('class', 'rotator__case rotator__case_active');
        currentRotator[currentIndex].style.color = currentRotator[currentIndex].dataset.color;
    }

    setInterval(changeCase, parseInt(currentRotator[currentIndex].dataset.speed) || 1000); // таймер с переменной скоростью
});
