function Scooter(year, color, model){
  this.year = year
  this.color = color
  this.model = model
}
let moped = new Scooter(2016, 'black', 'vespa')
// moped.color
// "black"

// moped.model
// "vespa"


function Driver(name, age, experience){
  this.name = name
  this.age = age
  this.experience = experience
}


function PickupLocation(address, city){
  this.address = address
  this.city = city
}
