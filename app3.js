var image = document.getElementById('image'); 

var myRequest = new XMLHttpRequest();
var method = "GET";
var url = "http://www.europeana.eu/api/v2/search.json?wskey=e2SADEkVG&query=Maurits+Cornelis+Escher&qf=image+&start=1&rows=24&profile=standard";

var images = new Array (14);
var angle = 0;
var imageNumber = 0;
var angle = 0;


//This function is to rotate the image. When the angle reaches 360 degrees it goes back to 0
var turnImage = function() {
    angle+=90;
    image.style.transform = 'rotate('+angle+'deg)';
    console.log("click registered");
    if(angle === 360) {
        angle = 0;
    }
};

// button to check whether you have the right side up
var Guess = function () {
    if(angle === 0) {
        alert("Yes, this is the right way up!");
    }
    else {
        alert("Too bad... Keep trying!");
    }
};

// next function
var next = function(){
    imageNumber+=1;
    if (imageNumber === images.length){
        imageNumber=0;
    }
    turnImage();  
    image.src = images[imageNumber];
    console.log("click registered");
};

// previous function
var prev = function(){
    imageNumber-=1;
    if (imageNumber === -1){
        imageNumber = images.length-1;
    }
    turnImage();  
    image.src = images[imageNumber];
    console.log("click registered");
};

myRequest.open(method, url);
myRequest.send();

myRequest.onreadystatechange = function(){
    if (myRequest.readyState === 4) {
        var data = myRequest.response;
        var dataParsed = JSON.parse(data);
        console.log(dataParsed);
        var i;
        for (i = 0; i < dataParsed.items.length; i++) {
            images[i] = dataParsed.items[i].edmPreview[0];
        }
        
    } 
    else {
        console.log(myRequest.readyState);
    }
}






