var yesBtn = document.getElementById("yes-btn");
var noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
    document.getElementById("gif").src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    document.getElementById("msg").innerHTML = "See you soon! <3";
});

noBtn.addEventListener("mouseover", () => {
    var boundingRect = noBtn.getBoundingClientRect();
    var maxX = window.innerWidth - boundingRect.width;
    var maxY = window.innerHeight - boundingRect.height;

    var newX = Math.floor( Math.random() * maxX );
    var newY = Math.floor( Math.random() * maxY );

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
});