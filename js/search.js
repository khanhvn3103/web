import listpbJson from "../data/product.json" assert { type: "json" };
const jsonData = listpbJson;
const listpd = document.getElementById("listpd");
const searchkey = localStorage.getItem('searchValue')
// Hàm lọc sản phẩm theo tên
function filterProductsByName(query) {
  const regex = new RegExp(query.trim(), "i"); // Tìm kiếm không phân biệt chữ hoa, chữ thường
  return jsonData.filter((product) => regex.test(product.name));
}

function search() {
    const filteredProducts = filterProductsByName(searchkey);
    
    // Xóa các sản phẩm cũ trước khi hiển thị sản phẩm mới
    listpd.innerHTML = "";
    
    // Hiển thị danh sách sản phẩm tìm kiếm được
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("col-4", "p-3");
        
        productDiv.innerHTML = `
            <div class="border border-1 rounded text-center">
              <a href="./product.html?id=${product.id}" style="color: inherit; text-decoration: none">
                <img src="${product.img}" alt="${product.name}" style="width: 100%; height: 250px; object-fit: cover" class="pdimg img-responsive" />
                <p class="pdname px-3" style="height: 80px">${product.name}</p>
                <i class="pdprice text-danger px-3">${product.price.toLocaleString()}đ</i>
              </a>
            </div>
        `;
        
        listpd.appendChild(productDiv);
    });
}
search();