'use strict';
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables for DOM access and such

var SalmonForm = document.getElementById('salmon-form');
var businessHour = ['6am: ','7am: ', '8am: ', '9am: ','10am:','11am:', '12pm:', '1pm: ','2pm: ','3pm:', '4pm:', '5pm: ', '6pm: ','7pm: ', '8pm: '];
var allStores = [];
var cookiesTable = document.getElementById('cookies');

//var Storeloc = function
var Storeloc = function(storeName, minCustPerHr, maxCustPerHr, avgCookiesPerCust) {
  this.storeName = storeName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randomCustPerHour = [];
  this.totalCookies = [];
  this.storeTotCookies = 0;
  allStores.push(this); //this pushes the data above into the all stores array
  this.calcRandCustPerHr = function() {
    //console.log('Im in the random customer calc');
      // This will return random number of customers
    for (var i = 0; i < businessHour.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1)) + this.minCustPerHr);
      //console.log('Im in the random customer calc');
    }
  }
  this.calcRandCustPerHr();

  this.calcTotalCookiesSoldEachHour = function() {
    //console.log('im in the calculate cookies');
    for (var i = 0; i < businessHour.length; i++) {
      this.totalCookies.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.storeTotCookies += this.totalCookies[i];
      //console.log('inside the calculate total cookie', this.storeTotCookies);
      //console.log(this.totalCookies[i]);
    }
  }
  this.calcTotalCookiesSoldEachHour();
  //console.log('allStores push', allStores[0]);
}
function storeloc() { //this is outside the constructor
  new Storeloc('1st and Pike', 23, 65, 6.3);
  new Storeloc('SeaTac Airport', 3, 24, 1.2);
  new Storeloc('Seattle Center', 11, 38, 3.7);
  new Storeloc('Capitol Hill', 20, 38, 2.3);
  new Storeloc('Alki', 2, 16, 4.6);
}

  //this is the header row function
function headerRow() { //eslint-disable-line
  var cookiesTable = document.getElementById('cookies');
  //console.log('I am in the headerRow function');

//We need to make the header row first  this is the first column//
  var trEl = document.createElement('tr'); //create tr
  var thEl = document.createElement ('th'); // create the th element
  thEl.textContent = '';  // first header row element is blank
  trEl.appendChild(thEl);
  cookiesTable = document.getElementById ('cookies');
 //added the table row to the table

    // create a for loop to fill in all the hours in the header row
  for (var i=0; i < businessHour.length; i++) {
    thEl = document.createElement ('th'); // create the th element
    thEl.textContent = businessHour[i];  // create header rows
    trEl.appendChild(thEl);
  }
  thEl = document.createElement ('th'); // create the last header row element
  thEl.textContent = 'Daily Location Total';  // create header rows
  trEl.appendChild(thEl);
  cookiesTable.appendChild(trEl); //added the table row to the table
} //end of header row function

//Store row data
function storeRows() { //eslint-disable-line
  for (var j = 0; j < allStores.length; j++) {//this spins through allstore array to get the store name
    var sumTotCookies = 0;
    //console.log('we are in storeRows')
    var trEl = document.createElement('tr'); //this creates the row
    var tdEl = document.createElement ('td'); // this creates the data
    tdEl.textContent = allStores[j].storeName; // this indicated the content
    trEl.appendChild(tdEl);

    for (var k = 0; k < allStores[j].totalCookies.length; k++) { //this spins through the array of total cookies for eah location
      sumTotCookies += allStores[j].totalCookies[k];
      var tdEc = document.createElement ('td'); //used different variable so I didnt' overwrite it
      tdEc.textContent = allStores[j].totalCookies[k];
      trEl.appendChild(tdEc);
    }
    var tdEd = document.createElement ('td'); //used different variable so I didn't overwrite it
    tdEd.textContent = sumTotCookies;
    trEl.appendChild(tdEd);   //moved sumTotCookies to the row
    cookiesTable.appendChild(trEl); // move the row to the table
  }
}

//Store footer data
function footerRows () {
  var totalOfTotals = 0;
  console.log(totalOfTotals);
  var trEl = document.createElement('tr'); //this creates the row
  var tdEl = document.createElement ('td'); // this creates the data //this creates the data  ???????
  tdEl.textContent = ('Store Totals');//this indicates the content
  trEl.appendChild(tdEl); //this appends to the row

  for (var i = 0; i < businessHour.length; i++) {
    var footerTotal = 0;
    console.log('first time footer should equal 0', footerTotal);

    for(var j = 0; j < allStores.length; j++) {//this adds the data in total cookies for each store location
      console.log(allStores[j][i]);
      footerTotal += allStores[j].totalCookies[i];
    }
    totalOfTotals += footerTotal;
    console.log('footer total', footerTotal)
    var tdEc = document.createElement ('td'); //used different variable so I didnt' overwrite it
    tdEc.textContent = footerTotal;
    trEl.appendChild(tdEc);
  }
  var tdEf = document.createElement ('td');
  tdEf.textContent = totalOfTotals;
  trEl.appendChild(tdEf);
  cookiesTable.appendChild(trEl);
}

//This is my function declaration for the event handler
function handlerInfoSubmit(event) {
  event.preventDefault(); //gotta have it for this purpose. prevents page reload on a 'submit' event

  if (!event.target.storeName.value || !event.target.minCustPerHr.value ||
    !event.target.maxCustPerHr.value || !event.target.avgCookiesPerCust.value) {
    return alert('Fields cannot be empty!');
  }
    //variables for all the values coming in for storeName, min, max, avg.
  var formStoreName = event.target.storeName.value;
  var formMinCustPerHr = event.target.minCustPerHr.value;
  var formMaxCustPerHr = event.target.maxCustPerHr.value;
  var formAvgCookiesPerHr = event.target.avgCookiesPerCust.value;

  //allStores.innerHTML = '';

  // console.log(
  new Storeloc(formStoreName, formMinCustPerHr, formMaxCustPerHr, formAvgCookiesPerHr);

  cookiesTable.innerHTML = '';

  headerRow();
  storeRows();
  //footerRows();
}
//SalmonForm.addEventListener('submit', handlerInfoSubmit);
//This is where all my calls are made, these are all my actions
storeloc();
headerRow();
storeRows();
footerRows();

//Event Listerner is always listening
SalmonForm.addEventListener('submit', handlerInfoSubmit);
