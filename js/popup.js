var link = document.querySelector(".write-to-us-button");
var popup = document.querySelector(".modal-write");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if(storage){
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
});

close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt){
	if (!login.value || !email.value || !letter.value) {
		evt.preventDefault(); 
		popup.classList.add("modal-error");
		console.log("Введіть правильно дані");
	}else {
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});