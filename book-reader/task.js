const book = document.getElementById('book');
const bookControls = document.querySelector('.book__controls');

bookControls.addEventListener('click', (event) => {
    event.preventDefault();

    const selectedPoint = event.target.closest('a');
    if (!selectedPoint) return;

    const parentControl = selectedPoint.closest('.book__control');
    if (!parentControl) return;

    switch (true) {
        case parentControl.classList.contains('book__control_font-size'):
            book.classList.remove('book_fs-small', 'book_fs-big');
            parentControl.querySelectorAll('.font-size').forEach((item) => {
                item.classList.remove('font-size_active')
            });

            selectedPoint.classList.add('font-size_active');
            const size = selectedPoint.dataset.size;
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
            break;

        case parentControl.classList.contains('book__control_color'):
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
            parentControl.querySelectorAll('.color').forEach((item) => {
                item.classList.remove('color_active')
            });

            selectedPoint.classList.add('color_active');
            const textColor = selectedPoint.dataset.textColor;
            if (textColor) {
                book.classList.add(`book_color-${textColor}`);
            }
            break;

        case parentControl.classList.contains('book__control_background'):
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
            parentControl.querySelectorAll('.color').forEach((item) => {
                item.classList.remove('color_active')
            });

            selectedPoint.classList.add('color_active');
            const bgColor = selectedPoint.dataset.bgColor;
            if (bgColor) {
                book.classList.add(`book_bg-${bgColor}`);
            }
            break;
    }
});
