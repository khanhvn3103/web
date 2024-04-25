const pf = document.getElementById("pf");
const { name, email, phone, address} = JSON.parse(localStorage.getItem("userLogin")) ;
console.log(name);
  pf.innerHTML = `
    <div class="row">
        <div class="col-md-3">
            <div id="headerProfile" class="text-center">
            <img
                src="../img/avt.jpg"
                alt="avatar"
                class="img-fluid rounded-circle"
                style = "width: 300px; height: 300px;"
            />
            <h3 class="mt-3">${name}</h3>
            <p class="mb-0">${email}</p>
            </div>
        </div>
        <div class="col-md-9">
            <div id="profileContent">
            <h2 class="mb-4">Thông tin mua hàng</h2>
            <div id="profileIf">
                <div class="row mb-3">
                <div class="col-4">
                    <h5 class="mb-0"><b>Họ và tên:</b></h5>
                </div>
                <div class="col-8">
                    <p class="mb-0">${name}</p>
                </div>
                </div>
                <div class="row mb-3">
                <div class="col-4">
                    <h5 class="mb-0"><b>Điện thoại:</b></h5>
                </div>
                <div class="col-8">
                    <p class="mb-0">${phone}</p>
                </div>
                </div>
                <div class="row">
                <div class="col-4">
                    <h5 class="mb-0"><b>Địa chỉ:</b></h5>
                </div>
                <div class="col-8">
                    <p class="mb-0">${address}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
`;