const imgBox = document.querySelector("#container > img");

imgBox.addEventListener("mouseover", (e) => {
    imgBox.src = "images/pic-6.jpg";
});

imgBox.addEventListener("mouseout", (e) => {
    imgBox.src = "images/pic-1.jpg";
});