$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-showreel").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "70px;",
    }
  );

  /* Scroll on buttons */

  $(".js--scroll-to-showreel").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-showreel").offset().top },
      1000
    );
  });

  $(".js--scroll-to-form").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-form").offset().top },
      1000
    );
  });

  /* Mobile navigation */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon ion-icon");

    if (icon.attr("name") == "menu") {
      icon.attr("name", "close");
    } else {
      icon.attr("name", "menu");
    }
    nav.slideToggle(200);
  });
});
