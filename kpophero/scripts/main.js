

const layers = document.querySelectorAll('.layer');

function handleMouseMove(e) {
    const x = e.clientX;
    const y = e.clientY;

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const xShift = (x - window.innerWidth / 2) * speed / 200;
        const yShift = (y - window.innerHeight / 2) * speed / 100;
        layer.style.transform = `translate(${xShift}px, ${yShift}px)`;
    });
}

window.addEventListener('mousemove', handleMouseMove);

if (window.innerWidth < 920) {
    window.removeEventListener('mousemove', handleMouseMove);
}


const menuItems = document.querySelectorAll('.beer-select__item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(item => {
            item.classList.remove('selected');
        });
        item.classList.add('selected');
    });
});


const ShowMoreMap = document.getElementById('show-more-map');
const ShowMoreMapBlock = document.querySelector('.map-modal__block');
const ShowMoreMapBlockClose = document.querySelector('.map-modal__block__close');

ShowMoreMap.addEventListener('click', function () {
    ShowMoreMapBlock.style.display = 'block';
});

ShowMoreMapBlockClose.addEventListener('click', function () {
    ShowMoreMapBlock.style.display = 'none';
});



const showMoreAboutBeerBlocks = document.querySelectorAll('.show-more-about-beer');
showMoreAboutBeerBlocks.forEach((el) => {
    el.addEventListener('click', () => {
        const showMoreTextBlock = el.parentNode;
        const bottleBlock = showMoreTextBlock.parentNode;
        if (showMoreTextBlock && bottleBlock) {
            showMoreTextBlock.classList.toggle('show');
        }
    });
});

const hamb = document.querySelector('#hamb');
const menu = document.querySelector('.header-items');
const headerItem = document.querySelectorAll('.header-item');
const siteShadow = document.querySelector('.site-shadow');

headerItem.forEach((el) => {
    el.addEventListener('click', () => {
        hamb.classList.toggle('active');
        menu.classList.toggle('open');
    });
});

hamb.addEventListener('click', function () {
    hamb.classList.toggle('active');
    menu.classList.toggle('open');
    window.scrollTo(0, 0);
    siteShadow.classList.toggle('active');
    document.body.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", function () {
    const bottlePicture = document.querySelectorAll(".bottle-picture img");
    var clickCount = 0;

    bottlePicture.forEach((picture) =>{
        picture.addEventListener("click", function () {
            picture.parentElement.classList.toggle("active");
        });
    })

    const albumsBlock = document.querySelector(".bottles-block")
    if(bottlePicture.length > 4){
        const showmore = document.querySelector(".showmore-button");
        showmore.style.display = "flex";
        showmore.addEventListener('click',()=>{
            albumsBlock.classList.toggle("open")
            if (clickCount % 2 === 0) {
                showmore.textContent = "Свернуть";
            } else {
                showmore.textContent = "Показать ещё";
            }
            clickCount++;
        })
    }
});