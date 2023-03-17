"use strict";
const url = `https://randomuser.me/api/?results=10`;
const dataElement = document.querySelector('#container');
const button = document.querySelector('#fetch-data-btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', getData);
function generateHTML(apiData) {
  return apiData.results.map((item) => (`
      <div 
        class="w-48 p-2 text-slate-200 text-center bg-slate-700 rounded-lg shadow-md hover:cursor-pointer shadow-black hover:bg-slate-900 hover:translate-y-2 hover:translate-x-2 hover:ease-in duration 300">
        <img src="${item.picture.large}" 
          alt="A passport sized picture of ${item.name.first} ${item.name.last}" 
          class="w-full">
        <div class="text-start">
          <p class="mt-4"><i class="fa-solid fa-user"></i>&nbsp;${item.name.first} ${item.name.last}</p>
          <p class="mt-2"><i class="fa-solid fa-location-crosshairs"></i>&nbsp;<span class="fi fi-${item.nat.toLowerCase()}"></span>
          &nbsp;${item.location.state}
          </p>
          <p class="mt-2"><i class="fa-solid fa-phone-volume"></i>:&nbsp; ${item.phone}</p>
        </div>
      </div>`)).join('');
}
function getData() {
  let htmlStr = ``;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      htmlStr += generateHTML(data);
      if (dataElement) {
        dataElement.innerHTML = htmlStr;
      }
    })
    .catch(err => console.error(err));
}
//# sourceMappingURL=index.js.map