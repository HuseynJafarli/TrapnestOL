// Elements
const centerLogo = document.querySelector('.center-logo img');
const questionBox = document.getElementById('questionBox');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const finalMessage = document.getElementById('finalMessage');
const musicBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");
const bdayBtn = document.getElementById("bday-toggle");
const countdownContainer = document.querySelector(".countdown-container");
const colorBtn = document.getElementById("color-toggle");

// Music toggle
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

// Birthday countdown toggle
let isCountdownVisible = false;
bdayBtn.addEventListener("click", () => {
    if (isCountdownVisible) {
        countdownContainer.style.display = "none";
        centerLogo.style.display = 'block';
        questionBox.style.display = 'none';
        finalMessage.style.display = 'none';
    } else {
        countdownContainer.style.display = "block";
        centerLogo.style.display = 'none';
        questionBox.style.display = 'none';
        finalMessage.style.display = 'none';
    }
    isCountdownVisible = !isCountdownVisible;
});

// Logo click shows question
centerLogo.addEventListener('click', () => {
    centerLogo.style.display = 'none';
    questionBox.style.display = 'block';
    questionBox.style.top = '50%';
    questionBox.style.left = '50%';
    questionBox.style.transform = 'translate(-50%, -50%)';
});

// Question buttons
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

// Countdown
const targetDate = new Date("2025-09-28 00:00:00").getTime();
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(countdown);
    countdownContainer.innerHTML = "<h2>🎉 Happy Birthday My Baddie! 🎉</h2>";
  }
}, 1000);

// Particles JS
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 15,
      "density": {
        "enable": false,
        "value_area": 639.7441023590567
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "./assets/batblack.png",
        "width": 63,
        "height": 42
      }
    },
    "opacity": {
      "value": 0.13594562175129954,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.2149388885739052,
        "opacity_min": 0.12149388885739051,
        "sync": false
      }
    },
    "size": {
      "value": 39.98400639744104,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 97.1951110859124,
        "size_min": 26.728655548625913,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.575769692123151,
      "width": 1.2794882047181133
    },
    "move": {
      "enable": true,
      "speed": 1.7,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
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

const themes = [
  { 
    bgGradient:"linear-gradient(-45deg, #000000, #1a0000, #330000, #000000)",
    primary:"#d63384", secondary:"#ff80ff", border:"#d63384", boxShadow:"rgba(214,51,132,0.5)", 
    questionBtn:"#8B0000", questionBorder:"#8B0000", finalText:"#ff0000", 
    particleColor:{r:255,g:0,b:0}, fogOpacity:0.3 
  },
  { 
    bgGradient:"linear-gradient(-45deg, #0a001a, #1a0033, #0a001a, #1a0000)",
    primary:"#a020f0", secondary:"#e0a0ff", border:"#a020f0", boxShadow:"rgba(160,32,240,0.5)", 
    questionBtn:"#4B0082", questionBorder:"#4B0082", finalText:"#d020f0", 
    particleColor:{r:160,g:32,b:240}, fogOpacity:0.3
  },
  { 
    bgGradient:"linear-gradient(-45deg, #001a00, #003300, #001a00, #000000)",
    primary:"#00ffff", secondary:"#80ffff", border:"#00ffff", boxShadow:"rgba(0,255,255,0.5)", 
    questionBtn:"#008b8b", questionBorder:"#008b8b", finalText:"#00ffff", 
    particleColor:{r:0,g:255,b:255}, fogOpacity:0.3
  }
];

let currentTheme = 0;   

colorBtn.addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themes.length;
    const theme = themes[currentTheme];


    document.body.style.background = theme.bgGradient;


    document.querySelector(".countdown-title").style.color = theme.primary;
    document.querySelectorAll(".time-box").forEach(box => {
        box.style.border = `2px solid ${theme.border}`;
        box.style.boxShadow = `0px 0px 15px ${theme.boxShadow}`;
    });
    document.querySelectorAll(".time-box span").forEach(span => { span.style.color = theme.secondary; });

    document.querySelectorAll("#questionBox button").forEach(btn => { btn.style.backgroundColor = theme.questionBtn; });
    document.getElementById("questionBox").style.border = `2px solid ${theme.questionBorder}`;

    finalMessage.style.color = theme.finalText;
    
});
