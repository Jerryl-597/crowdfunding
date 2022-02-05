"use strict";
const thirdModal = document.querySelector(".third-modal");
const firstModal = document.querySelector(".first-modal");
const overlay = document.querySelector(".fixed");
const reset = document.querySelectorAll(".button-two");
const resetTwo = document.querySelectorAll(".button-four");
const backProject = document.querySelectorAll(".button-one");
const showFirstModal = document.querySelectorAll(".button-three");

const closeModal = function () {
  thirdModal.classList.add("hide-three");
  firstModal.classList.add("hide-three");
  overlay.classList.add("hide-three");
};
for (let i = 0; i < showFirstModal.length; i++)
  // The above is used to select all the buttons in the modal
  showFirstModal[i].addEventListener("click", function () {
    firstModal.classList.remove("hide-three");
    thirdModal.classList.add("hide-three");
  });
for (let i = 0; i < reset.length; i++)
  reset[i].addEventListener("click", function () {
    overlay.classList.add("hide-three");
    firstModal.classList.add("hide-three");
  });
for (let i = 0; i < resetTwo.length; i++)
  resetTwo[i].addEventListener("click", function () {
    overlay.classList.add("hide-three");
    thirdModal.classList.add("hide-three");
  });
for (let i = 0; i < backProject.length; i++)
  backProject[i].addEventListener("click", function () {
    thirdModal.classList.remove("hide-three");
    overlay.classList.remove("hide-three");
  });
overlay.addEventListener("click", function () {
  overlay.classList.add("hide-three");
  thirdModal.classList.add("hide-three");
  firstModal.classList.add("hide-three");
});
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    if (
      !thirdModal.classList.contains("hide-three") ||
      !firstModal.classList.contains("hide-three")
    ) {
      closeModal();
    }
  }
});
