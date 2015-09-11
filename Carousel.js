/**
 * Created by dmercier on 2015-09-09.
 */


var IMAGE_NUMBER = 4;   // Specify the number of images to display
var intervalID;         // This is the timer that makes the images to change
var imgIndex = 0;       // This is the currently displayed image index. Range from 0 to IMAGE_NUMBER-1

// Is called on page load and performs all the initialization.
function load() {
    // This assignation loop doesn't work and I don't know why for now... to investigate
    /*
    for(var i = 0; i < IMAGE_NUMBER; i++) {
        var id = "bullet" + i;
        console.log("adding onclick for item " + id);
        //document.getElementById(id).addEventListener("click", onBulletClick(i));
        document.getElementById(id).onclick = function() { onBulletClick(i); }
    }
    */

    document.getElementById("bullet0").onclick = function() { onBulletClick(0); };
    document.getElementById("bullet1").onclick = function() { onBulletClick(1); };
    document.getElementById("bullet2").onclick = function() { onBulletClick(2); };
    document.getElementById("bullet3").onclick = function() { onBulletClick(3); };
    document.getElementById("previousButton").onclick = function() { onPreviousClick(); };
    document.getElementById("nextButton").onclick = function() { onNextClick(); };

    startTimer();
}

// Start the timer
function startTimer() {
    intervalID = window.setInterval(animate, 3000);
}

// Stop the timer
function stopTimer() {
    window.clearInterval(intervalID);
}

// Increment the index of the image to display.
// It does manage the wrap around
function incrementIndex() {
    imgIndex++;
    if(imgIndex >= IMAGE_NUMBER) {
        imgIndex = 0;
    }
    console.log("index is " + imgIndex);
}

// Decrement the index of the image to display.
// It does manage the wrap around
function decrementIndex() {
    imgIndex--;
    if(imgIndex < 0) {
        imgIndex = IMAGE_NUMBER-1;
    }
    console.log("index is " + imgIndex);
}

// Set the index of the image to display
// if the index is out of bound, it does nothing
function setIndex(newIndex) {
    if(newIndex < IMAGE_NUMBER && newIndex >= 0) {
        imgIndex = newIndex;
    }
    else {
        console.log("Can't set index... out of bound.");
    }
}

// Callback function called by the timer
function animate() {
    incrementIndex();
    repaint();
}

// Performs all the paint job on the page
function repaint() {
    for(var i = 0; i < IMAGE_NUMBER; i++) {
        var idImage = "image" + i;
        var idBullet = "bullet" + i;
        /*console.log("ID is " + idImage + " and setting opacity to 0");*/
        document.getElementById(idImage).style.opacity = 0;
        document.getElementById(idBullet).src = "bulletgrey.png";

        if(i == imgIndex) {
            document.getElementById(idImage).style.opacity = 100;
            document.getElementById(idBullet).src = "bulletblack.png";
        }
    }
}

// Callback function called on a bullet click
// the param is the index of the image to display
function onBulletClick(imageIndex) {
    stopTimer();
    setIndex(imageIndex);
    repaint();
    startTimer();
}

// Callback function called on the right arrow click
function onNextClick() {
    stopTimer();
    incrementIndex();
    repaint();
    startTimer();
}

// Callback function called on the left arrow click
function onPreviousClick() {
    stopTimer();
    decrementIndex();
    repaint();
    startTimer();
}