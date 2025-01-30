window.onload = function() {
    let petals = document.querySelectorAll('.petal');
    let center = document.querySelector('.center');

    setTimeout(() => {
        petals.forEach(petal => {
            petal.style.opacity = "1";
            petal.style.transform = "scale(3)";
        });
        center.style.opacity = "5";
    }, 1000);
};
