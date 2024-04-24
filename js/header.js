setTimeout(() => {
  var dropdownLink = document.getElementById("navbarDarkDropdownMenuLink");
  dropdownLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("asdhkgfas");
    window.location.href = "listProduct.html?pd=balo";
  });
}, 500);
