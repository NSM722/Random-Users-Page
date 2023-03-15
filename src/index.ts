const url: string = `https://randomuser.me/api/?results=6`;
const dataElement = document.querySelector('#container');
const button = document.querySelector('#fetch-data-btn');

button?.addEventListener('click', getData)

function generateHTML(apiData: { results: Result[] }): string {
  return apiData.results.map((item: { picture: { large: any; }; name: { first: any; last: any; }; nat: string; gender: any; }) => (
    `<div class="text-center">
      <img src="${item.picture.large}" alt="#">
      <h6>${item.name.first} ${item.name.last}</h6>
      <p class="mb-1"><span class="flag-icon flag-icon-${item.nat.toLowerCase()}"></span></p>
      <i class="fab fa-tiktok ${item.gender}"></i>
      <i class="fab fa-facebook-f ${item.gender}"></i>
      <i class="fab fa-github ${item.gender}"></i>
    </div>`
  )).join('')
}

// Fetching data from the API
function getData(): void {
  let htmlStr: string = ``
  fetch(url)
    .then(response => response.json())
    .then(data => {
      htmlStr += generateHTML(data)
      if (dataElement) {
        dataElement.innerHTML = htmlStr;
      }
    })
    .catch(err => console.error(err))
}

// API data.results interface
interface Result {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}