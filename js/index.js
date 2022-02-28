/* 
 * Author: Hasan
 * Github: https://github.com/hasanrafi69
 * Email: hasanrafi69@gmail.com
 * Mobile: +880-161-782323
 */
// row Variable
const row = document.getElementById('row');
const searchId = document.getElementById('search');
const errorId = document.getElementById('error');
// =================Search Product===============
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
    console.log(searchresults)
    row.textContent = '';
    searchId.value = '';
    searchresults.forEach(searchresult => {
        // console.log(searchresult.phone_name)
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
                <button class="btn btn-primary text-uppercase" onclick="phoneDetails(${searchresult.slug})"> View More <i class="fas fa-eye fa-1x"></i> </button>
            </div>
        </div>
    `
        row.appendChild(div);
    })
}