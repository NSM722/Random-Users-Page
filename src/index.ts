const url: string = `https://randomuser.me/api/?results=10`;
const dataElement = document.querySelector('#container');
const button = document.querySelector('#fetch-data-btn');

button?.addEventListener('click', getData)

function generateHTML(apiData: { results: Person[] }): string {
  return apiData.results.map((item: { picture: { large: string; }; name: { first: string; last: string; }; email: string; phone: string; nat: string; location: { state: string; } }) => (
    `
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
interface Person {
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