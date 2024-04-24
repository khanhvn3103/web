import listBaloJson from "../data/balo.json" assert { type: "json" };
const listpd = document.getElementById("listpd");

const productList = []

var productData = listBaloJson.slice(0,2)
productData.forEach((ele) => {
    ele.link = './html/'
})
console.log(productData);
// listpd.innerHTML = productData
//   .map(
//     (items, index) =>
//       `
//        <div class="col-4 p-3">
//        <div class="border border-1 rounded text-center">
//        <img
//        src="${items.img}"
//        alt="${items.name}"
//        style="width: 100%; height: 250px; object-fit: cover;"
//        class="pdimg img-responsive"
//          />
//          <p class="pdname px-3" style="height: 50px">
//          ${items.name}
//          </p>
//          <i class="pdprice text-danger px-3">${items.price.toLocaleString()}đ</i>
//          </div>
//          </div>
//          `
//   )
//   .join("");
// // }
// console.log(listpd);
