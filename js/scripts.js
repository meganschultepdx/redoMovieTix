// Business Logic
function MovieTicket(movieName, movieTime, ageRange) {
  this.movieName = movieName,
  this.showTime = showTime,
  this.ageRange = ageRange,
  this.price= 0;
  // this.priceByName();
  // this.priceByTime();
  // this.priceByAge();
  }
// function for purchase confirm
MovieTicket.prototype.ticketPurchase = function() {
  return "You have Purchased a Ticket For " + this.movieName + " at " + this.movieTime "."
}
// price function for movie movieName
MovieTicket.prototype.priceByMovie = function() {
  if (this.movieName === "petSematary") {
    return 4;
  } else {
    return 2;
  }
}

MovieTicket.prototype.priceByTime = function() {
  if (this.showTime === "4pm") {
    return 2;
  } else {
    return 4;
  }
}

MovieTicket.prototype.priceByAgeRange = function() {
  if (this.ageRange === "child") {
    return 1;
  } else if (this.ageRange === "adult") {
    return 2;
  } else {
    return 0;
  }
}

function resetOptions() {
  $("input:checkbox").removeAttr("checked");
}
