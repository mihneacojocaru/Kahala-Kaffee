const navSlide = () => {
  const burger = document.querySelector(".navbar__burger");
  const nav = document.querySelector(".navbar__menu");
  const navLinks = document.querySelectorAll(".navbar__menu li");

  console.log(navLinks);

  burger.addEventListener("click", () => {
    nav.classList.toggle("navbar__active");

    navLinks.forEach((e, index) => {
      if (e.style.animation) {
        e.style.animation = "";
      } else {
        e.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    burger.classList.toggle('navbar__toggle');

  });
};

navSlide();
