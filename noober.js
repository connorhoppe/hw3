// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Assign relevant data points from ride object to well-named variables
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber
  let pickupLocation = ride.pickupLocation
  let dropoffLocation = ride.dropoffLocation
  let numPassengers = ride.numberOfPassengers
  let serviceLevel = `Noober X`
  let note = ``
  let output = ``

  // Determine and set level of service; Note: default is Noober X, but gets replaced if superceded
  if (ride.purpleRequested) {
    serviceLevel = `Noober Purple`
  } else if (numPassengers > 3) {
    serviceLevel = `Noober XL`
    note = 'Note: Ride type has been updated to XL to accommodate group size'
  }

  // Add passenger info to output
  output += `Passenger: ${passengerFirstName} ${passengerLastName} \n`
  output += `Contact Number: ${passengerPhoneNumber} \n`
  output += `Service Level: ${serviceLevel} \n`
  output += `Pickup at ${pickupLocation.address}, ${pickupLocation.city}, ${pickupLocation.state} ${pickupLocation.zip} \n`
  output += `Dropoff at ${dropoffLocation.address}, ${dropoffLocation.city}, ${dropoffLocation.state} ${dropoffLocation.zip} \n`
  
  // Logic for plural-ness and add to output
  if(numPassengers == 1){
    output += `Expect 1 passenger \n`
  } else{
    output += `Expect ${numPassengers} passengers \n`
    }
  if(note.length > 0) {
    output += note
  }

  // Display ride information to the console 
  console.log(output)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
