// Store the wallet amount to your local storage with key "amount"
function addmoney(){
    let store= JSON.parse(localStorage.getItem("amount"))||0 ;
    let inp= document.getElementById("amount").value;
    let amount= Number(inp)+Number(store);
    localStorage.setItem("amount",JSON.stringify(amount)); 
    window.location.reload();
};

let amount= JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText= amount ;