setTimeout(() => {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 90) {
      document.getElementById("miniHeader").style.display = "block";
    } else {
      document.getElementById("miniHeader").style.display = "none";
    }
  });
}, 1000);
  
  function loginHeader() {
    const isLoggedIn = localStorage.getItem("isLogin") === "true";
    console.log(isLoggedIn);
    const loginButton = document.getElementById("btn-loginmn");
    const registerButton = document.getElementById("btn-registermn");

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
