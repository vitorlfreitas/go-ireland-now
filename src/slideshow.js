const i = 0; // Start point
let images = [];
let time = 3000;

// Image List 
 images[0] = 'cliffs.png';
 images[1] = 'Giants-Causeway.jpg';
 images[2] = 'ring-of-kerry.jpg';
 images[3] = 'blarney-castle.jpg';
 images[4] = 'dublin-castle.jpg';

// Change Image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;
