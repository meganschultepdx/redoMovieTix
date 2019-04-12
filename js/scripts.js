// Business Logic
function MovieTicket(movieName, movieTime, ageRange) {
  this.movieName = movieName,
  this.showTime = showTime,
  this.ageRange = ageRange,
  this.ticket = 0;
  this.priceByName();
  this.priceByTime();
  this.priceByAge();
  }
// function for purchase confirm
MovieTicket.prototype.ticketPurchase = function() {
  return "You have Purchased a Ticket For " + this.movieName + " at " + this.movieTime "."
}
// price function for movie movieName
