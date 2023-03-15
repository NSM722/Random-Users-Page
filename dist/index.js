"use strict";
const url = `https://randomuser.me/api/?results=6`;
const dataElement = document.querySelector('#container');
const button = document.querySelector('#fetch-data-btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', getData);

function generateHTML(apiData) {
  return apiData.results.map((item) => (
    `<div class="text-center">
      <img src="${item.picture.large}" alt="#">
      <h6>${item.name.first} ${item.name.last}</h6>
      <p class="mb-1"><span class="flag-icon flag-icon-${item.nat.toLowerCase()}"></span></p>
      <i class="fab fa-tiktok ${item.gender}"></i>
      <i class="fab fa-facebook-f ${item.gender}"></i>
      <i class="fab fa-github ${item.gender}"></i>
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