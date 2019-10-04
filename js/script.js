var writeUs = document.querySelector(".foot-btn");
var popup = document.querySelector(".write-us");
var closeWriteUs = document.querySelector(".close-btn");

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("write-us-show");
});

closeWriteUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("write-us-show");
});