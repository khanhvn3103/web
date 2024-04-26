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
    <p style="max-width: 400px; max-height: 200px">${item.name}</p>
  </td>
  <td>${item.price.toLocaleString()}VNĐ</td>
  <td>
    <span class="quantity">${item.quantity}</span>
  </td>
  <td class="total">${(item.price * item.quantity).toLocaleString()}VNĐ</td>
</tr>`
  )
  .join("");

const tinhTong = () => {
  let total = 0;
  carts.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

const display = () => {
  const totalPrice = tinhTong();
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = totalPrice.toLocaleString() + "VNĐ";
};
display();

const payment = localStorage.getItem("payment");
const paymentDisplay = document.getElementById("payment");
paymentDisplay.innerHTML = `${payment}`;
function updateInfor() {
  const isLoggedIn = localStorage.getItem("isLogin") === "true";
  if (isLoggedIn) {
    const { name, phone, address } = JSON.parse(
      localStorage.getItem("userLogin")
    );
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const addressInput = document.getElementById("address");
    console.log(name);
    console.log(phone);
    console.log(address);
    nameInput.value = `${name}`;
    phoneInput.value = `${phone}`;
    addressInput.value = `${address}`;
  }
}
updateInfor();

document.addEventListener("DOMContentLoaded", function () {
  const confirmButton = document.querySelector("#conform");
  confirmButton.addEventListener("click", function () {
    const nameInput = document.getElementById("name").value;
    const phoneInput = document.getElementById("phone").value;
    const addressInput = document.getElementById("address").value;

    // Lấy thông tin từ localStorage
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    const payment = localStorage.getItem("payment");

    // Tạo đối tượng chứa thông tin đơn hàng
    const orderInfo = {
      shippingInfo: {
        name: nameInput,
        phone: phoneInput,
        address: addressInput,
      },
      carts: carts,
      payment: payment,
    };

    // Lấy danh sách các đơn hàng đã lưu trong localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Thêm đơn hàng mới vào danh sách
    orders.push(orderInfo);

    // Lưu danh sách đơn hàng vào localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Xóa thông tin giỏ hàng và thanh toán sau khi đơn hàng được xác nhận
    localStorage.removeItem("carts");
    localStorage.removeItem("payment");

    // Chuyển hướng hoặc thực hiện các thao tác tiếp theo sau khi xác nhận
    window.location.href = "./history.html";
  });
});
