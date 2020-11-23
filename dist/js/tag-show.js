let cards = document.querySelectorAll('.card');
let tagControll = document.querySelectorAll('.tag-show-controll');
let slider = document.querySelector('.swiper-container');

tagControll.forEach(el => {
    el.addEventListener('click', function() {
        tagControll.forEach(el => {
            el.classList.remove('active');
        });
        el.classList.add('active');
        let elData = el.dataset.tag;
        console.log(elData);
        cards.forEach(el => {
            el.classList.add('hide');
            el.classList.add('all')
            el.classList.remove('show');
            if (el.classList.contains(String(elData))) {
                el.classList.add('show');
            }
            if (String(elData) != 'all') {
                slider.style.display = "none";
            } else {
                slider.style.display = "block";
            }
        });
    });
})