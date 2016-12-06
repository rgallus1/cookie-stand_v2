'use strict';
//var randCustPerHr;
var businessHour = ['6am:','7am:', '8am:', '9am','10am:','11am:', '12pm:', '1pm','2pm:','3pm:', '4pm:', '5pm', '6pm','7pm', '8pm'];
var alki = {
  minCustPerHr:2,
  maxCustPerHr:16,
  avgCookiesPerCust:4.6,
  totalCookies:[],
  randCustPerHr:function() {
    console.log('hi');

      // This will return random number of customers
    for (var i=0; i < businessHour.length; i++) {
      var random = Math.ceil(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1) + this.minCustPerHr);
      this.totalCookies.push(Math.ceil(random * this.avgCookiesPerCust));
      //console.log(this.totalCookies);
      //console.log(this.totalCookies[i]);
    }
  },
//this takes the data above and renders to display on the browser
  render:function() {
    for (var i = 0; i < this.totalCookies.length; i++) {
      //console.log(this.totalCookies);
      //console.log(this.totalCookies[i]);
      var saveIl = document.getElementById ('alki');
      var liEl = document.createElement('li');
      console.log (saveIl);
      console.log(liEl);
      liEl.textContent = this.totalCookies[i];
      saveIl.appendChild(liEl);
    }
  }
};
alki.randCustPerHr();
alki.render();
