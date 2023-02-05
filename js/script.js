// Smooth scroll on click
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
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

// Filter Table on Projects
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("sortProjects");
    filter = input.value.toUpperCase();
    table = document.getElementById("projectsTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

$(document).ready(function () {
    $(".menu ul li").click(function () {
        $(".menu ul li").removeClass("active");
        $(this).addClass("active");
    });
});

