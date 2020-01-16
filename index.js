function dwarfRollCall(dwarves) {
  var finalString = "";
  for(var i = 0; i < dwarves.length; i++) {
    finalString += `${i+1}. ${dwarves[i]} `;
  }
  return finalString;
}

function summonCaptainPlanet(planeteerCalls){
  var capPlaneteerCalls = [];
  for(var i = 0; i < planeteerCalls.length; i++) {
    capPlaneteerCalls.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return capPlaneteerCalls;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++) {
    if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
      return foods[i];
    }
  }
   return "no cheese!";
}
