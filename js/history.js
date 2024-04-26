document.addEventListener("DOMContentLoaded", function () {
  const orderList = document.getElementById("orderList");
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orderList.innerHTML = orders
    .map(
      (order, index) => `
        <tr data-bs-toggle="modal" data-bs-target="#orderDetailModal" data-order-index="${index}">
          <td>${index + 1}</td>
          <td>${formatDate(new Date())}</td>
          <td>${formatCurrency(getTotal(order.carts))}</td>
          <td>${order.payment}</td>
        </tr>
      `
    )
    .join("");

  const modalBody = document.getElementById("orderDetailContent");
  orderList.addEventListener("click", function (event) {
    const target = event.target.closest("tr[data-order-index]");
    if (target) {
      const orderIndex = parseInt(target.getAttribute("data-order-index"));
      const order = orders[orderIndex];
      modalBody.innerHTML = `
          <h5>Order Details:</h5>
          <table class="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${order.carts
                .map(
                  (item) => `
                <tr>
                  <td>${item.name}</td>
                  <td>${formatCurrency(item.price)}</td>
                  <td>${item.quantity}</td>
                  <td>${formatCurrency(item.price * item.quantity)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
          <div>Total: ${formatCurrency(getTotal(order.carts))}</div>
        `;
    }
  });
});

// Hàm định dạng ngày tháng
function formatDate(date) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("vi-VN", options);
}

// Hàm tính tổng giá trị đơn hàng
function getTotal(carts) {
  return carts.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Hàm định dạng tiền tệ
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}
