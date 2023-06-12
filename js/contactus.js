const stars = document.querySelectorAll('.star-rating i');
stars.forEach((star) => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        document.getElementById('rating').value = rating;
        stars.forEach((s) => {
            if (s.getAttribute('data-rating') <= rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});