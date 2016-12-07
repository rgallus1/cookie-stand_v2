'use strict';
//var randCustPerHr;
var businessHour = ['6am: ','7am: ', '8am: ', '9am: ','10am:','11am:', '12pm:', '1pm: ','2pm: ','3pm:', '4pm:', '5pm: ', '6pm: ','7pm: ', '8pm: '];
var allStores = [];
var cookiesTable = document.getElementById('cookies');

var Storeloc = function (storeName, minCustPerHr, maxCustPerHr, avgCookiesPerCust) {
  this.storeName = storeName;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.randomCustPerHour = [];
  this.totalCookies = [];
  this.storeTotCookies = 0;

  this.randCustPerHr = function() {
    console.log('Im in the random customer calc');
      // This will return random number of customers
    for (var i=0; i < businessHour.length; i++) {
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1)) + this.minCustPerHr);
      console.log('Im in the random customer calc');
    }
  }
  this.calcTotalCookiesSoldEachHour = function() {
    this.randCustPerHr();
    console.log('im in the calulate cookies');
    for (var i=0; i < businessHour.length; i++) {
      this.totalCookies.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.storeTotCookies += this.totalCookies[i];
      //console.log('inside the calculate total cookie', this.storeTotCookies);
    }
  }
  this.calcTotalCookiesSoldEachHour();
}
  //
  // this.render = function() {
  //   var trEl = document.createElement('tr');
  //   var tdEl = document.createElement('td');
  //   tdEl.textContent = this.storeName;
  //   trEl.appendChild(tdEl);
  //   for (var i = 0; i < allStores[i].totalCookies.length; i++) {
  //     trEl = document.creatElement('tr');
  //     tdEl = document.createElement('td');
  //     tdEl.textContent = allStores[i].totalCookies;
  //     trEl.appendChild(tdEl);
  //     console.log('I\'m in the render function');
  //     console.log(this);
  //   }
  // }
    //trEl.appendChild(tdEl);
    //cookiesTable.appendChild(trEl);
    //for (var i=0; i < allStores[i].totalCookies.length; i++) {
      //trEl = document.creatElement('tr');
      // tdEl = document.createElement ('td');
      // tdEl.textContent = allStores[i].totalCookies;
        //tdEl.textContent = allStores[i].totalCookies.allStores.totalCookies;
      //trEl.appendChild(tdEl);
    //cookiesTable.appendChild(trEl);
  //}
  new Storeloc('1st and Pike', 23, 65, 6.3);
  new Storeloc('SeaTac Airport', 3, 24, 1.2);
  new Storeloc('Seattle Center', 11, 38, 3.7);
  new Storeloc('Capitol Hill', 20, 38, 2.3);
  new Storeloc('Alki', 2, 16, 4.6);

  //this is the header row function
  function headerRow() { //eslint-disable-line
    console.log('I am in the headerRow function');

    //We need to make the header row first  this is the first column//
    var trEl = document.createElement('tr'); //create tr
    var thEl = document.createElement ('th'); // create the th element
    thEl.textContent = '';  // first header row element is blank
    trEl.appendChild(thEl);
    cookiesTable = document.getElementById ('cookies');
    //cookiesTable.appendChild(trEl); //added the table row to the table

    // create a for loop to fill in all the hours in the header row
    for (var i=0; i < businessHour.length; i++) {
      //trEl = document.createElement('tr'); //create tr
      thEl = document.createElement ('th'); // create the th element
      thEl.textContent = businessHour[i];  // create header rows
      trEl.appendChild(thEl);
      //cookiesTable.appendChild(trEl); //added the table row to the table
    }
    //trEl = document.createElement('tr'); //create tr
    thEl = document.createElement ('th'); // create the last header row element
    thEl.textContent = 'Daily Location Total';  // create header rows
    trEl.appendChild(thEl);
    cookiesTable.appendChild(trEl); //added the table row to the table
  } //end of header row function
  headerRow();

//  allStores.push(this);
//
// function storeRows() { //eslint-disable-line
//   var tdEl;
//   //var trEl;
//   for (var i=0; i < allStores.length; i++) {
//     //trEl = document.createElement('tr');
//     tdEl = document.createElement ('td');
//     tdEl.textContent = allStores[i].render();
//   }
// }
//   storeRows();
// }
