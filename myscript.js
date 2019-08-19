$(document).ready(function() {
  // constructor
  class location {
    constructor(name, city, zip, address, pic) {
      this.name = name;
      this.city = city;
      this.zip = zip;
      this.address = address;
      this.pic = pic;
    }
    display() {
      return `
      <div class="col-sm-12 col-md-6 col-xl-3">
                <h4>${this.name}</h4>
                <ul class="list-group">
                    <li class="list-group-item">
                    ${this.address}, ${this.zip} ${this.city}</li>
                    <li class="list-group-item"><img src=${
                      // fluid to scale with parent, sm display none, from md to xl block
                      this.pic} class="img-fluid d-none d-md-block" width="300" height="100"></li>
                </ul>
                </div>`;
    }
  }

  // prototype
  class restaurant extends location {
    constructor(name, city, zip, address, pic, number, type, web) {
      super(name, city, zip, address, pic);
      this.number = number;
      this.type = type;
      this.web = web;
    }
    display() {
      return `
        <div class="col-sm-12 col-md-6 col-xl-3">
            <h4>${this.name} (${this.type})</h4>
            <ul class="list-group">
                <li class="list-group-item">${
                  this.address
                }, ${this.zip} ${this.city}, ${this.number}</li>
                <li class="list-group-item">${this.web}</li>
                <li class="list-group-item"><img src=${
                  this.pic
                } class="img-fluid d-none d-md-block" width="300" height="100"></li>
            </ul>
            </div>`;
    }
  }

  // prototype
  class events extends location {
    constructor(name, city, zip, address, pic, date, time, price, web) {
      super(name, city, zip, address, pic);
      this.date = date;
      this.time = time;
      this.price = price;
      this.web = web;
    }
    display() {
      return `
      <div class="col-sm-12 col-md-6 col-xl-3">
            <h4>${this.name}</h4>
            <ul class="list-group">
                <li class="list-group-item">${this.web}</li>
                <li class="list-group-item">${this.date} - ${this.time}</li>
                <li class="list-group-item">${
                  this.address
                }, ${this.zip} ${this.city}</li>
                <li class="list-group-item"><img src=${
                  this.pic
                } class="img-fluid d-none d-md-block" width="300" height="100"></li>
            </ul>
            </div>`;
    }
  }

// array
  var locations = [];

// objects
  var charles = new location(
    "St. Charles Chruch",
    "Vienna",
    1010,
    "Karlsplatz 1",
    "./img/church.jpg"
  );
  var zoo = new location(
    "Zoo Vienna",
    "Vienna",
    1130,
    "Maxingstraße 13b",
    "./img/zoo.jpg"
  );
  var lemon = new restaurant(
    "Lemon Leaf",
    "Vienna",
    1050,
    "Kettenbrückengasse 19",
    "./img/lemonleaf.jpg",
    "+43(1)5812308",
    "Thai",
    "www.lemonleaf.at"
  );
  var sixta = new restaurant(
    "SIXTA",
    "Vienna",
    1050,
    "Schönbrunner Straße 21",
    "./img/sixta.jpg",
    "+43(1)5852856",
    "Viennese",
    "www.sixta-restaurant.at"
  );
  var kristoff = new events(
    "Kris Kristofferson",
    "Vienna",
    1150,
    "Wiener Stadthalle, Halle F, Roland Rainer Platz 1",
    "./img/kris.jpg",
    "Fri, 15.11.2019",
    "20:00",
    "58,50 EUR",
    "http://kriskristofferson.com/"
  );
  var lenny = new events(
    "Lenny Kravitz",
    "Vienna",
    1050,
    "Wiener Stadthalle, Halle D, Roland Rainer Platz 1",
    "./img/kravitz.jpg",
    "Sat, 09.12.2019",
    "19:30",
    "47,80 EUR",
    "http://www.lennykravitz.com/"
  );

  // push objects to array 
  locations.push(charles);
  locations.push(zoo);
  locations.push(lemon);
  locations.push(sixta);
  locations.push(kristoff);
  locations.push(lenny);

  for (var i = 0; i < locations.length; i++) {
    // var displayResult = locations[i].display();
    // $("#places").append(displayResult);
    // steps above equal 
    $("#places").append(locations[i].display());
    // calling display function through array 
  }
});
