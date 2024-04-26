setTimeout(() => {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 90) {
      document.getElementById("miniHeader").style.display = "block";
    } else {
      document.getElementById("miniHeader").style.display = "none";
    }
  });
}, 2000);
