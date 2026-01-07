const slides = document.querySelectorAll('.slide');
let current = 0;

document.body.addEventListener('click', () => {
    nextSlide();
    createHeart(event.clientX, event.clientY);
});

function nextSlide() {
    slides[current].classList.remove('active');
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add('active');
}

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '24px';
    heart.style.animation = 'float 2s ease forwards';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
}

document.getElementById('loveButton').addEventListener('click', (e) => {
    e.stopPropagation();
    const message = document.getElementById('loveMessage');
    message.style.display = 'flex';

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createHeart(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 100);
    }

    setTimeout(() => {
        message.style.display = 'none';
        current = 0;
        slides.forEach(s => s.classList.remove('active'));
        slides[0].classList.add('active');
    }, 4000);
});
