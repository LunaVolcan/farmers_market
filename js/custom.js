// document.addEventListener('DOMContentLoaded', () => {
//     const burger = document.querySelector(".header-burger i");
//     const nav = document.querySelector(".bar-nav");
  
//     function showHamburger() {
//       burger.classList.toggle("fa-times");
//       nav.classList.toggle("nav-active");
//       console.log("showHamburger");
//     }
  
//     document.getElementById('hamburgerButton').addEventListener('click', showHamburger);
//   });

document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.getElementById('hamburgerButton');
  
  if (burgerButton) {
    const burger = document.querySelector(".header-burger i");
    const nav = document.querySelector(".bar-nav");

    function showHamburger() {
      burger.classList.toggle("fa-times");
      nav.classList.toggle("nav-active");
      console.log("showHamburger");
    }

    burgerButton.addEventListener('click', showHamburger);
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  let userArray = [];

  if (form) {
    form.addEventListener('submit', onFormSubmit);

    function onFormSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      const dataObject = Object.fromEntries(data.entries());

      userArray.push(dataObject);
      console.log(userArray);
      form.reset();
    }
  }
});
