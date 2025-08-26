const centerLogo = document.querySelector('.center-logo img');
const questionBox = document.getElementById('questionBox');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const finalMessage = document.getElementById('finalMessage');
const musicBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");
let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      bgMusic.pause();
      musicBtn.textContent = "🔇";
    } else {
        bgMusic.play();
        musicBtn.textContent = "🔊";
    }
    isPlaying = !isPlaying;
  });


centerLogo.addEventListener('click', () => {
    centerLogo.style.display = 'none';
    questionBox.style.display = 'block';
    questionBox.style.top = '50%';
    questionBox.style.left = '50%';
    questionBox.style.transform = 'translate(-50%, -50%)';
});

yesBtn.addEventListener('click', () => {
    questionBox.style.display = 'none';
    finalMessage.style.display = 'block';
    finalMessage.style.top = '50%';
    finalMessage.style.left = '50%';
    finalMessage.style.transform = 'translate(-50%, -50%)';
});

noBtn.addEventListener('click', () => {
    const maxX = window.innerWidth - questionBox.offsetWidth;
    const maxY = window.innerHeight - questionBox.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    questionBox.style.left = randomX + 'px';
    questionBox.style.top = randomY + 'px';
    questionBox.style.transform = 'translate(0, 0)';
});


particlesJS("particles-js", {
    particles: {
        number: { value: 15 },  
        size: { value: 30, random: true },
        shape: {
            type: "image",
            image: { src: "assets/batblack.png", width: 60, height: 40 }
        },
        move: {
            speed: 2,
            direction: "none",
            out_mode: "out",
            straight: false
        }
    },
    interactivity: {
        events: {
            onhover: { enable: false },
            onclick: { enable: false }
        }
    },
    retina_detect: true
}, function() {
    const allParticles = window.pJSDom[0].pJS.particles.array;
    allParticles.forEach(p => {
        const edge = Math.floor(Math.random() * 4);
        switch(edge){
            case 0: p.x = Math.random() * pJS.canvas.w; p.y = 0; break; 
            case 1: p.x = Math.random() * pJS.canvas.w; p.y = pJS.canvas.h; break; 
            case 2: p.x = 0; p.y = Math.random() * pJS.canvas.h; break;  
            case 3: p.x = pJS.canvas.w; p.y = Math.random() * pJS.canvas.h; break; 
        }
    });
});



