(function ($) {
  "use strict";

  // mobile dropdown menu

  const humbergerWpapper = $(".humberger-mobile-menu-wrapper");
  const humbergerAfter = $(".humberger-mobile-menu-wrapper::after");
  const sideBarMenu = $(".menu-box-wrapper");

  $(".menu-bar > span").click(function () {
    humbergerWpapper.addClass("active");
    humbergerAfter.addClass("active");
    sideBarMenu.addClass("active");
  });
  $(".close-icon").click(function () {
    humbergerWpapper.removeClass("active");
    humbergerAfter.removeClass("active");
    sideBarMenu.removeClass("active");
  });

  $(".mobile-menu li ul").hide();
  $(".mobile-menu a ").click(function (event) {
    $(this).parent("li").children("ul").slideToggle("100");

    if ($(this).parent("li").hasClass("has-submenu")) {
      event.preventDefault();
    }
  });

  //=============================
  // Partner Slide Carousel
  //=============================

  if ($(".partner-carousel").length > 0) {
    $(".partner-carousel").owlCarousel({
      autoplay: true,
      dots: false,
      loop: true,
      margin: 30,
      nav: true,

      responsiveBaseElement: "body",
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 6,
        },
      },
    });
  }

  //=============================
  // Project Slide Carousel
  //=============================
  let elWidth = 0;

  function counter(event) {
    var element = event.target;
    var items = event.item.count;
    if (event.item.index == 1) {
      var item = event.item.count;
    } else {
      var item = event.item.index - 1;
    }
    console.log(event);
    if (item > items) {
      item = item - items;
    }

    $(".initial-slide").html(item < 10 ? `0${item}` : item);
    $(".total-slide").html(items < 10 ? `0${items}` : items);

    console.log("Index", event.item.index);

    elWidth = 100 / items;
    console.log(elWidth);
    $(".range-val").css("width", `${elWidth * item}%`);
  }

  if ($(".project-caro").length > 0) {
    $(".project-caro").owlCarousel({
      autoplay: false,
      dots: false,
      loop: true,
      margin: 30,
      nav: true,
      onInitialized: counter,
      onTranslated: counter,
      navText: [
        `
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2_205)">
      <path d="M28.2281 18.7207L1.88672 18.7207" stroke="#1F1F2B" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.2617 7.3457L1.88672 18.7207L13.2617 30.0957" stroke="#1F1F2B" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_2_205">
      <rect width="39" height="39" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"/>
      </clipPath>
      </defs>
      </svg>`,
        `
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_202)">
        <path d="M1.77185 18.7207L37.1133 18.7207" stroke="#77DD77" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.77185 18.7207L37.1133 18.7207" stroke="url(#paint0_linear_2_202)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.7383 7.3457L37.1133 18.7207L25.7383 30.0957" stroke="url(#paint1_linear_2_202)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_2_202" x1="37.0839" y1="19.261" x2="37.0676" y2="20.0899" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E34C10"/>
        <stop offset="1" stop-color="#FBB11E"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2_202" x1="37.1038" y1="19.6384" x2="28.1678" y2="26.0522" gradientUnits="userSpaceOnUse">
        <stop stop-color="#E34C10"/>
        <stop offset="1" stop-color="#FBB11E"/>
        </linearGradient>
        <clipPath id="clip0_2_202">
        <rect width="39" height="39" fill="white" transform="translate(39) rotate(90)"/>
        </clipPath>
        </defs>
        </svg>
        `,
      ],

      responsiveBaseElement: "body",
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }

  //=============================
  // Testimonial Slide Carousel
  //=============================

  if ($(".testimonial").length > 0) {
    $(".testimonial").owlCarousel({
      autoplay: false,
      dots: false,
      loop: true,
      margin: 30,
      nav: false,
      navText: [
        `
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6" clip-path="url(#clip0_2_259)">
        <path d="M37.9374 21.8398L2.03125 21.8398" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.2813 34.0898L2.03125 21.8398L14.2813 9.58984" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_2_259">
        <rect width="42" height="42" fill="white" transform="translate(0 42) rotate(-90)"/>
        </clipPath>
        </defs>
        </svg>
        `,
        `
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_256)">
        <path d="M4.0626 20.1602L39.9688 20.1602" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27.7187 7.91016L39.9687 20.1602L27.7187 32.4102" stroke="white" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_2_256">
        <rect width="42" height="42" fill="white" transform="translate(42) rotate(90)"/>
        </clipPath>
        </defs>
        </svg>
        `,
      ],
      responsiveBaseElement: "body",
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        767: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }
})(jQuery);
