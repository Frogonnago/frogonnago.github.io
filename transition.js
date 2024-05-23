document.addEventListener('DOMContentLoaded', function() {
    const circleContainers = document.querySelectorAll('.circle-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    circleContainers.forEach(container => {
        observer.observe(container);
    });
});