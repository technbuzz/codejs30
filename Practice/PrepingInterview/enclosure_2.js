function theLocation(){
  var city = "Karachi";

  return{
    get: function(){
      console.log(city);
    },
    set: function(newCity){
      city = newCity;
    }
  }
}

var myPlace = theLocation();
myPlace.get();
myPlace.set('Peshawar');
myPlace.get();