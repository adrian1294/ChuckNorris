document.getElementById("jokes-collection").style.display = "none";
document.getElementById("chuck").style.display = "none";
document.getElementById("norris").style.display = "none";
document.getElementById("chuckapp").style.display = "block";
jokeBtn = document.getElementById("jokes-form");
const jokeInput = document.getElementById("number");
const nameInput = document.getElementById("name");
ulJokes = document.querySelector(".jokes");

jokeBtn.addEventListener("submit", function(e){
    document.getElementById("jokes-collection").style.display = "none";
    document.getElementById("chuckapp").style.display = "none";
    document.getElementById("norris").style.display = "block";
    setTimeout(loadJokes, 2000);
    e.preventDefault();
})

function loadJokes(e){
    //console.log(e.type);
    const xhr = new XMLHttpRequest();
    // xhr.open("GET","http://api.icndb.com/jokes/random"+"/"+jokeInput.value,true);

    xhr.open("GET","https://api.icndb.com/jokes/random/"+jokeInput.value+"?firstName="+nameInput.value,true);

    xhr.onload = function(){
    if(this.status === 200){
        ulJokes.innerHTML=""; 
        // console.log(this.responseText); 
        const jokes= JSON.parse(this.responseText);
        // console.log(jokes.value);
        
        let jokesArray = jokes.value;
        // console.log(jokesArray);
        
        jokesArray.forEach((li, index)=>{
        const jokeLi = document.createElement("li");

        jokeLi.innerHTML=`<img src="img/icon.png"></img>Joke: ${li.joke}`;

        ulJokes.appendChild(jokeLi);
    })
    document.getElementById("jokes-collection").style.display = "block";
    document.getElementById("chuckapp").style.display = "none";
    document.getElementById("norris").style.display = "none";
    document.getElementById("chuck").style.display = "block";
    // e.preventDefault();
    }
    };
    xhr.send();
    // e.preventDefault();
}