let images = [
    {
        url: 'https://www.islandcustom.co.nz/wp-content/uploads/2019/12/nynne-schroder-Yk910PgiT8c-unsplash.jpg'
    },
    {
        url: 'https://images.unsplash.com/photo-1527625821224-b8063094d889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e1734849e1bf0ccdfc99291126aa4b3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
    },
    {
        url: 'https://images.unsplash.com/photo-1527625821224-b8063094d889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e1734849e1bf0ccdfc99291126aa4b3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
    },
    {
        url: 'https://images.unsplash.com/photo-1527625821224-b8063094d889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e1734849e1bf0ccdfc99291126aa4b3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
    },
    {
        url: 'https://images.unsplash.com/photo-1527625821224-b8063094d889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e1734849e1bf0ccdfc99291126aa4b3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
    },
    {
        url: 'https://images.unsplash.com/photo-1527625821224-b8063094d889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8e1734849e1bf0ccdfc99291126aa4b3&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
    }
];
// const images=document.getElementsByClassName("images")
const mainView = document.getElementById('main-view');

const thumbnails = document.getElementById('thumbnails');

for(let i= 0; i< images.length; i++) {
    let image = images[i];
    let img = document.createElement('img');
    img.src = images[i].url;
    img.setAttribute('width', 170);
    img.setAttribute('data-index', i);
    img.addEventListener('click', changeImage);
    thumbnails.appendChild(img);
}

function initGallery() {
    loadImage(0);
};

function slideImage() {
    let currentIndex = parseInt(mainView.getAttribute('data-index'));
    currentIndex = currentIndex + 1 == images.length ? 1 : currentIndex + 1;
    loadImage(currentIndex);
    setTimeout(slideImage, 3000);

}

function changeImage(event) {
    let target = event.currentTarget;
    let index = target.getAttribute('data-index');
    loadImage(index);
}

function loadImage(index) {
    let image = images[index];
    mainView.src = image.url;
    mainView.setAttribute('data-index', index);
    mainView.setAttribute('id', 'image-' + index);
    mainView.style.opacity = 1;
}

function fullScreenImage() {
    toggleFullscreen(mainView);
}

function toggleFullscreen(el) {
    if(document.fullscreenElement || document.mozFullScreenElement 
        || document.webkitFullscreenElement || document.msFullscreenElement) {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        else {
            if(document.documentElement.requestFullscreen) {
                el.requestFullscreen();
            }
        }
}

initGallery();
setTimeout(slideImage, 3000);

