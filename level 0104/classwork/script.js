let prevBtn = document.querySelector(".prevBtn")
let nextBtn = document.querySelector(".nextBtn")


let images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7PlBVQHCzc2bjx7FRnDQbBaDKXskP0oh3g&s',

    'https://www.musocity.com.au/cdn/shop/products/Casino-ST-Style-Short-Scale-Electric-Guitar-Set-Transparent-Wine-Red-2_grande.jpg?v=1740423387',

    'https://vintageguitarsrus.com/cdn/shop/products/VS6_1_9675060d-d1b5-4960-b2b7-dce7b1ff2210_1024x1024.jpg?v=1643977782'
];
     




let num = 0;

function next(){
    let slider = document.querySelector('.slider');
    num++;
    if(num >= images.length) {
        num = 0
    };
    slider.src = images[num]

}


function prev() {
    let slider = document.querySelector('.slider')
    num--;
    if(num < 0) {
        num = images.length - 1;
    };
    slider.src = images[num]

}


prevBtn.addEventListener('click', prev)
nextBtn.addEventListener('click', next)


