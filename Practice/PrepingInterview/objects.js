var myGrades = {};

var collegeAlgebra = {
  level: 'freshman',
  difficulty: 'hard',
  expectedGrade: 98,

  textbook: function(){
    console.log('College Algebra blah blah blah blah');
    
  }
}

var collegeAlg = new Object;
collegeAlg.level = 'freshman';
collegeAlg.textbook = function(){
    console.log('College Algebra blah blah blah blah');
}

console.log(collegeAlgebra);
console.log(collegeAlgebra.textbook());
console.log(collegeAlg);
console.log(collegeAlg.textbook());
