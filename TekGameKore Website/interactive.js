// Particle background effect for TekGameKore
// Adds floating particles, image hover effects, floating TekGeek image, and superhero fun facts

document.addEventListener('DOMContentLoaded', function() {
    // 1. Particle background
    const particleCanvas = document.createElement('canvas');
    particleCanvas.id = 'particle-canvas';
    particleCanvas.style.position = 'fixed';
    particleCanvas.style.top = 0;
    particleCanvas.style.left = 0;
    particleCanvas.style.width = '100vw';
    particleCanvas.style.height = '100vh';
    particleCanvas.style.zIndex = 0;
    particleCanvas.style.pointerEvents = 'none';
    document.body.prepend(particleCanvas);
    const ctx = particleCanvas.getContext('2d');
    let particles = [];
    function resizeCanvas() {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function createParticles() {
        particles = [];
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * particleCanvas.width,
                y: Math.random() * particleCanvas.height,
                r: Math.random() * 2 + 1,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
                color: `rgba(${100+Math.random()*155},${150+Math.random()*105},255,0.5)`
            });
        }
    }
    createParticles();
    function animateParticles() {
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > particleCanvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > particleCanvas.height) p.dy *= -1;
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // 2. Floating TekGeek image
    const tekGeekImg = document.getElementById('targetImage');
    if (tekGeekImg) {
        tekGeekImg.style.position = 'relative';
        tekGeekImg.style.zIndex = 2;
        let floatDir = 1;
        let floatY = 0;
        setInterval(() => {
            floatY += floatDir * 0.5;
            if (floatY > 10 || floatY < -10) floatDir *= -1;
            tekGeekImg.style.transform = `translateY(${floatY}px)`;
        }, 30);
    }

    // 4. Moving banner text
    const banner = document.createElement('div');
    banner.innerText = 'Welcome To TekGameKore // Level Up Your Imagination';
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100vw';
    banner.style.background = 'linear-gradient(90deg, #0ff, #00f, #f0f)';
    banner.style.color = '#fff';
    banner.style.fontWeight = 'bold';
    banner.style.fontSize = '1.3em';
    banner.style.padding = '8px 0';
    banner.style.zIndex = 10;
    banner.style.textAlign = 'center';
    banner.style.letterSpacing = '2px';
    banner.style.boxShadow = '0 2px 10px #0006';
    document.body.appendChild(banner);
    let bannerX = 0;
    setInterval(() => {
        bannerX += 1;
        banner.style.backgroundPosition = `${bannerX}px 0`;
    }, 40);
});