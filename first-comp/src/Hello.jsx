function Hello(){

  let name = "Yash";
  let age = 20;

  let minor = ()=>{
    if(age < 18){
      return true;
    }
    else{
      return false;
    }  
  }  

  return <h3>Helloo {name} is {age} years old and is {minor() ? "minor" : "adult"}.</h3>
}

export default Hello;