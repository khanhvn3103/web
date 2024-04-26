let cartsJson = JSON.parse(localStorage.getItem("carts")) || [];
var carts = cartsJson;
const listpd = document.getElementById("item");
console.log(carts);
listpd.innerHTML = carts
  .map(
    (item, index) => `
  <tr>
  <td scope="row">
    <img
      style="width: 200px; height: 200px; object-fit: cover"
      src="${item.img}"
      alt="${item.name}"
    />
  </td>
  <td>
    <p style="max-width: 200px; max-height: 200px">${item.name}</p>
  </td>
  <td>${item.price.toLocaleString()}VNĐ</td>
  <td>
    <button type="button" class="decrement-btn btn btn-outline-secondary" data-index="${index}" style="padding: 0; width: 30px; height:30px;">-</button>
    <span class="quantity">${item.quantity}</span>
    <button type="button" class="increment-btn btn btn-outline-secondary" data-index="${index}" style="padding: 0; width: 30px; height:30px;">+</button>
  </td>
  <td class="total">${(item.price * item.quantity).toLocaleString()}VNĐ</td>
  <td>
    <button type="button" class="remove-btn btn btn-outline-secondary" data-index="${index}" >Xóa</button>
  </td>
</tr>`
  )
  .join("");

// Hàm xử lý khi người dùng click vào nút tăng số lượng
const handleIncrement = (event) => {
  const index = event.target.dataset.index;
  const currentTime = new Date().getTime();
  if (currentTime - lastClickTime > clickInterval) {
    carts[index].quantity++;
    updateCart();
    lastClickTime = currentTime;
  }
};

// Hàm xử lý khi người dùng click vào nút giảm số lượng
const handleDecrement = (event) => {
  const index = event.target.dataset.index;
  const currentTime = new Date().getTime();
  if (currentTime - lastClickTime > clickInterval) {
    if (carts[index].quantity > 1) {
      carts[index].quantity--;
      updateCart();
      lastClickTime = currentTime;
    }
  }
};

// Hàm xử lý khi người dùng click vào nút xóa
const handleRemove = (event) => {
  const index = event.target.dataset.index;
  carts.splice(index, 1);
  updateCart();
};

// Hàm cập nhật giỏ hàng sau mỗi thay đổi
const updateCart = () => {
  localStorage.setItem("carts", JSON.stringify(carts));
  displayCart();
  updateTotal();
};

// Hàm hiển thị lại giỏ hàng
const displayCart = () => {
  listpd.innerHTML = carts
    .map(
      (item, index) => `
<tr>
  <td scope="row">
    <img
      style="width: 200px; height: 200px; object-fit: cover"
      src="${item.img}"
      alt="${item.name}"
    />
  </td>
  <td>
    <p style="max-width: 200px; max-height: 200px">${item.name}</p>
  </td>
  <td>${item.price.toLocaleString()}VNĐ</td>
  <td>
    <button type="button" class="decrement-btn btn btn-outline-secondary" data-index="${index}" style="padding: 0; width: 30px; height:30px;">-</button>
    <span class="quantity">${item.quantity}</span>
    <button type="button" class="increment-btn btn btn-outline-secondary" data-index="${index}" style="padding: 0; width: 30px; height:30px;">+</button>
  </td>
  <td class="total">${(item.price * item.quantity).toLocaleString()}VNĐ</td>
  <td>
    <button type="button" class="remove-btn btn btn-outline-secondary" data-index="${index}" >Xóa</button>
  </td>
</tr>`
    )
    .join("");

  assignRemoveEvents();
  assignQuantityEvents();
};

// Hàm tính tổng tiền của giỏ hàng
const calculateTotal = () => {
  let total = 0;
  carts.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

// Hàm cập nhật tổng tiền
const updateTotal = () => {
  const totalPrice = calculateTotal();
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = totalPrice.toLocaleString() + "VNĐ";
};

// Hàm gán sự kiện cho các nút xóa
const assignRemoveEvents = () => {
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) =>
    button.addEventListener("click", handleRemove)
  );
};

// Hàm gán sự kiện cho các nút tăng/giảm số lượng
const assignQuantityEvents = () => {
  const decrementButtons = document.querySelectorAll(".decrement-btn");
  const incrementButtons = document.querySelectorAll(".increment-btn");

  decrementButtons.forEach((button) =>
    button.addEventListener("click", handleDecrement)
  );

  incrementButtons.forEach((button) =>
    button.addEventListener("click", handleIncrement)
  );
};

displayCart();
updateTotal();

// Khai báo biến để lưu trữ trạng thái thời gian cuối cùng mà một sự kiện click đã xảy ra
let lastClickTime = 0;
// Khai báo biến để xác định khoảng thời gian giữa hai lần click liên tiếp
const clickInterval = 500;

// Hàm xử lý khi người dùng click vào nút thanh toán
const handlePayment = () => {
  const isLoggedIn = localStorage.getItem("isLogin") === "true";
  if (!isLoggedIn) {
    window.location.href = "./login.html";
  } else {
    localStorage.removeItem("payment");
    // Lấy giá trị của radio button được chọn
    const selectedPayment = document.querySelector(
      'input[name="payments"]:checked'
    ).value;

    // Lưu giá trị của radio button được chọn vào localStorage
    localStorage.setItem("payment", selectedPayment);

    // Chuyển hướng hoặc thực hiện các thao tác khác liên quan đến thanh toán
    window.location.href = "./payment.html";
  }
};

// Gán sự kiện cho nút thanh toán
const paymentButton = document.querySelector(".btn-primary");
paymentButton.addEventListener("click", handlePayment);
