const testSlider = function(){
    const testContent = document.querySelector('.testmonials-content');
    const SlideButtons = document.querySelectorAll('.test-arrow');

    SlideButtons.forEach(button =>{
        button.addEventListener('click', function(){
            const direction = button.id === 'prev-button'? -1 : 1;
            const scrollAmount = testContent.clientWidth * direction;
            testContent.scrollBy({
                left: scrollAmount, behavior: 'smooth'
            });
        })
    })
}

window.addEventListener('load', testSlider);
