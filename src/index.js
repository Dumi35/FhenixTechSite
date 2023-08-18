const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const left = entry.target.querySelector('.left');
        const right = entry.target.querySelector('.right');

        if (entry.isIntersecting) {
        left.classList.add('animate__fadeInLeft');
        /* right.classList.add('animate__fadeInRight'); */
        return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        left.classList.remove('animate__fadeInLeft');
        /* right.classList.remove('animate__fadeInRight'); */
    });
});

observer.observe(document.querySelector('#hero-section'));

