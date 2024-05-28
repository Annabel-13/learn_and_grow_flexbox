document.addEventListener('DOMContentLoaded', function() {
    let clickableDiv = document.querySelector('.arrow');
    let nextBlock = document.querySelector('.articles_container');

    clickableDiv.addEventListener('click', function() {
        // Scroll to the next block
        nextBlock.scrollIntoView({ behavior: 'smooth' });
    });
});
