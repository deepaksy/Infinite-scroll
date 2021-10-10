const container = document.querySelector('.container');
const URL = "https://avatars.dicebear.com/api/male/1.svg";
var count =0;

/*
 pt.1
    Get a batch of images and append to the container div.

*/
function getrandvalue(){
    var getvalue =  Math.floor(Math.random()*100);
    return `${getvalue}.svg`;

}



function loadImage(numImages=30){
    let i=0;
    while(i<numImages){
        const img = document.createElement('img');
        const countImage = document.createElement('p');
        countImage.innerHTML= ++count;
        img.src = `${URL}${getrandvalue()}`
        container.appendChild(img);
        container.appendChild(countImage);
        i++;
    }
}

loadImage();


/*
 pt.2

    Listen to a scroll event and load more images if we reach the bottom of the window;

*/


window.addEventListener('scroll',()=>{
    let offset=1;
    console.log((window.scrollY+window.innerHeight),document.documentElement.scrollHeight);
    if((window.scrollY+window.innerHeight+offset) >= document.documentElement.scrollHeight){
        loadImage();
    }
})
