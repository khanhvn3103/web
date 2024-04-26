import listpbJson from "../data/product.json" assert { type: "json" };

const listpd = document.getElementById("product-infor");
const params = new URLSearchParams(window.location.search);
const typeQuery = params.get("id");
const productData = listpbJson;

const dataForType = Object.values(productData).find(
  (item) => item.id == typeQuery
);

console.log(dataForType);

window.addcart = () => {
  let carts = JSON.parse(localStorage.getItem("carts")) || [];

  const existingItemIndex = carts.findIndex(
    (item) => item.id === dataForType.id
  );

  if (existingItemIndex !== -1) {
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, chỉ cần tăng số lượng của nó
    carts[existingItemIndex].quantity++;
  } else {
    // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào với số lượng là 1
    dataForType.quantity = 1;
    carts.push(dataForType);
  }

  localStorage.setItem("carts", JSON.stringify(carts));
};

window.buycart = () => {
  let carts = JSON.parse(localStorage.getItem("carts")) || [];

  const existingItemIndex = carts.findIndex(
    (item) => item.id === dataForType.id
  );

  if (existingItemIndex !== -1) {
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, chỉ cần tăng số lượng của nó
    carts[existingItemIndex].quantity++;
  } else {
    // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào với số lượng là 1
    dataForType.quantity = 1;
    carts.push(dataForType);
  }

  localStorage.setItem("carts", JSON.stringify(carts));
  window.location.href = "./cart.html"; // Chuyển hướng đến trang giỏ hàng sau khi thêm sản phẩm
};

if (dataForType) {
  const { name, img, price } = dataForType;
  listpd.innerHTML = `
    <div class="row">
      <div class="col-1"></div>
      <div class="col-5">
        <img
          style="width: 100%; height: 500px; object-fit: cover"
          src="${img}"
          alt="${name}"
        />
      </div>
      <div class="col-5">
        <div class="row">
          <h4>${name}</h4>
        </div>
        <div class="row">
          <h3 class="text-danger">${price.toLocaleString()}đ</h3>
        </div>
        <div class="row">
          <button class="btn mx-1" style="background-color: #e64c65; color: #fff; max-width: 40%;" onClick="addcart()">Thêm vào giỏ hàng</button>
          <button class="btn mx-1" style="background-color: #e64c65; color: #fff; max-width: 40%;" onclick="buycart()">Đặt hàng</button>
        </div>
        <div class="row">
          <p>Tên sản phẩm: ${name}. <br>
          Văn phòng phẩm không chỉ là những dụng cụ cần thiết để thực hiện các nhiệm vụ hàng ngày mà còn là những phương tiện quan trọng giúp tổ chức và tối ưu hóa quy trình làm việc. Chúng giúp tăng cường hiệu suất và sự chính xác trong việc ghi chép, tổ chức thông tin và truyền đạt ý kiến. Từ việc sử dụng giấy và bút để ghi chú, đến việc sử dụng máy in và máy tính để in ấn và xử lý tài liệu, văn phòng phẩm là trợ thủ đắc lực của mỗi nhân viên văn phòng. Đồng thời, chúng cũng phản ánh văn hóa làm việc và phong cách tổ chức của một doanh nghiệp.
          </p>
        </div>
      </div>
      <div class="col-1"></div>
    </div>`;
} else {
  listpd.innerHTML = "<p>Dữ liệu không tồn tại.</p>";
}
