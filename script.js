document.addEventListener('DOMContentLoaded', function() {
    let clickableDiv = document.querySelector('.arrow');
    let nextBlock = document.querySelector('.articles_container');

    clickableDiv.addEventListener('click', function() {
        // Scroll to the next block
        nextBlock.scrollIntoView({ behavior: 'smooth' });
    });
});


window.addEventListener('scroll', function() {
    let button = document.querySelector('.arrow');
    let scrollPosition = window.scrollY;

    // Update button position based on scroll position
    button.style.top = (scrollPosition + window.innerHeight - button.offsetHeight - 20) + 'px';
});
