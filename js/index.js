/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// row Variable
const row = document.getElementById('row');
// const gallery = document.getElementById('gallery');
const searchId = document.getElementById('search');
const errorId = document.getElementById('error');
// =================Search Phone===============
const searchBar = () => {
    const searchValue = searchId.value;
    if (searchValue == '') {
        errorId.className = 'd-block text-center text-danger fw-bold fs-4'

    } else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
            .then(res => res.json())
            .then(data => searchResult(data.data))
    }

};

const searchResult = (searchresults) => {
    // console.log(searchresults)
    row.textContent = '';
    // gallery.textContent = '';
    searchId.value = '';
    searchresults.forEach(searchresult => {
        // console.log(searchresult.slug)
        const div = document.createElement('div');
        div.classList.add('col-lg-3')
        div.innerHTML = `
        <div class="card py-1">
            <img src="${searchresult.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold pink">${searchresult.phone_name}</h4>
                 <p class="card-text text-justify fs-5">${searchresult.brand}</p>
            </div>
            <div class="card-footer w-100 d-flex justify-content-between">
                <button class="btn btn-primary text-uppercase text-center" onclick="phoneDetails('${searchresult.slug}')"> Buy Now <i class="fas fa-buy fa-1x"></i> </button>
                <button class="btn btn-primary text-uppercase"> <i class="fas fa-heart fa-1x" id="wishlist"></i> </button>
            </div>
        </div>
    `;
        row.appendChild(div);
    })
};
// ==============Phone Details================
const phoneDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(res => res.json())
        .then(data => phoneShow(data.data))
}
const phoneShow = (details) => {
  //   console.log(details?.others?.WLAN ?? `NO`);
  // console.log(details ?.mainFeatures ?.chipSet ?? `NO`);
  // const sensors = details ?.mainFeatures ?.sensors;
  // const sensor = sensors.map(sensor => sensor);
  // for (const sensorvalue of sensor) {
  //     console.log(sensorvalue);
  // }

    row.textContent = "";
    errorId.textContent = "";
    const div = document.createElement("div");
    div.classList.add("col-lg-12");
    div.innerHTML = `
        <div class="card mb-5">
            <div class="row g-0">
                <div class="col-lg-4 col-md-6 col-12">
                    <img src="${
                      details.image
                    }" class="img-fluid rounded-start h-100 w-100 py-3 ps-1" alt="...">
                </div>
                <div class="col-lg-8 col-md-6 col-12">
                    <div class="card-body">
                        <h2 class="card-title fw-bold pink">${
                          details?.name
                        }</h2>
                        <p class="card-text text-justify fs-6">${
                          details?.releaseDate
                        }</p>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active"><a href="index.html" class="text-decoration-none pink">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">${
                                  details?.brand
                                }</li>
                            </ol>
                        </nav>
                       
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th class="fs-6 fw-bold">Brand: </th>
                                    <td>${details?.brand ?? `NO`}</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">ChipSet: </th>
                                    <td>${
                                      details?.mainFeatures?.chipSet ?? `NO`
                                    }</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">Storage: </th>
                                    <td>${
                                      details?.mainFeatures?.storage ?? `NO`
                                    }</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">DisplaySize: </th>
                                    <td>${
                                      details?.mainFeatures?.displaySize ?? `NO`
                                    }</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">Memory: </th>
                                    <td>${
                                      details?.mainFeatures?.memory ?? `NO`
                                    }</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">WLAN: </th>
                                    <td>${details?.others?.WLAN ?? `NO`}</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">Bluetooth: </th>
                                    <td>${
                                      details?.others?.Bluetooth ?? `NO`
                                    }</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">GPS: </th>
                                    <td>${details?.others?.GPS ?? `NO`}</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">Radio: </th>
                                    <td>${details?.others?.Radio ?? `NO`}</td>
                                </tr>
                                <tr>
                                    <th class="fs-6 fw-bold">USB: </th>
                                    <td>${details?.others?.USB ?? `NO`}</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="cart text-center d-flex justify-content-between px-3">
                    <div class="d-flex justify-content-center">
                        <a class="card-text text-center text-decoration-none px-2" href="#" target="_blank"> <i class="fab fa-facebook-square fa-2x fb"></i> </a>
                        <a class="card-text text-center text-decoration-none px-2" href="#" target="_blank"> <i class="fab fa-instagram fa-2x insta"></i> </a>
                        <a class="card-text text-center text-decoration-none px-2" href="#" target="_blank"> <i class="fab fa-twitter-square fa-2x twit"></i> </a>
                        <a class="card-text text-center text-decoration-none px-2" href="#" target="_blank"> <i class="fab fa-whatsapp fa-2x wapp"></i> </a>
                        <a class="card-text text-center text-decoration-none px-2" href="#" target="_blank"> <i class="fab fa-youtube-square fa-2x ytube"></i> </a>
                        <a class="card-text text-center text-decoration-none px-2" href="#" target="_blank"> <i class="fas fa-print fa-2x ytube"></i> </a>
                    </div>
                    <button class="btn btn-primary fs-5 fw-bold" onclick="addCart()">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    row.appendChild(div);
};

// =============Add Cart=============
const cartId = document.getElementById('cart');
let cart = parseInt(cartId.innerText);
const addCart = () => {
    cart++;
    cartId.innerText = cart;
}
