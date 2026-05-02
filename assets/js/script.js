document.addEventListener("DOMContentLoaded", function () {

    // 1. Sticky Navbar & Back to Top Button
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    const topHeaderElements = document.querySelector('.top-header');
    let topHeaderHeight = topHeaderElements ? topHeaderElements.offsetHeight : 0;

    window.addEventListener('scroll', function () {
        if (window.scrollY > topHeaderHeight) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        // Back to top
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // 2. Back to Top Click Action
    if (backToTop) {
        backToTop.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Smooth Scrolling for Anchor Links inside nav
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 4. Voucher Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    if (filterBtns.length > 0 && filterItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active from all
                filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
                filterBtns.forEach(b => b.classList.add('btn-outline-primary'));

                // Add active to clicked
                btn.classList.add('active', 'btn-primary');
                btn.classList.remove('btn-outline-primary');

                const filterValue = btn.getAttribute('data-filter');

                filterItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // simple animation
                        item.style.animation = 'scaleUp 0.3s ease-in-out';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

});

// Add keyframes for filtering animation dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes scaleUp {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
`;
document.head.appendChild(style);





$('#itTraningCourses').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: false,
    // autoplaySpeed: 12000,
    // smartSpeed: 12000,
    // slideTransition: 'linear',
    autoplayHoverPause: true,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
    ],
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 }
    }
});


$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    }
});

$('.brands-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    // autoplayTimeout: 1, 
    autoplaySpeed: 10000,
    smartSpeed: 10000,
    slideTransition: 'linear',
    autoplayHoverPause: false,
    responsive: {
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        992: { items: 5 },
        1200: { items: 6 }
    }
});

$('.placement-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1000: { items: 3 }
    }
});

// $('.brands-carousel-two').owlCarousel({
//     loop: true,
//     margin: 30,
//     nav: false,
//     dots: false,
//     rtl: true,
//     autoplay: false,
//     // autoplayTimeout: 1, 
//     autoplaySpeed: 5000,
//     smartSpeed: 5000,
//     slideTransition: 'linear',
//     autoplayHoverPause: false,
//     responsive: {
//         0: { items: 2 },
//         576: { items: 3 },
//         768: { items: 4 },
//         992: { items: 5 },
//         1200: { items: 6 }
//     }
// });
