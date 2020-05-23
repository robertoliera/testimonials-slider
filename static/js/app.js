const next = document.querySelectorAll(".btn-next");
const prev = document.querySelectorAll(".btn-prev");
const profiles = document.querySelectorAll(".profile");

for (let i = 0; i < prev.length; i++) {
  prev[i].addEventListener("click", function (event) {
    if (i === 0) {
      event.target.closest(".profile").classList.toggle("is-hidden");
      profiles[profiles.length - 1].classList.toggle("is-hidden");

      return false;
    }

    event.target.closest(".profile").classList.toggle("is-hidden");
    profiles[i - 1].classList.toggle("is-hidden");
  });
}

for (let i = 0; i < next.length; i++) {
  next[i].addEventListener("click", function (event) {
    if (i + 1 === next.length) {
      event.target.closest(".profile").classList.toggle("is-hidden");
      profiles[0].classList.toggle("is-hidden");

      return false;
    }

    event.target.closest(".profile").classList.toggle("is-hidden");
    profiles[i + 1].classList.toggle("is-hidden");
  });
}
