document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Lấy thông tin từ form
    const name = document.getElementById("name").value;
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

    // Tạo object user
    const newUser = {
        name: name,
        username: user,
        password: pass,
        phone: phone,
        address: address
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
