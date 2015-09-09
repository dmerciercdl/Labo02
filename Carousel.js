/**
 * Created by dmercier on 2015-09-09.
 */

var intervalID
var imgArray = ["http://placekitten.com/350/300", "http://placekitten.com/325/300"]
var imgIndex = 0;

function load() {
    intervalID = window.setInterval(animate, 3000);
}

function animate() {
    imgIndex++;
    if(imgIndex >= imgArray.length) {
        imgIndex = 0;
    }

    console.log("index is " + imgIndex);

    changeImage(imgArray[imgIndex]);
}

function changeImage(a) {
    document.getElementById("image").src = a;
}

