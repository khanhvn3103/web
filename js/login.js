document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Lấy thông tin từ form
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  // Lấy danh sách người dùng từ localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiểm tra xem người dùng có tồn tại không và mật khẩu có khớp không
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    login();
    localStorage.setItem("userLogin", JSON.stringify(user));
    window.location.href = "../index.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
  }
});
function login() {
  localStorage.setItem("isLogin", "true");
}
