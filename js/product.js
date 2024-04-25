import listpbJson from "../data/product.json" assert { type: "json" };

const listpd = document.getElementById("product-infor");
const params = new URLSearchParams(window.location.search);
const typeQuery = params.get("id");

const productData = listpbJson;
console.log(productData);

const dataForType = Object.values(productData).find(
  (item) => item.id == typeQuery
);
console.log(dataForType);

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
          <button class="btn mx-1" style="background-color: #e64c65; color: #fff; max-width: 40%;">Thêm vào giỏ hàng</button>
          <button class="btn mx-1" style="background-color: #e64c65; color: #fff; max-width: 40%;">Đặt hàng</button>
        </div>
      </div>
      <div class="col-1"></div>
    </div>`;
} else {
  listpd.innerHTML = "<p>Dữ liệu không tồn tại.</p>";
}
