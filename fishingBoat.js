function fishingBoat (input) {
    let budget = Number(input[0]); 
    let season = input[1]; 
    let fishersCount = Number(input[2])

    let boatPrice = 0;
    

   switch(season) {
    case 'Spring': 
        boatPrice = 3000; break; 
    case 'Summer': 
    case 'Autumn': 
        boatPrice = 4200; break; 
    case 'Winter': 
        boatPrice = 2600; break; 
    
   }
   if (fishersCount <= 6) {
    boatPrice = 0.90 * boatPrice; 
   } else if (fishersCount > 6 && fishersCount <= 11) {
    boatPrice = 0.85 * boatPrice; 
   } else {
    boatPrice = 0.75 * boatPrice; 
   }

   if (fishersCount % 2 === 0 && season != 'Autumn') {
    boatPrice = 0.95 * boatPrice; 
   }

   if (budget < boatPrice) {
    moneyNeeded = boatPrice - budget; 
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
   } else {
    moneyLeft = (budget - boatPrice).toFixed(2); 
        console.log(`Yes! You have ${moneyLeft} leva left.`)
   }
}

fishingBoat (["2000", "Winter", "13"])