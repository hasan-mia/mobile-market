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
        div.classList.add('col-lg-4')
        div.innerHTML = `
        <div class="card py-1">
            <img src="${searchresult.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title fw-bold pink">${searchresult.phone_name}</h4>
                 <p class="card-text text-justify fs-5">${searchresult.brand}</p>
            </div>
            <div class="card-footer w-100 text-center">
                <button class="btn btn-primary text-uppercase" onclick="phoneDetails('${searchresult.slug}')"> View More <i class="fas fa-eye fa-1x"></i> </button>
            </div>
        </div>
    `
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
  // Destructure
  // const {WLAN, Bluetooth, GPS, NFC, Radio, USB} = details.others;

  row.textContent = "";
  errorId.textContent = "";
  const div = document.createElement("div");
  div.classList.add("col-lg-12");
  div.innerHTML = `
            <div class="card mb-5">
                <div class="row g-0">
                    <div class="col-lg-4 col-md-6 col-12">
                        <img src="${details.image}" class="img-fluid rounded-start h-100 w-100 py-3 ps-1" alt="...">
                    </div>
                    <div class="col-lg-8 col-md-6 col-12">
                        <div class="card-body">
                            <h2 class="card-title fw-bold pink">${details?.name}</h2>
                            <p class="card-text text-justify fs-5">${details?.releaseDate}</p>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active"><a href="index.html" class="text-decoration-none pink">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">${details?.brand}</li>
                                </ol>
                            </nav>
                            <p class="card-text text-justify fs-5">${details?.brand}</p>
                        </div>
                    </div>
                    <div class="cart text-center d-flex justify-content-between px-3">
                        <a class="card-text text-center" href="#" target="_blank"> <i class="fab fa-youtube-square fa-3x pink"></i> </a>
                        <button class="btn bg-pink text-white fs-4 fw-bold" onclick="#">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
  row.appendChild(div);
};