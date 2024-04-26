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
//   const orderList = document.getElementById("orderList");
//   const orders = JSON.parse(localStorage.getItem("orders")) || [];

//   orderList.innerHTML = orders
//     .map(
//       (order, index) => `
//                 <tr>
//                     <td>${index + 1}</td>
//                     <td>${formatCurrency(getTotal(order.carts))}</td>
//                     <td>${order.payment}</td>
//                     <td>
//                         <button class="btn btn-primary view-details" data-order-index="${index}" data-bs-toggle="modal" data-bs-target="#orderDetailModal">Xem thêm</button>
//                     </td>
//                 </tr>
//             `
//     )
//     .join("");

//   const modalBody = document.getElementById("orderDetailContent");
//   orderList.addEventListener("click", function (event) {
//     const target = event.target.closest(".view-details");
//     if (target) {
//       const orderIndex = parseInt(target.getAttribute("data-order-index"));
//       const order = orders[orderIndex];
//       modalBody.innerHTML = `
//                 <h5>Order Details:</h5>
//                 <table class="table">
//                     <thead>
//                         <tr>
//                             <th>Product</th>
//                             <th>Price</th>
//                             <th>Quantity</th>
//                             <th>Total</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         ${order.carts
//                           .map(
//                             (item) => `
//                                     <tr>
//                                         <td>${item.name}</td>
//                                         <td>${formatCurrency(item.price)}</td>
//                                         <td>${item.quantity}</td>
//                                         <td>${formatCurrency(
//                                           item.price * item.quantity
//                                         )}</td>
//                                     </tr>
//                                 `
//                           )
//                           .join("")}
//                     </tbody>
//                 </table>
//                 <div>Total: ${formatCurrency(getTotal(order.carts))}</div>
//             `;
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const orderList = document.getElementById("orderList");
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  orderList.innerHTML = orders
    .map(
      (order, index) => `
          <tr>
              <td>${index + 1}</td>
              <td>${formatCurrency(getTotal(order.carts))}</td>
              <td>${order.payment}</td>
              <td>
                  <button class="btn btn-primary view-details" data-order-index="${index}" data-bs-toggle="modal" data-bs-target="#orderDetailModal">Xem thêm</button>
              </td>
          </tr>
      `
    )
    .join("");

  const modalBody = document.getElementById("orderDetailContent");
  orderList.addEventListener("click", function (event) {
    const target = event.target.closest(".view-details");
    if (target) {
      const orderIndex = parseInt(target.getAttribute("data-order-index"));
      const order = orders[orderIndex];
      modalBody.innerHTML = `
                  <table class="table">
                      <thead>
                          <tr>
                              <th>Tên Sản Phẩm</th>
                              <th>Giá</th>
                              <th>Số lượng</th>
                              <th>Tổng tiền</th>
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
                                      <td>${formatCurrency(
                                        item.price * item.quantity
                                      )}</td>
                                  </tr>
                              `
                            )
                            .join("")}
                      </tbody>
                  </table>
                  <div>Tổng: ${formatCurrency(getTotal(order.carts))}</div>
              `;
    }
  });
});
