document.addEventListener("DOMContentLoaded", function(event) {
var link = document.querySelector(".feedback-button");

var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".feedback-form");
var firstName = form.querySelector("[name=firstName]");
var mail = form.querySelector("[name=email-address]");
var addInfo = form.querySelector("[name=additional-info]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("firstName");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  firstName.focus();

  if (storage) {
    firstName.value = storage;
    mail.focus();
  } else {
    firstName.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function(evt) {
  if (!firstName.value || !mail.value || !addInfo.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("firstName", firstName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});

});
