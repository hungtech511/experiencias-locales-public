let listMenuMobiles = document.querySelectorAll(
  ".header__mobile .nav__mobile .has__menu > a"
);
let header = document.querySelector("header");
let stickyPlaceholder = document.querySelector(".sticky-placeholder");

listMenuMobiles.forEach((listMenuMobile, index) => {
  listMenuMobile.addEventListener("click", function () {
    let subMenu = this.nextElementSibling;
    let totalHeightOfChildren = 0;

    this.parentElement.classList.toggle("open");
    if (this.parentElement.classList.contains("open")) {
      for (let i = 0; i < subMenu.children.length; i++) {
        totalHeightOfChildren += subMenu.children[i].offsetHeight;
      }
      subMenu.style.height = totalHeightOfChildren + "px";
    } else {
      subMenu.style.height = "0";
    }
  });
});

function renderBackgroundImageHeight() {
  let windowsize = $(window).width();
  if ($(".background__image").length > 0 && windowsize > 991) {
    $(".background__image").each(function () {
      let img = new Image();
      img.src = $(this)
        .css("background-image")
        .replace(/url\((['"])?(.*?)\1\)/gi, "$2")
        .split(",")[0];

      $(this).height(img.height);
    });
  }
}


window.addEventListener("resize", function () {
  let hasTouchScreen = false;

  let UA = navigator.userAgent;
  hasTouchScreen =
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);

  if (hasTouchScreen)
    stickyPlaceholder.style.height = header.clientHeight + "px";

});

stickyPlaceholder.style.height = header.clientHeight + "px";

$(document).ready(function () {
  
  $(window).on("scroll", function () {
    checkIfElementIsScroll();
  });
  
  // Background page
  renderBackgroundImageHeight();


  // render grid dynamic
  if ($(".top__10--wrapper").length > 0) {
    let wrapper = $(".top__10--wrapper").html();
    let items = "";

    // Get top-10 item without col
    $(".top__10--wrapper .row > div").each(function () {
      $(this).find(".tour__card.text-center").remove()
      items += $(this).html();
    });

    function changeToGallery() {
      let windowsize = $(window).width();
      if (windowsize <= 991) {
        $(".top__10--wrapper").html(items);
      } else {
        $(".top__10--wrapper").html(wrapper);
      }
    }

    $(window).on("resize", function () {
      changeToGallery();
    });

    changeToGallery();
  }

  if ($(".vietnam__package--tours").length > 0) {
    let wrapper = $(".tours__item--wrapper").html();
    let packageTourItem = $(".vietnam__package--tours .package__tour--item");

    let items = "";

    packageTourItem.each(function () {
      items += $(packageTourItem)
        .removeClass()
        .addClass("package__tour--item")
        .parent()
        .html();
    });

    function changeIntoGridOrSlider() {
      let windowsize = $(window).width();
      if (windowsize <= 991) {
        $(".tours__item--wrapper").html(items);
        // When mobile show slide instead of grid
      } else {
        $(".tours__item--wrapper").html(wrapper);
      }
    }

    $(window).on("resize", function () {
      changeIntoGridOrSlider();
    });
    changeIntoGridOrSlider();
  }

  $(".our-tour-container .our-tour-button-list a").each(function (index) {
    $(this).on("click", function () {
      $("html, body").animate({
        scrollTop:
          $("#our-tour-section-" + index).offset().top - header.clientHeight,
      });
    });
  });
  let blogCarousel = function () {
    if ($().owlCarousel) {
      $(".blog__slider").each(function () {
        $(this)
          .find(".owl-carousel")
          .owlCarousel({
            margin: 30,
            autoplay: false,
            dots: true,
            autoplayTimeout: 5000,
            responsive: {
              0: {
                items: 1,
                loop: true,
              },
              576: {
                items: 2,
                loop: true,
              },
              992: {
                items: 2,
                loop: true,
              },
              1200: {
                items: 3,
                loop: true,
              },
            },
          });
      });
    }
  };
  let clientReview = function () {
    if ($().owlCarousel) {
      $(".client__reviews--slider").each(function () {
        $(this)
          .find(".owl-carousel")
          .owlCarousel({
            margin: 30,
            autoplay: false,
            dots: true,
            autoplayTimeout: 5000,
            responsive: {
              0: {
                items: 1,
              },
              576: {
                items: 1,
              },
              700: {
                items: 2,
              },
              1200: {
                items: 3,
              },
            },
          });
      });
    }
  };
  let ourTeam = function () {
    if ($().owlCarousel) {
      $(".our__team--slider").each(function () {
        $(this)
          .find(".owl-carousel")
          .owlCarousel({
            items: 4,
            margin: 30,
            autoplay: false,
            dots: true,
            autoplayTimeout: 5000,
            responsive: {
              0: {
                items: 1,
              },
              576: {
                items: 2,
              },
              992: {
                items: 2,
              },
              1200: {
                items: 4,
              },
            },
          });
      });
    }
  };
  let lastReview = function () {
    if ($().owlCarousel) {
      $(".last__comment--slider").each(function () {
        $(this)
          .find(".owl-carousel")
          .owlCarousel({
            autoplay: false,
            dots: true,
            autoplayTimeout: 5000,
            responsive: {
              0: {
                items: 1,
              },
              576: {
                items: 2,
              },
              992: {
                items: 2,
              },
              1200: {
                items: 3,
              },
            },
          });
      });
    }
  };

  let travelPhoto = function () {
    if ($().owlCarousel) {
      $(".travel__photo--slider").each(function () {
        let owl = $(this).find(".owl-carousel");

        owl.owlCarousel({
          items: 4,
          autoplay: false,
          dots: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          margin: 30,
          responsive: {
            0: {
              items: 1,
            },
            576: {
              items: 2,
            },
            992: {
              items: 2,
            },
            1200: {
              items: 4,
            },
          },
        });
      });
    }
  };

  let detailTour = function () {
    if ($().owlCarousel) {
      $(".destination__slider").each(function () {
        let owl = $(this).find(".owl-carousel");
        owl.owlCarousel({
          autoplay: false,
          dots: false,
          nav: true,
          mouseDrag: false,
          autoplayTimeout: 5000,
          items: 5,
          margin: 15,
          navText: [
            "<i class='fal fa-chevron-left'></i>",
            "<i class='fal fa-chevron-right'></i>",
          ],
          responsive: {
            0: {
              items: 3,
            },
            576: {
              items: 3,
            },
            992: {
              items: 3,
            },
            1200: {
              items: 5,
            },
          },
        });
        owl.on("changed.owl.carousel", function (property) {
          let current = property.item.index;
          let src = $(property.target)
            .find(".owl-item")
            .eq(current)
            .find("img")
            .attr("src");
          let imageNeedToChange = document.querySelector(
            ".destination__slider--image img"
          );
          imageNeedToChange.src = src;
        });
      });
    }
  };



  $(".destination__slider").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".travel__photo--slider").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".image__showcase").magnificPopup({
    delegate: "a",
    type: "image",
  });

  blogCarousel();
  clientReview();
  ourTeam();
  lastReview();
  travelPhoto();
  detailTour();


  // Scroll to specific tab in detail tour page
  let backgroundElement = $(".detail__destination").css("background-color");

  function checkIfElementIsScroll() {
    if ($(".box__tab--wrapper").length > 0) {
      let parentElementWidth = $(".box__tab--wrapper").width();
      let elementPosition =
        $(".box__tab--wrapper").offset().top - header.clientHeight;
      let userScroll = window.pageYOffset;

      let styleProperty = {
        transform: `translateY(${header.clientHeight}px)`,
        top: 0,
        position: "fixed",
        zIndex: 2,
        width: parentElementWidth,
        transition: "all .3s",
        background: backgroundElement,
      }

      if (userScroll >= elementPosition) {
        $(".box__tab").css(styleProperty);
      } else {
        $(".box__tab").removeAttr("style");
      }
    }
  }



  // Click to scroll
  $(".box__tab li a").each(function () {
    $(this).on("click", function () {
      var aid = $(this).attr("href");
      $("html,body").animate(
        { scrollTop: $(aid).offset().top - header.clientHeight * 2 },
        "smooth"
      );
    });
  });

  // Click accordion heading in detail tour page
  $(".box__detail .box__accordion--title").each(function () {
    let parentClickAccordion = $(this).parent();
    $(this).on("click", function (e) {
      e.preventDefault();
      if (parentClickAccordion.parent().hasClass("box__content--accordion")) {
        let siblingElement = $(this).siblings();
        let totalChildrenHeight = 0;
        let totalChildrenElements = parentClickAccordion.find(
          ".accordion__content"
        );
        if (parentClickAccordion.hasClass("active") === false) {
          parentClickAccordion.addClass("active");

          if (parentClickAccordion.hasClass("active")) {
            totalChildrenElements.children().each(function () {
              totalChildrenHeight += $(this).outerHeight(true);
            });
          }

          siblingElement.height(totalChildrenHeight);

          if (parentClickAccordion.siblings().hasClass("active")) {
            parentClickAccordion.siblings().removeClass("active");
            parentClickAccordion
              .siblings()
              .find(".accordion__content")
              .height(0);
          }
        } else if (parentClickAccordion.hasClass("active")) {
          parentClickAccordion.removeClass("active");
          siblingElement.height(0);
        }
      }
    });
  });

  let i = 0;
  $(".expand__all").on("click", function () {
    if (i === 0) {
      $(this).text("Close All");
      $(this).addClass("active");

      $(".has__accordion .box__detail--accordion > li:not(.active)").each(
        function () {
          $(this).addClass("active");
          let totalHeight = 0;

          if ($(this).hasClass("active")) {
            $(this)
              .find(".accordion__content")
              .each(function () {
                $(this)
                  .children()
                  .each(function () {
                    totalHeight += $(this).outerHeight(true);
                  });
                $(this).height(totalHeight);
              });
          }
        }
      );
      i = 1;
    } else {
      $(this).text("Expand All");
      $(this).removeClass("active");

      $(".has__accordion .box__detail--accordion > li.active").each(
        function () {
          $(this).removeClass("active");
          $(this)
            .find(".accordion__content")
            .each(function () {
              $(this).height(0);
            });
        }
      );
      i = 0;
    }
  });

  $(".date__picker").datepicker({
    format: "yyyy/mm/dd",
  });
  $(".date__picker")
    .datepicker("setDate", new Date())
    .on("change", function () {
      $(".destination__detail--right .calculate-button").removeAttr("disabled");
    });
});

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      let invalidInputs = form.querySelectorAll("input:required:invalid");
      invalidInputs.forEach(function (input) {
        let changeCamelCaseToCapitalize = $(input)
          .attr("name")
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, function (str) {
            return str.toUpperCase();
          });

        if ($(input).parent().find("div.invalid-feedback").length === 0) {
          $(input)
            .parent()
            .append(
              `<div class="invalid-feedback">${changeCamelCaseToCapitalize} must not be blank</div>`
            );
        }
      });

      form.classList.add("was-validated");
    });
  });
})();

// Check price form

const checkPriceForm = document.querySelector("#checkprice");
const countChildrenSelect = checkPriceForm?.querySelector(
  "select[name=selectChildren]"
);

(function renderDateOfBirth() {
  let currentYear = new Date().getFullYear();
  if (checkPriceForm) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let htmlYearOfBirth = "";
    for (let i = currentYear; i > currentYear - 12; i--) {
      htmlYearOfBirth += `<option value='${i}'>${i}</option>`;
    }
    let htmlMonthOfBirth = "";
    for (let i = 0; i < monthNames.length; i++) {
      htmlMonthOfBirth += `<option value='${monthNames[i]}'>${monthNames[i]}</option>`;
    }
    let htmlDateOfBirt = "";
    for (let i = 1; i <= 31; i++) {
      htmlDateOfBirt += `<option value='${i}'>${i}</option>`;
    }

    const renderHtml = (no) => {
      return `<div class="date-of-birth-children">
  <p>Date of birth child ${no}</p>
  <div>
    <select name="date-of-birth" id="date-of-birth">
      ${htmlDateOfBirt}
    </select>
    <select name="month-of-birth" id="month-of-birth">
      ${htmlMonthOfBirth}
    </select>
    <select name="year-of-birth" id="year-of-birth">
      ${htmlYearOfBirth}
    </select>
  </div>
</div>`;
    };
    countChildrenSelect.addEventListener("change", (e) => {
      let html = "";
      const countChildren = Number(e.target.value);
      for (let i = 0; i < countChildren; i++) {
        html += renderHtml(i + 1);
      }
      document.querySelector(".test").innerHTML = html;
    });
  }
})();
