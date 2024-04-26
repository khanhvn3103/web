setTimeout(() => {
  var dropdownLink = document.getElementById("navbarDarkDropdownMenuLink");
  dropdownLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "listProduct.html?pd=balo";
  });
}, 2000);
