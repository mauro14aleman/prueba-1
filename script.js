const slides = document.querySelectorAll('.slide');
const startBtn = document.getElementById('startMusic');
const musicScreen = document.getElementById('musicStart');
const ytPlayer = document.getElementById('ytPlayer');
const loveButton = document.getElementById('loveButton');
const loveMessage = document.getElementById('loveMessage');

let current = 0;
let musicStarted = false;

/* Iniciar música y ocultar pantalla */
startBtn.addEventListener('click', () => {
    ytPlayer.src += "&autoplay=1";
    musicStarted = true;

    musicScreen.style.opacity = "0";
    setTimeout(() => {
        musicScreen.style.display = "none";
    }, 600);
});

/* Cambiar diapositivas y corazones */
document.body.addEventListener('click', (event) => {

    if (!musicStarted) return;

    nextSlide();
    createHeart(event.clientX, event.clientY);
});

/* Cambio de slide */
function nextSlide() {
    slides[current].classList.remove('active');
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    slides[current].classList.add('active');
}

/* Corazones */
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

/* Botón final */
loveButton.addEventListener('click', (e) => {
    e.stopPropagation();
    loveMessage.style.display = 'flex';

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createHeart(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 100);
    }

    setTimeout(() => {
        loveMessage.style.display = 'none';
        current = 0;
        slides.forEach(s => s.classList.remove('active'));
        slides[0].classList.add('active');
    }, 4000);
});


