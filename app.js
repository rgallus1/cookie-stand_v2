'use strict';
//var randCustPerHr;
var businessHour = ['6am: ','7am: ', '8am: ', '9am: ','10am:','11am:', '12pm:', '1pm: ','2pm: ','3pm:', '4pm:', '5pm: ', '6pm: ','7pm: ', '8pm: '];

//Store Location is 1st and Pike

var first = {
  minCustPerHr:23,
  maxCustPerHr:65,
  avgCookiesPerCust:6.3,
  totalCookies:[],
  storeTotCookies:0,
  randCustPerHr:function() {
      // This will return random number of customers
    for (var i=0; i < businessHour.length; i++) {
      var random = Math.ceil(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1) + this.minCustPerHr);
      this.totalCookies.push(Math.ceil(random * this.avgCookiesPerCust));
      this.storeTotCookies = this.storeTotCookies + this.totalCookies[i];
      console.log('inside the calculate function', this.storeTotCookies);
      //console.log(this.totalCookies[i]);
    }
  },
//this takes the data above and renders to display on the browser
  render:function() {
    for (var i = 0; i < this.totalCookies.length; i++) {
      for (var i = 0; i < businessHour.length; i++) {
      //console.log(this.totalCookies);
      //console.log(this.totalCookies[i]);
        var saveIl = document.getElementById ('first');
        var liEl = document.createElement('li');
        //console.log (saveIl);
        //console.log(liEl);
        liEl.textContent = businessHour[i] + ' ' + this.totalCookies[i] + ' cookies';
        saveIl.appendChild(liEl);
      }
      liEl.textContent = 'Total: ' + this.storeTotCookies + ' cookies';
      console.log('inside the render function', this.storeTotCookies);
      saveIl.appendChild(liEl);
    }
  }
};
first.randCustPerHr();
first.render();

//This is for the Seatac Location
var seatac = {
  minCustPerHr:2,
  maxCustPerHr:16,
  avgCookiesPerCust:4.6,
  storeTotCookies:0,
  totalCookies:[],
  randCustPerHr:function() {
      // This will return random number of customers
    for (var i=0; i < businessHour.length; i++) {
      var random = Math.ceil(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1) + this.minCustPerHr);
      this.totalCookies.push(Math.ceil(random * this.avgCookiesPerCust));
      this.storeTotCookies = this.storeTotCookies + this.totalCookies[i];
      console.log('inside the calculate function', this.storeTotCookies);
      //console.log(this.totalCookies[i]);
    }
  },
//this takes the data above and renders to display on the browser
  render:function() {
    for (var i = 0; i < this.totalCookies.length; i++) {
      for (var i = 0; i < businessHour.length; i++) {
      //console.log(this.totalCookies);
      //console.log(this.totalCookies[i]);
        var saveIl = document.getElementById ('seatac');
        var liEl = document.createElement('li');
        //console.log (saveIl);
        //console.log(liEl);
        liEl.textContent = businessHour[i] + ' ' + this.totalCookies[i] + ' cookies';
        saveIl.appendChild(liEl);
      }
      liEl.textContent = 'Total: ' + this.storeTotCookies + ' cookies';
      console.log('inside the render function', this.storeTotCookies);
      saveIl.appendChild(liEl);
    }
  }
};
seatac.randCustPerHr();
seatac.render();

//This is for the Seattle Center Location
var center = {
  minCustPerHr:2,
  maxCustPerHr:16,
  avgCookiesPerCust:4.6,
  storeTotCookies:0,
  totalCookies:[],
  randCustPerHr:function() {
    console.log('hi');

      // This will return random number of customers
    for (var i=0; i < businessHour.length; i++) {
      var random = Math.ceil(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1) + this.minCustPerHr);
      this.totalCookies.push(Math.ceil(random * this.avgCookiesPerCust));
      this.storeTotCookies = this.storeTotCookies + this.totalCookies[i];
      console.log('inside the calculate function', this.storeTotCookies);
      //console.log(this.totalCookies[i]);
    }
  },
//this takes the data above and renders to display on the browser
  render:function() {
    for (var i = 0; i < this.totalCookies.length; i++) {
      for (var i = 0; i < businessHour.length; i++) {
      //console.log(this.totalCookies);
      //console.log(this.totalCookies[i]);
        var saveIl = document.getElementById ('center');
        var liEl = document.createElement('li');
        //console.log (saveIl);
        //console.log(liEl);
        liEl.textContent = businessHour[i] + ' ' + this.totalCookies[i] + ' cookies';
        saveIl.appendChild(liEl);
      }
      liEl.textContent = 'Total: ' + this.storeTotCookies + ' cookies';
      console.log('inside the render function', this.storeTotCookies);
      saveIl.appendChild(liEl);
    }
  }
};
center.randCustPerHr();
center.render();

//This is for the Capitol Hill Location
var capitol = {
  minCustPerHr:2,
  maxCustPerHr:16,
  avgCookiesPerCust:4.6,
  storeTotCookies:0,
  totalCookies:[],
  randCustPerHr:function() {

      // This will return random number of customers
    for (var i=0; i < businessHour.length; i++) {
      var random = Math.ceil(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1) + this.minCustPerHr);
      this.totalCookies.push(Math.ceil(random * this.avgCookiesPerCust));
      this.storeTotCookies = this.storeTotCookies + this.totalCookies[i];
      console.log('inside the calculate function', this.storeTotCookies);
      //console.log(this.totalCookies[i]);
    }
  },
//this takes the data above and renders to display on the browser
  render:function() {
    for (var i = 0; i < this.totalCookies.length; i++) {
      for (var i = 0; i < businessHour.length; i++) {
      //console.log(this.totalCookies);
      //console.log(this.totalCookies[i]);
        var saveIl = document.getElementById ('capitol');
        var liEl = document.createElement('li');
        //console.log (saveIl);
        //console.log(liEl);
        liEl.textContent = businessHour[i] + ' ' + this.totalCookies[i] + ' cookies';
        saveIl.appendChild(liEl);
      }
      liEl.textContent = 'Total: ' + this.storeTotCookies + ' cookies';
      console.log('inside the render function', this.storeTotCookies);
      saveIl.appendChild(liEl);
    }
  }
};
capitol.randCustPerHr();
capitol.render();

//This is for the Alki Location
var alki = {
  minCustPerHr:2,
  maxCustPerHr:16,
  avgCookiesPerCust:4.6,
  storeTotCookies:0,
  totalCookies:[],
  randCustPerHr:function() {

      // This will return random number of customers
    for (var i=0; i < businessHour.length; i++) {
      var random = Math.ceil(Math.random() * (this.maxCustPerHr - this.minCustPerHr+1) + this.minCustPerHr);
      this.totalCookies.push(Math.ceil(random * this.avgCookiesPerCust));
      this.storeTotCookies = this.storeTotCookies + this.totalCookies[i];
      console.log('inside the calculate function', this.storeTotCookies);
      //console.log(this.totalCookies[i]);
    }
  },
//this takes the data above and renders to display on the browser
  render:function() {
    for (var i = 0; i < this.totalCookies.length; i++) {
      for (var i = 0; i < businessHour.length; i++) {
      //console.log(this.totalCookies);
      //console.log(this.totalCookies[i]);
        var saveIl = document.getElementById ('alki');
        var liEl = document.createElement('li');
        //console.log (saveIl);
        //console.log(liEl);
        liEl.textContent = businessHour[i] + ' ' + this.totalCookies[i] + ' cookies';
        saveIl.appendChild(liEl);
      }
      liEl.textContent = 'Total: ' + this.storeTotCookies + ' cookies';
      console.log('inside the render function', this.storeTotCookies);
      saveIl.appendChild(liEl);
    }
  }
};
alki.randCustPerHr();
alki.render();
