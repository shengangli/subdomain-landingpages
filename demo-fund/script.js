document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const loadingScreen = document.querySelector('.loading-screen');

    setTimeout(() => {
        loadingScreen.classList.add('loaded');
    }, 2000);

    let scene, camera, renderer;
    let flowingLines = [];
    let mouseX = 0, mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function initThree() {
        const canvas = document.getElementById('hero-canvas');

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 100;

        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        createFlowingLines();
        createDataStreams();
    }

    function createFlowingLines() {
        const colors = [0x0a5f3c, 0x0fa968, 0x00ff88];

        for (let i = 0; i < 12; i++) {
            const curve = new THREE.CatmullRomCurve3([
                new THREE.Vector3(-80 + Math.random() * 160, -40 + Math.random() * 80, -20 + Math.random() * 40),
                new THREE.Vector3(-40 + Math.random() * 80, -20 + Math.random() * 40, -10 + Math.random() * 20),
                new THREE.Vector3(-20 + Math.random() * 40, 0 + Math.random() * 20, 0),
                new THREE.Vector3(20 + Math.random() * 40, 20 + Math.random() * 20, 10 + Math.random() * 20),
                new THREE.Vector3(40 + Math.random() * 80, 40 + Math.random() * 40, 20 + Math.random() * 40)
            ]);

            const points = curve.getPoints(200);
            const geometry = new THREE.BufferGeometry().setFromPoints(points);

            const material = new THREE.LineBasicMaterial({
                color: colors[i % colors.length],
                transparent: true,
                opacity: 0.3,
                linewidth: 2
            });

            const line = new THREE.Line(geometry, material);
            line.userData = {
                originalOpacity: 0.3,
                speed: 0.001 + Math.random() * 0.002,
                phase: Math.random() * Math.PI * 2
            };

            flowingLines.push(line);
            scene.add(line);
        }
    }

    function createDataStreams() {
        const particleCount = 300;
        const particles = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            particles[i3] = (Math.random() - 0.5) * 200;
            particles[i3 + 1] = (Math.random() - 0.5) * 100;
            particles[i3 + 2] = (Math.random() - 0.5) * 100;

            const colorIndex = Math.floor(Math.random() * 3);
            if (colorIndex === 0) {
                colors[i3] = 0.04;
                colors[i3 + 1] = 0.37;
                colors[i3 + 2] = 0.24;
            } else if (colorIndex === 1) {
                colors[i3] = 0.06;
                colors[i3 + 1] = 0.66;
                colors[i3 + 2] = 0.41;
            } else {
                colors[i3] = 0;
                colors[i3 + 1] = 1;
                colors[i3 + 2] = 0.53;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 1,
            transparent: true,
            opacity: 0.6,
            vertexColors: true,
            blending: THREE.AdditiveBlending
        });

        const points = new THREE.Points(geometry, material);
        points.userData = { particles: particles };
        flowingLines.push(points);
        scene.add(points);
    }

    function animate() {
        requestAnimationFrame(animate);

        const time = Date.now() * 0.001;

        flowingLines.forEach((line, index) => {
            if (line.geometry.attributes.position) {
                if (line.type === 'Points') {
                    const positions = line.userData.particles;
                    for (let i = 0; i < positions.length; i += 3) {
                        positions[i] += Math.sin(time + i * 0.1) * 0.1;
                        positions[i + 1] += Math.cos(time + i * 0.1) * 0.05;
                        positions[i + 2] += Math.sin(time * 0.5 + i * 0.05) * 0.02;

                        if (positions[i] > 100) positions[i] = -100;
                        if (positions[i] < -100) positions[i] = 100;
                        if (positions[i + 1] > 50) positions[i + 1] = -50;
                        if (positions[i + 1] < -50) positions[i + 1] = 50;
                    }
                    line.geometry.attributes.position.needsUpdate = true;
                } else {
                    line.rotation.x += line.userData.speed * Math.sin(time + line.userData.phase);
                    line.rotation.y += line.userData.speed * Math.cos(time + line.userData.phase);

                    const wave = Math.sin(time + index) * 0.2;
                    line.material.opacity = line.userData.originalOpacity + wave * 0.1;
                }
            }
        });

        const targetX = mouseX * 0.0005;
        const targetY = mouseY * 0.0005;

        camera.position.x += (targetX - camera.position.x) * 0.02;
        camera.position.y += (targetY - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
    }

    function onMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    if (typeof THREE !== 'undefined') {
        initThree();
        animate();
        document.addEventListener('mousemove', onMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    function animateCounter(element) {
        const target = parseFloat(element.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                if (target < 1) {
                    element.textContent = current.toFixed(2);
                } else {
                    element.textContent = Math.floor(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (target < 1) {
                    element.textContent = target.toFixed(2);
                } else {
                    element.textContent = target;
                }
            }
        };

        updateCounter();
    }

    document.querySelectorAll('.counter').forEach(counter => {
        observer.observe(counter);
    });

    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            document.querySelector('#strategy').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            window.location.href = 'mailto:info@meridiancapital.com';
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.fromTo(title,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        gsap.utils.toArray('.about-card').forEach((card, index) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        gsap.utils.toArray('.stat-box').forEach((box, index) => {
            gsap.fromTo(box,
                {
                    opacity: 0,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});