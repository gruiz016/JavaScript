let resturant = {
  name: 'Subway',
  guestCapcity: 75,
  guestCount: 0,
  checkAvaliablity: function(partySize) {
    let seatsLeft = this.guestCapcity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function(partySize) {
    this.guestCount += partySize
  },
  removeParty: function(partySize) {
    this.guestCount -= partySize
  }

}


resturant.seatParty(72)
console.log(resturant.checkAvaliablity(4))
resturant.removeParty(5)
console.log(resturant.checkAvaliablity(4))