$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    centr: true,
    loop: true,
  });
});

// Burger
$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger,.header_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// Registration
$(document).ready(function () {
  $(".dws-form").on("click", ".tab", function () {
    $(".dws-form").find(".active").removeClass("active");

    $(this).addClass("active");
    $(".form-color").eq($(this).index()).addClass("active");
  });
});

// Form

// Находим все кнопки с классом .tabs-button

const buttons = document.querySelectorAll(".tabs-button");
const formElements = document.querySelector(".form").children;

// foreEach - Для каждой кнопки
buttons.forEach((button) => {
  // addEventListener - Повешать слушатель событий на клик
  button.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("active")) {
      return;
    }

    [...buttons]
      .find((button) => button.classList.contains("active"))
      .classList.remove("active");

    target.classList.add("active");

    const tab = target.dataset.tab;

    const formTab = document.querySelector(`.${tab}`);
    [...formElements].forEach((element) => {
      element.style.display = "none";
    });

    formTab.style.display = "block";
  });
});

//   переключение вкладок

//   const menuLink = document.querySelectorAll('.menu-link[data-goto]');
//   if (menuLink.lenght > 0) {
//     menuLink.forEach(menuLink => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });

//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
//             const gotoBlock = document.querySelector(menuLink.dataset.goto)
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOf
//         }
//     }
//   }
