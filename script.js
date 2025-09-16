document.addEventListener('DOMContentLoaded', () => {

    // --- SCROLL & LOAD ANIMATIONS ---
    const scrollElements = document.querySelectorAll('[data-scroll]');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    // Initial animation on page load for all elements currently in view
    // This will animate the hero section and possibly the top of the about section
    // if the screen is large enough.
    handleScrollAnimation();

    // Set up the scroll listener to trigger animations for new elements as they come into view
    window.addEventListener('scroll', handleScrollAnimation);


    // --- SMOOTH SCROLL FOR LINKS ---
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    }

    const knowMoreBtn = document.querySelector('.hero-content .btn');
    if (knowMoreBtn) {
        knowMoreBtn.addEventListener('click', (event) => {
            event.preventDefault();
            scrollToSection('about');
        });
    }

    const backToTopBtn = document.querySelector('.footer .back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});