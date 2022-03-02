/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// ===== Variable =======
const row = document.getElementById('row');
const searchId = document.getElementById('search');
const loaderId = document.getElementById("loader");
const marqueeId = document.getElementById("marquee");
const errorId = document.getElementById('error');
// =================Error=================
const showError = () => {
  errorId.className = "d-block text-center text-danger fw-bold fs-4";
};

// =================Search Phone===============
const searchBar = () => {
  const searchText = (searchId.value).toLowerCase();
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  searchId.value = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.data.length === 0 || searchText === '') {
        loaderId.className = "d-block";
        errorId.className = "d-block text-center text-danger fw-bold fs-4";
        row.innerHTML = '';
      } else {
        searchResult(data.data.slice(0, 20)).catch((error) => showError(error));
        errorId.className = "d-none";
        loaderId.className = "d-none";
      }
    })  
};



const searchResult = (searchresults) => {
  console.log(searchresults);
   loaderId.className = "d-none";
   errorId.className = "d-none";
   marqueeId.className = 'd-none';
    searchId.value = '';
    searchresults.forEach(searchresult => {
        const div = document.createElement('div');
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card h-75 px-2 py-0 mb-0">
            <img src="${searchresult.image}" class="card-img-top h-75 p-3" alt="...">
            <div class="card-body">
                <h2 class="card-title fw-bold fs-5">${searchresult.phone_name}</h2>
                 <p class="card-text text-justify fs-6">${searchresult.brand}</p>
            </div>
            <div class="card-footer w-100 d-flex justify-content-between">
                <button class="btn btn-primary text-uppercase text-center" onclick="phoneDetails('${searchresult.slug}')"> View Details </button>
                <button class="btn btn-primary text-uppercase" onclick="addCart()"> <i class="fas fa-cart-arrow-down fa-x"></i> </button>
            </div>
        </div>
    `;
    row.appendChild(div);
    
    })
};
// ==============Phone Details================
const phoneDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
      .then((res) => res.json())
      .then((data) => phoneShow(data.data))
      .catch((error) => showError(error));
}
const phoneShow = (details) => {
  loaderId.className = "d-none";
  errorId.className = "d-none";
  marqueeId.className = "d-none";
  row.innerHTML = "";
  searchId.value = "";
  const div = document.createElement("div");
  div.classList.add("col-lg-12");
  div.innerHTML = `
        <div class="card mb-5">
            <div class="row g-0">
                <div class="col-lg-4 col-md-6 col-12">
                    <img src="${
                      details.image
                    }" class="img-fluid rounded-start h-100 w-100 py-3 ps-1" alt="Image">
                </div>
                <div class="col-lg-8 col-md-6 col-12">
                    <div class="card-body">
                        <h2 class="card-title fw-bold pink">${
                          details?.name
                        }</h2>
                        <p class="card-text text-justify fs-6">${
                          details?.releaseDate ?? "Not found release date"
                        }</p>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active"><a href="index.html" class="text-decoration-none pink">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">${
                                  details?.brand ?? "Not found Brand"
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
                                <tr id="sensor">
                                   <th class="fs-6 fw-bold">Sensors: </th>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="cart text-center d-md-flex justify-content-between px-3">
                    <div class="d-flex justify-content-center">
                        <a class="card-text text-center text-decoration-none px-lg-2" href="#"> <i class="fab fa-facebook-square fa-2x fb"></i> </a>
                        <a class="card-text text-center text-decoration-none px-lg-2" href="#"> <i class="fab fa-instagram fa-2x insta"></i> </a>
                        <a class="card-text text-center text-decoration-none px-lg-2" href="#"> <i class="fab fa-twitter-square fa-2x twit"></i> </a>
                        <a class="card-text text-center text-decoration-none px-lg-2" href="#"> <i class="fab fa-whatsapp fa-2x wapp"></i> </a>
                        <a class="card-text text-center text-decoration-none px-lg-2" href="#"> <i class="fab fa-youtube-square fa-2x ytube"></i> </a>
                        <a class="card-text text-center text-decoration-none px-lg-2" href="#"> <i class="fas fa-print fa-2x ytube"></i> </a>
                    </div>
                    <button class="btn btn-primary fs-5 fw-bold w-sm-100 mt-lg-0 mt-3 text-uppercase">Buy Now</button>
                </div>
            </div>
        </div>
    `;
  row.appendChild(div);
// Phone Sensor 
  const sensors = details?.mainFeatures?.sensors;
  if (sensors !== '') {
      sensors.forEach((sensor) => {
        const sensorId = document.getElementById("sensor");
        const li = document.createElement("li");
        li.innerHTML += sensor + ", ";
        sensorId.appendChild(li);
      });
  }
  else{
      const sensorId = document.getElementById("sensor");
      const li = document.createElement("li");
      li.innerText = "No";
      sensorId.appendChild(li);
  }
  //  errorId.textContent = "";
};

// =============Add Cart=============
const cartId = document.getElementById('cart');
let cart = parseInt(cartId.innerText);
const addCart = () => {
    cart++;
    cartId.innerText = cart;
}
