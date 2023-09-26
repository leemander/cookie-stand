/* 

My attempt 

const tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  generateCustomers: function () {
    const min = Math.ceil(this.minCustomers);
    const max = Math.floor(this.maxCustomers);

    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  hourlySales: [],
};

for (let i = 6; i <= 19; i++) {
  tokyo.hourlySales.push(Math.floor(tokyo.avgSale * tokyo.generateCustomers()) + 1);
}

const salesEl = document.getElementById("sales");

const tokyoEl = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = "Tokyo";
tokyoEl.appendChild(h2);

const ul = document.createElement("ul");

function formatTime(num) {
  if (num < 1000) {
    return `0${num}`;
  } else {
    return num;
  }
}

for (let i = 0; i < tokyo.hourlySales.length; i++) {
  time = 600 + i * 100;
  const li = document.createElement("li");
  li.innerText = `${formatTime(time)}: ${tokyo.hourlySales[i]} cookies`;
  ul.appendChild(li);
}

//add total sum
const li = document.createElement("li");
let total = 0;
for (let i = 0; i < tokyo.hourlySales.length; i++) {
  total += tokyo.hourlySales[i];
}
li.textContent = `Total: ${total}`;
ul.appendChild(li);

tokyoEl.appendChild(ul);

//finally add full article element to document
salesEl.appendChild(tokyoEl);

*/

//Code-along

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// create our first shop

/*const seattle = {
  location: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};*/

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Code-along ends

/*const tokyo = {
  location: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};

const dubai = {
  location: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};

const paris = {
  location: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
  calculateSales: function () {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      const customers = randomNumber(this.minCust, this.maxCust);
      const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
      this.customersPerHour.push(customers);
      this.cookiesPerHour.push(cookiesSold);
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
};

const lima = {
  location: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSold: 0,
};*/

function Location(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSold = 0;
}

Location.prototype.calculateSales = function () {
  let total = 0;
  for (let i = 0; i < hours.length; i++) {
    const customers = randomNumber(this.minCust, this.maxCust);
    const cookiesSold = Math.floor(customers * this.avgCookiesPerCust) + 1;
    this.customersPerHour.push(customers);
    this.cookiesPerHour.push(cookiesSold);
    total += cookiesSold;
  }
  this.totalCookiesSold = total;
};

const salesTable = document.getElementById("sales");

Location.prototype.displaySalesData = function () {
  const row = document.createElement("tr");

  const locationLabel = document.createElement("td");
  locationLabel.textContent = this.location;
  row.appendChild(locationLabel);

  //looping through cookiesPerHour to populate row with td elements

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const cell = document.createElement("td");
    cell.innerText = this.cookiesPerHour[i];
    row.appendChild(cell);
  }

  //add total sum to end of row
  const totalCell = document.createElement("td");
  totalCell.textContent = this.totalCookiesSold;
  row.appendChild(totalCell);

  //finally add full row element to document
  salesTable.appendChild(row);
};

const seattle = new Location("Seattle", 23, 65, 6.3);
const tokyo = new Location("Tokyo", 3, 24, 1.2);
const dubai = new Location("Dubai", 11, 38, 3.7);
const paris = new Location("Paris", 20, 38, 2.3);
const lima = new Location("Lima", 2, 16, 4.6);

const locations = [seattle, tokyo, dubai, paris, lima];

function createTableHeaders() {
  const row = document.createElement("tr");
  row.appendChild(document.createElement("td")); //adds a blank cell to the start of the header row

  for (let i = 0; i < hours.length; i++) {
    const header = document.createElement("th");
    header.textContent = hours[i];
    row.appendChild(header);
  }

  const totalHeader = document.createElement("th");
  totalHeader.textContent = "Total";
  row.appendChild(totalHeader);

  salesTable.appendChild(row);
}

function generateTotals() {
  const row = document.createElement("tr");

  const labelCell = document.createElement("td");
  labelCell.textContent = "Total";
  row.appendChild(labelCell);

  let finalTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    const cell = document.createElement("td");
    let total = 0;
    for (let j = 0; j < locations.length; j++) {
      total += locations[j].cookiesPerHour[i];
    }
    finalTotal += total;
    cell.textContent = total;
    row.appendChild(cell);
  }

  const finalTotalCell = document.createElement("td");
  finalTotalCell.textContent = finalTotal;
  row.appendChild(finalTotalCell);

  salesTable.appendChild(row);
}

function renderTable() {
  createTableHeaders();

  for (let i = 0; i < locations.length; i++) {
    locations[i].calculateSales();
    locations[i].displaySalesData();
  }

  generateTotals();
}

renderTable();
