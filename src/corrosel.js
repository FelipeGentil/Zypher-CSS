

    const items = document.querySelectorAll('.corrossel-item');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let current = 0;
    let interval;

    function updateCarrossel(index) {
        items.forEach((item, i) => {
            item.classList.toggle ('active', i === index);
    })
}

function nestSlide() {
    current = (current + 1) % items.length;
    updateCarrossel(current);
}

function prevSlide() {
    current = (current - 1 + items.length) % items.length;
    updateCarrossel(current);
}

nextBtn.addEventListener('click',() =>{
    nestSlide();
    resetAutoplay();
});

prevBtn.addEventListener('click', () =>{
    prevSlide();
    resetAutoplay();
});

function startAutopaly() {
    interval = setInterval(nestSlide, 3000);
}

function resetAutoplay() {
    clearInterval(interval);
    startAutoplay();
}

startAutopaly();