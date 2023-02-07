// Smooth scroll on click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Toggle Password on Click Lock icon
// $(".pwd-icon").click(function () {

//     $(".pwd-icon i").toggleClass("ri-lock-fill ri-unlock-fill");
//     var input = $($(this).attr("toggle"));
//     if (input.attr("type") == "password") {
//         input.attr("type", "text");
//     } else {
//         input.attr("type", "password");
//     }
// });

//Modal
$(function () {
  $("a[data-modal]").on("click", function () {
    $($(this).data("modal")).modal({
      fadeDuration: 250,
    });
    return false;
  });
});

// Filter Projects
function filterFunction() {
  let filterValue, list, li, i;
  filterValue = document.getElementById("filterInput").value.toLowerCase();
  list = document.getElementById("listProjects");
  li = list.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toLowerCase().indexOf(filterValue) > -1) {
      li[i].style.display = "block";
    } else {
      li[i].style.display = "none";
    }
  }
}
