alert("Welcome to the American-Trucks Online Showroom")
var name = prompt("Waht type of trucks are you intrested in?")
if (name == "Chevrolet Silverado"|| name == "GMC Sierra"||name == "Dodge Rum"|| name == "Ford F150"){
  confirm("Great choice, Press OK to confirm!");}
  else if (name !== "Chevrolet Silverado"||
name !== "GMC Sierra"|| name !== "Dodge Rum"|| name !== "Ford F150" ){
    alert("Sorry we can't help you!")
  }
console.log(name)