// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page;
let amount= JSON.parse(localStorage.getItem("amount"));
document.getElementById("wallet").innerText= amount ;
let id;
async function searchmovies(){
    //// https://omdbapi.com/?apikey=2b79427&s=The%20kashmir%20files;

    try{
        q= document.getElementById("search").value ;
        let res= await fetch(`https://omdbapi.com/?apikey=2b79427&s=${q}`);
        let data= await res.json() ;
        let movies= data.Search;
        return movies
    }catch(err){
        console.log(err)
    }
    
}

function append(data){
    document.getElementById('movies').innerHTML=null ;
    data.forEach(function(el){
        let div= document.createElement("div");
        div.setAttribute("class","movie_tab")

        let img= document.createElement("img");
        img.src= el.Poster;

        let name= document.createElement("h4");
        name.innerText= el.Title;

        let button= document.createElement("button");
        button.innerText= "Book Now";
        button.setAttribute("class","book_now");
        button.addEventListener("click",function(){
            booktickets(el)
        })

        div.append(img,name,button);
        document.getElementById("movies").append(div);
    });
}

async function main(){
    let data= await searchmovies();

    if(data==undefined){
        return false
    }
    append(data)
}

function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id= setTimeout(function(){
        func()
    },delay)
}

function booktickets(el){
    localStorage.setItem("movie",JSON.stringify(el));
    window.location.href="checkout.html";
}



