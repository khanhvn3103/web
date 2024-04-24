setTimeout(() => {
  var dropdownLink = document.getElementById("navbarDarkDropdownMenuLink");
  dropdownLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "listProduct.html?pd=balo";
  });
  
}, 1000);

function loginHeader() {
  const isLoggedIn = localStorage.getItem("isLogin") === "true";
  const loginButton = document.getElementById("btn-login");
  const registerButton = document.getElementById("btn-register");

  if (isLoggedIn) {
    // Đã đăng nhập
    loginButton.style.display = "none"; // Ẩn nút đăng nhập
    registerButton.style.display = "none"; // Ẩn nút đăng ký
  } else {
    // Chưa đăng nhập
    loginButton.style.display = "block"; // Hiển thị nút đăng nhập
    registerButton.style.display = "block"; // Hiển thị nút đăng ký
  }
}

window.onload = function () {
  loginHeader(); // Gọi hàm khi trang được tải
};