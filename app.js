alert("Welcome to the American-Trucks Online Showroom")
var name = prompt("Waht type of trucks are you intrested in?")
if (name == "Chevrolet Silverado"|| name == "GMC Sierra"||name == "Dodge Rum"|| name == "Ford F150"){
  confirm("Great choice, Press OK to confirm!");}
  else if (name !== "Chevrolet Silverado"||
name !== "GMC Sierra"|| name !== "Dodge Rum"|| name !== "Ford F150" ){

    alert("Sorry we can't help you! You can procced to the Tire shop")
  }

var clientInput = prompt("How many tires do you want?")
  while(clientInput != 4 && clientInput != 8 && clientInput != 12 ){
    clientInput = prompt("You can only chosse a bundle of 4")
    }

    for(var i= 0; i<clientInput; i++){
      document.write( '<img src="https://img-new.cgtrader.com/items/139754/truck_tire_3d_model_fbx_78f11c72-f5e5-441c-8ba0-bff03f4af295.jpg" height="50px" width="50px" />' )
    }

  
console.log(name)

