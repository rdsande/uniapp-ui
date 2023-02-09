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

//Accordion
const navItems = document.querySelectorAll(".nav-item");
const contentItems = document.querySelectorAll(".content-item");

navItems.forEach((navItem, index) => {
  navItem.addEventListener("click", () => {
    navItems.forEach(item => item.classList.remove("active"));
    contentItems.forEach(item => item.classList.remove("active"));
    navItem.classList.add("active");
    contentItems[index].classList.add("active");
  });
});

/** Bar Graph */
const bars = document.querySelectorAll(".bar");
const values = document.querySelectorAll(".value");

bars.forEach((bar, index) => {
  bar.style.height = `${values[index].textContent}px`;
});

//Tooltip
const trigger = document.querySelector(".tooltip-trigger");
const tooltip = document.querySelector(".tooltip");

trigger.addEventListener("mouseenter", () => {
  tooltip.style.display = "block";
});

trigger.addEventListener("mouseleave", () => {
  tooltip.style.display = "none";
});

//Table
const deleteButtons = document.querySelectorAll(".delete-button");
const table = document.querySelector(".common-table");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const row = event.target.parentNode.parentNode;
    table.deleteRow(row.rowIndex);
  });
});

//Select
$(document).ready(function () {
  const select = $("#selectProjects");
  const selectedValue = $(".selected-value");

  select.on("change", function () {
    selectedValue.text($(this).val());
  });
});


// Toggle Div

// $(function () {
//   $(".collapse-btn").click(function () {
//     $("#expandRow").toggle();
//   });
// });


// $(function () {
//   $(".quicktools-mob").click(function () {
//     $(".side-nav-container").toggle();
//   });
// });
