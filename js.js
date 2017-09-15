//Animation för navbaren
$(document).scroll(function () {
    if ($(document).scrollTop() > 150) {
        $("nav, .plogo").addClass("scroll");
    }
    else {
        $("nav, .plogo").removeClass("scroll");
    }
});


function bytSlide() {
    var slide1 = document.getElementById("personSlide1");
    var slide2 = document.getElementById("personSlide2");

    slide1.style.display = (
        slide1.style.display == "none" ? "block" : "none");
    slide2.style.display = (
        slide2.style.display == "none" ? "block" : "none");
}

$(document).ready(function () {
    //Animation för scroll till toppen av sidan
    $("#linkHome").click(function () {
        $path = $("#home").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 750);
    })
    //Animation för scroll till anchorPoint1
    $("#link1").click(function () {
        $path = $("#anchor1").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    //Animation för scroll till anchorPoint2
    $("#link2").click(function () {
        $path = $("#anchor2").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })

    //Animation för scroll till anchorPoint3
    $("#link3").click(function () {
        $path = $("#anchor3").offset().top;
        event.preventDefault();
        $('body').animate({ scrollTop: $path }, 1000);
    })
})


//bildspel
var images = ["img/port1.jpg", "img/port2.png", "img/port3.png"];
var imageNumber = 0;
var imageLength = images.length -1;

//byt till nästa bild
function changeImage() {
    imageNumber++;

    if (imageNumber > imageLength) {
        imageNumber = 0;
    }
    document.getElementById("slideshow").src = images[imageNumber];
}

document.getElementById("nästaknapp").addEventListener("click", changeImage);

//byt till föregående bild
function lastImage() {
    imageNumber--;

    if (imageNumber < 0) {
        imageNumber = imageLength;
    }
    document.getElementById("slideshow").src = images[imageNumber];
}

document.getElementById("föregåendeknapp").addEventListener("click", lastImage);

//Gör att bildspelet rullar på/stannar
var stopp = false;

var intervalHandle = setInterval(changeImage, 1000);

function bildTimer() {
    if(!stopp){
        clearInterval(intervalHandle);  
        stopp = true;
    } else {
        intervalHandle = setInterval(changeImage, 1000);
        stopp = false;
    }
}

document.getElementById("startstopp").addEventListener("click", bildTimer);

//Byter text på knapp beroende på om bildspelet rullar eller inte
function bytText(){
var startstoppen = document.getElementById("startstopp");
if (startstoppen.value=="Stoppa") startstoppen.value = "Starta";
else startstoppen.value = "Stoppa";
}




function googleMaps() {
    //Google Map
    var orebro = { lat: 59.254496, lng: 15.243522 };
    var centerOrebro = {
        center: orebro,
        zoom: 13,
    };
    //Markören på kartan
    var kartan = new google.maps.Map(document.getElementById("googleMap"), centerOrebro);
    var marker = new google.maps.Marker({
        position: orebro,
        map: kartan
    });
}

//Validering av textfält
