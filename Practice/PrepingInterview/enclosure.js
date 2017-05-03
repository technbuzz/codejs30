function celebrityName(firstName){
  var nameIntro = "This celebrity is ";

  function lastName(theLastName){
    console.log(nameIntro + firstName + " " + theLastName);
    
  }

  return lastName;
}

var myName = celebrityName('ShahRukh');
myName('Khan')