const counters = document.querySelectorAll('.stat-num');

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const update = () => {
        const increment = target / 60;

        count += increment;

        if (count < target) {
            counter.childNodes[0].nodeValue = Math.floor(count);
            requestAnimationFrame(update);
        } else {
            counter.childNodes[0].nodeValue = target;
        }
    };

    update();
});