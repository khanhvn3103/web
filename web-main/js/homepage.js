import listBaloJson from "../data/balo.json" assert { type: "json" };
import listButJson from "../data/but.json" assert { type: "json" };
import listMocKhoaJson from "../data/mockhoa.json" assert { type: "json" };
import listVoJson from "../data/vo.json" assert { type: "json" };
setTimeout(() => {
  const balopd = document.getElementById("balopd");
  var baloData = listBaloJson.slice(0, 3);
  console.log(baloData);
  balopd.innerHTML = baloData
    .map(
      (items, index) =>
        `
          <div class="col-4 p-3">
            <div class="border border-1 rounded text-center">
              <a
                href="./html/product.html?id=${items.id}"
                style="color: inherit; text-decoration: none"
              >
                <img
                  src="${items.img}"
                  alt="${items.name}"
                  style="width: 100%; height: 250px; object-fit: cover"
                  class="pdimg img-responsive"
                />
                <p class="pdname px-3" style="height: 50px">${items.name}</p>
                <i class="pdprice text-danger px-3">${items.price.toLocaleString()}đ</i>
              </a>
            </div>
          </div>
          `
    )
    .join("");
  setTimeout(() => {
    const mocKhoapd = document.getElementById("mocKhoapd");
    var mocKhoaData = listMocKhoaJson.slice(0, 3);
    console.log(mocKhoaData);
    mocKhoapd.innerHTML = mocKhoaData
      .map(
        (items, index) =>
          `
                  <div class="col-4 p-3">
                    <div class="border border-1 rounded text-center">
                      <a
                        href="./html/product.html?id=${items.id}"
                        style="color: inherit; text-decoration: none"
                      >
                        <img
                          src="${items.img}"
                          alt="${items.name}"
                          style="width: 100%; height: 250px; object-fit: cover"
                          class="pdimg img-responsive"
                        />
                        <p class="pdname px-3" style="height: 50px">${
                          items.name
                        }</p>
                        <i class="pdprice text-danger px-3">${items.price.toLocaleString()}đ</i>
                      </a>
                    </div>
                  </div>
                  `
      )
      .join("");
  }, 1000);

  setTimeout(() => {
    const butpd = document.getElementById("butpd");
    var butData = listButJson.slice(0, 3);
    console.log(butData);
    butpd.innerHTML = butData
      .map(
        (items, index) =>
          `
                    <div class="col-4 p-3">
                      <div class="border border-1 rounded text-center">
                        <a
                          href="./html/product.html?id=${items.id}"
                          style="color: inherit; text-decoration: none"
                        >
                          <img
                            src="${items.img}"
                            alt="${items.name}"
                            style="width: 100%; height: 250px; object-fit: cover"
                            class="pdimg img-responsive"
                          />
                          <p class="pdname px-3" style="height: 50px">${
                            items.name
                          }</p>
                          <i class="pdprice text-danger px-3">${items.price.toLocaleString()}đ</i>
                        </a>
                      </div>
                    </div>
                    `
      )
      .join("");
  }, 1000);

  setTimeout(() => {
    const vopd = document.getElementById("vopd");
    var voData = listVoJson.slice(0, 3);
    console.log(voData);
    vopd.innerHTML = voData
      .map(
        (items, index) =>
          `
                      <div class="col-4 p-3">
                        <div class="border border-1 rounded text-center">
                          <a
                            href="./html/product.html?id=${items.id}"
                            style="color: inherit; text-decoration: none"
                          >
                            <img
                              src="${items.img}"
                              alt="${items.name}"
                              style="width: 100%; height: 250px; object-fit: cover"
                              class="pdimg img-responsive"
                            />
                            <p class="pdname px-3" style="height: 50px">${
                              items.name
                            }</p>
                            <i class="pdprice text-danger px-3">${items.price.toLocaleString()}đ</i>
                          </a>
                        </div>
                      </div>
                      `
      )
      .join("");
  }, 1000);
}, 1000);
