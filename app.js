/*class customer{
    name;
    age;
    address;
    constructor(name,age,address){
        this.name=name;
        this.address=address;
        this.age=age;
    }
    setName(name){this.name=name;}
    getName(){
        return this.name;}
    getAge(){
        return this.age;}
    getAddress(){
        return this.address;}
}
let customer01 = new customer("Janidu",22,"Hikkaduwa");
console.log(customer01.getName());
let numbers = [10,20,3,30,44,45];
console.log(numbers.sort((a,b)=>a-b));*/
let randomNumber = Math.floor(Math.random()*10)+1;
let atempts=3;

function guess(){
    
    console.log(randomNumber);
    
    let guessNum=document.getElementById("guessInput").value;
    atempts--;
    if(atempts<=0){
        document.getElementById("attempt").innerHTML="Game Over,Try again next time";
    }
    
    else if(randomNumber==guessNum){
        document.getElementById("feedback").innerHTML="Congratulations!";
        
    }
    else if(randomNumber<guessNum){
        document.getElementById("feedback").innerHTML="Too high! try again";
        document.getElementById("attempt").innerHTML="You have "+atempts+" Atempts";
    }
    else if(randomNumber>guessNum){
        document.getElementById("feedback").innerHTML="Too low! try again";
        document.getElementById("attempt").innerHTML="You have "+atempts+" Atempts";
    }
    
    
}
 
function endgame(){
    document.getElementById("guessInput").disabled=true;
}

