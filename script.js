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

// Particle JS init
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 15 },
    "color": { "value": "#ffffff" },
    "shape": { "type": "image", "image": { "src": "./assets/batblack.png", "width": 63, "height": 42 } },
    "opacity": { "value": 0.15 },
    "size": { "value": 40, "random": true },
    "line_linked": { "enable": false },
    "move": { "enable": true, "speed": 1.7, "direction": "bottom", "random": true, "straight": false, "out_mode": "out" }
  },
  "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } },
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



const countdownTitle = document.querySelector(".countdown-title");

const themes = [
  { 
    bgGradient:"linear-gradient(-45deg, #000000, #1a0000, #330000, #000000)",
    primary:"#ff0000", secondary:"#ff8080", border:"#ff0000", boxShadow:"rgba(255,0,0,0.5)", 
    questionBtn:"#8B0000", questionBorder:"#8B0000", finalText:"#ff0000", 
    particleColor:{r:255,g:0,b:0}, fogOpacity:0.3, heart:"❤️"
  },
  { 
    bgGradient:"linear-gradient(-45deg, #331a00, #663300, #331a00, #000000)",
    primary:"#ff8c00", secondary:"#ffc080", border:"#ff8c00", boxShadow:"rgba(255,140,0,0.5)", 
    questionBtn:"#b35900", questionBorder:"#b35900", finalText:"#ff8c00", 
    particleColor:{r:255,g:140,b:0}, fogOpacity:0.3, heart:"🧡"
  },
  { 
    bgGradient:"linear-gradient(-45deg, #001a00, #003300, #001a00, #000000)",
    primary:"#00ff00", secondary:"#80ff80", border:"#00ff00", boxShadow:"rgba(0,255,0,0.5)", 
    questionBtn:"#008000", questionBorder:"#008000", finalText:"#00ff00", 
    particleColor:{r:0,g:255,b:0}, fogOpacity:0.3, heart:"💚"
  },
  { 
    bgGradient:"linear-gradient(-45deg, #00001a, #000033, #00001a, #000000)",
    primary:"#00bfff", secondary:"#80d4ff", border:"#00bfff", boxShadow:"rgba(0,191,255,0.5)", 
    questionBtn:"#005f8b", questionBorder:"#005f8b", finalText:"#00bfff", 
    particleColor:{r:0,g:191,b:255}, fogOpacity:0.3, heart:"💙"
  },
  { 
    bgGradient:"linear-gradient(-45deg, #1a001a, #330033, #1a001a, #000000)",
    primary:"#800080", secondary:"#d291ff", border:"#800080", boxShadow:"rgba(128,0,128,0.5)", 
    questionBtn:"#4B0082", questionBorder:"#4B0082", finalText:"#800080", 
    particleColor:{r:128,g:0,b:128}, fogOpacity:0.3, heart:"💜"
  },
  { 
    bgGradient:"linear-gradient(-45deg, #4d2b1a, #8b5a33, #4d2b1a, #2a140d)",
    primary:"#a52a2a", secondary:"#d99191", border:"#a52a2a", boxShadow:"rgba(165,42,42,0.5)", 
    questionBtn:"#6e1d1d", questionBorder:"#6e1d1d", finalText:"#a52a2a", 
    particleColor:{r:165,g:42,b:42}, fogOpacity:0.3, heart:"🤎"
  },
  { 
    bgGradient:"linear-gradient(-45deg, #ff99cc, #ffb3d9, #ff99cc, #ff80c0)",
    primary:"#ff69b4", secondary:"#ffb3d9", border:"#ff69b4", boxShadow:"rgba(255,105,180,0.5)", 
    questionBtn:"#ff4d94", questionBorder:"#ff4d94", finalText:"#ff1493", 
    particleColor:{r:255,g:20,b:147}, fogOpacity:0.3, heart:"💖"
  }
];

let currentTheme = 0;

colorBtn.addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themes.length;
    const theme = themes[currentTheme];

    // Background gradient
    document.body.style.background = theme.bgGradient;
    document.body.style.backgroundSize = "400% 400%";
    document.body.style.animation = "gradientShift 5s ease infinite";

    // Countdown title with heart emoji
    countdownTitle.style.color = theme.primary;
    countdownTitle.innerHTML = `Time Left Until My Baddie’s Birthday ${theme.heart}`;

    // Countdown boxes
    document.querySelectorAll(".time-box").forEach(box => {
        box.style.border = `2px solid ${theme.border}`;
        box.style.boxShadow = `0px 0px 15px ${theme.boxShadow}`;
    });
    document.querySelectorAll(".time-box span").forEach(span => { span.style.color = theme.secondary; });

    // Question box
    document.querySelectorAll("#questionBox button").forEach(btn => { btn.style.backgroundColor = theme.questionBtn; });
    document.getElementById("questionBox").style.border = `2px solid ${theme.questionBorder}`;

    // Final message styling with theme and heart
    finalMessage.style.color = theme.finalText;
    finalMessage.innerHTML = `Eternally bound in darkness with you ${theme.heart}`;
    finalMessage.style.setProperty('--pulse-color', theme.finalText);

    // Fog opacity
    document.querySelector(".fog").style.opacity = theme.fogOpacity;

    // Particle color update
    const particlesInstance = window.pJSDom[0].pJS;
    particlesInstance.particles.array.forEach(p => {
        p.color.r = theme.particleColor.r;
        p.color.g = theme.particleColor.g;
        p.color.b = theme.particleColor.b;
    });
    particlesInstance.fn.particlesDraw();
});
