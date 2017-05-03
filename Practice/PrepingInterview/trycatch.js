function add(a,b){
  try{
    if(b==0){
      throw("Divided by zero")
    }
  }
  catch(e){
    console.log('Error '+e);
    
  }
  finally{
    console.log('Finally block will always execute');
    
  }
}

add(10,0);