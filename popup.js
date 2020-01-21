var link = document.querySelector(".login-link");
var link2 = document.querySelector(".map");
var popup = document.querySelector(".modal-login");
var popup2 = document.querySelector(".modal-map");
var close = popup.querySelector(".modal-close");
var close2 = popup2.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");

var storage = localStorage.getItem("login");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
link2.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup2.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
close2.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup2.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
    if (popup2.classList.contains("modal-show")) {
      popup2.classList.remove("modal-show");
    }
  }
});
