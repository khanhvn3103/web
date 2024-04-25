document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy thông tin từ form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const repass = document.getElementById("repass").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    // Kiểm tra mật khẩu nhập lại
    if (pass !== repass) {
      alert("Mật khẩu không khớp!");
      return;
    }

    // Tạo regex để kiểm tra mật khẩu
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(pass)) {
      alert(
        "Mật khẩu phải chứa ít nhất một chữ số, một chữ cái thường, một chữ cái hoa, một ký tự đặc biệt và có ít nhất 8 ký tự tổng cộng."
      );
      return;
    }

    // Kiểm tra tên không được để trống
    if (name.trim() === "") {
      alert("Vui lòng nhập tên.");
      return;
    }

    // Kiểm tra email không được để trống và phải đúng định dạng
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email không hợp lệ.");
      return;
    }

    // Kiểm tra tên người dùng không được để trống
    if (user.trim() === "") {
      alert("Vui lòng nhập tên đăng nhập.");
      return;
    }

    // Tạo regex để kiểm tra số điện thoại (theo kiểu của Việt Nam)
    const phoneRegex = /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/;
    if (!phoneRegex.test(phone)) {
      alert("Số điện thoại không hợp lệ.");
      return;
    }

    // Tạo object user
    const newUser = {
      name: name,
      email: email,
      username: user,
      password: pass,
      phone: phone,
      address: address,
    };

    // Lấy danh sách người dùng từ localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Thêm người dùng mới vào danh sách
    users.push(newUser);

    // Lưu danh sách người dùng mới vào localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Chuyển hướng người dùng đến trang đăng nhập
    window.location.href = "./login.html";
  });
