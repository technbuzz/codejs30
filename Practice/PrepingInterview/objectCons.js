function Fruit(name,color){
  console.log('Object created by constructor');

  this.type = function(){
    console.log('I am a fruit');
  }
  
  this.name = name;
  this.color = color;
}

var orange = new Fruit('orange','orange');
orange.type();
console.log(orange);
