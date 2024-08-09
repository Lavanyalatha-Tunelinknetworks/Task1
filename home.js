// toggle
const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    // dots section
    const dots = document.querySelectorAll('.dot');
    const ctaText = document.querySelector('.line');
    
    const content = Array.from(document.querySelectorAll('.line')).map(line => line.innerHTML);
    
    let currentIndex = 0;
    
    function updateContent(index) {
        ctaText.classList.remove('active');
        setTimeout(() => {
            ctaText.innerHTML = content[index];
            ctaText.classList.add('active');
        }, 0); 
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            dots.forEach(dot => dot.classList.remove('active'));
            dot.classList.add('active');
            updateContent(index);
        });
    });
    
    updateContent(currentIndex);
    
    
