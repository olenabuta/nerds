var sliderItem1 = document.querySelector(".slider-item-1");
var sliderItem2 = document.querySelector(".slider-item-2");
var sliderItem3 = document.querySelector(".slider-item-3");
var slideBtn1 = document.querySelector(".slide-btn-1");
var slideBtn2 = document.querySelector(".slide-btn-2");
var slideBtn3 = document.querySelector(".slide-btn-3");


slideBtn1.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideBtn1.classList.add("active");
	slideBtn2.classList.remove("active");
	slideBtn3.classList.remove("active");
	sliderItem1.classList.add("active");
	sliderItem2.classList.remove("active");
	sliderItem3.classList.remove("active");
});

slideBtn2.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideBtn1.classList.remove("active");
	slideBtn2.classList.add("active");
	slideBtn3.classList.remove("active");
	sliderItem1.classList.remove("active");
	sliderItem2.classList.add("active");
	sliderItem3.classList.remove("active");
});

slideBtn3.addEventListener("click", function(evt) {
	evt.preventDefault();
	slideBtn1.classList.remove("active");
	slideBtn2.classList.remove("active");
	slideBtn3.classList.add("active");
	sliderItem1.classList.remove("active");
	sliderItem2.classList.remove("active");
	sliderItem3.classList.add("active");
});
