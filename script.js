document.addEventListener('DOMContentLoaded', function() {
    let clickableDiv = document.querySelector('.arrow');
    let nextBlock = document.querySelector('.service_container');

    clickableDiv.addEventListener('click', function() {
        // Scroll to the next block
        nextBlock.scrollIntoView({ behavior: 'smooth' });
    });
});
