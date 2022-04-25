// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount= JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText= amount ;

let movie= JSON.parse(localStorage.getItem("movie"))

let div= document.createElement("div") ;

let img= document.createElement("img") ;
img.src= movie.Poster;

let name= document.createElement("h3");
name.innerText= movie.Title;

div.append(name,img);
document.getElementById("movie").append(div);




function bookticket(){
    let seat= document.getElementById("number_of_seats").value ;

let cla_amount= Number(seat)*100
console.log(cla_amount)
    if(amount<cla_amount){
        alert("Insufficient Balance!")
    }
    else if(amount>=cla_amount){
        alert("Booking successful!");
        let balance= amount- cla_amount;
        document.getElementById("wallet").innerText= balance ;
        localStorage.setItem("amount",JSON.stringify(balance));
        
    }
}