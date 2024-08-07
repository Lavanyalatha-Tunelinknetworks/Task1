document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => {
        const type = document.getElementById('type').value;
        const keywords = document.getElementById('keywords').value;
        const category = document.getElementById('category').value;
        const city = document.getElementById('city').value;
        console.log(`Search Parameters: Type: ${type}, Keywords: ${keywords}, Category: ${category}, City: ${city}`);
    });
    const exploreLinks = document.querySelectorAll('.explore-link');
    for (let i = 0; i < exploreLinks.length; i++) {
        const link = exploreLinks[i];
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const categoryName = link.closest('.category-card').querySelector('h3').innerText;
            console.log(`Explore Category: ${categoryName}`);
        });
    }
    const exploreAllButton = document.querySelector('.explore-all-button');
    exploreAllButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Explore all categories');
    });
});

// dot section
const dots = document.querySelectorAll('.dot');
const ctaText = document.querySelector('.cta-text');

const content = [
    'Experts in luxury properties, we are devoted to serving the needs of real estate buyers and sellers throughout Los Angeles. Get access to the most exclusive listings with us.',
    'We offer personalized service and have a deep understanding of the Los Angeles real estate market.',
    'Our team is committed to providing top-notch customer service and ensuring a seamless buying or selling experience.',
    'With years of experience, we have the expertise to help you find your dream home or sell your property quickly and efficiently.'
];

let currentIndex = 0;

function updateContent(index) {
    ctaText.classList.remove('active');
    setTimeout(() => {
        ctaText.textContent = content[index];
        ctaText.classList.add('active');
    }, 300);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(dot => dot.classList.remove('active'));
        dot.classList.add('active');
        updateContent(index);
    });
});

// the first content
updateContent(currentIndex);
// touch swipe 
let startX = 0;
let endX = 0;

document.querySelector('.cta-content').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector('.cta-content').addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

document.querySelector('.cta-content').addEventListener('touchend', () => {
    if (startX - endX > 50) {
        // Swipe left
        currentIndex = (currentIndex + 1) % content.length;
    } else if (endX - startX > 50) {
        // Swipe right
        currentIndex = (currentIndex - 1 + content.length) % content.length;
    }
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    updateContent(currentIndex);
});
