import listBaloJson from "../data/balo.json" assert { type: "json" };
import listButJson from "../data/but.json" assert { type: "json" };
import listMocKhoaJson from "../data/mockhoa.json" assert { type: "json" };
import listVoJson from "../data/vo.json" assert { type: "json" };
const listpd = document.getElementById("listpd");
const params = new URLSearchParams(window.location.search);
const typeQuery = params.get("pd");

switch (typeQuery) {
  case "balo":
    var productData = listBaloJson;
    var a = document.getElementById("filterBalo");
    a.checked = true;
    break;
  case "moc-khoa":
    var productData = listMocKhoaJson;
    var a = document.getElementById("filterMocKhoa");
    a.checked = true;
    break;
  case "but":
    var productData = listButJson;
    var a = document.getElementById("filterBut");
    a.checked = true;
    break;
  case "vo":
    var productData = listVoJson;
    var a = document.getElementById("filterVo");
    a.checked = true;
    break;
}
listpd.innerHTML = productData
  .map(
    (items, index) =>
      `
      <div class="col-4 p-3">
        <div class="border border-1 rounded text-center">
          <a
            href="./product.html?id=${items.id}"
            style="color: inherit; text-decoration: none"
          >
            <img
              src="${items.img}"
              alt="${items.name}"
              style="width: 100%; height: 250px; object-fit: cover"
              class="pdimg img-responsive"
            />
            <p class="pdname px-3" style="height: 80px">${items.name}</p>
            <i class="pdprice text-danger px-3">${items.price.toLocaleString()}đ</i>
          </a>
        </div>
      </div>
      `
  )
  .join("");
