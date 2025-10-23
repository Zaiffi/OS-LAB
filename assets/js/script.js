// fade up animation

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // ek baar hi animate karwana hai to ye use karo:
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});




// fade left right animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-left, .fade-right");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
});



// fade in one by one card animation
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".fade-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 300); // delay har card ke liye (300ms gap)
                }
            });
        },
        { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
});


