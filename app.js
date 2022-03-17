let img = [document.querySelectorAll('.img')]
let gallery = document.querySelector('.gallery')
let galleryWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

images.forEach((img, idx) => {
    img.style.backgroundImage = 'url(./img/${idx+1}.jpg)'
}