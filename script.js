const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageXOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      ent
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
    docum;
  });
}
window.addEventListener("scroll", scrollActive);

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  //When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
