


//let puppyTeamOne = document.querySelector("#puppyTeamOne")
//let puppyTeamTwo = document.querySelector("#puppyTeamTwo")
//let teamOne = []
//let teamTwo = []

///const puppyTeamOne = puppies.map(() => puppies.id <= 5561) /// but this is just for array... 
//const puppyTeamTwo = puppies.map(() => puppies.id => 5562)

//function assigningTeams ()  {
//    if(puppies.id <= 5561 ) {   // in case there is anything added in the futer for scalabilty it is better not limit
//        
//        return teamOne
//    } else {
//        return teamTwo
//    }
//    }
    
//const array = ["The Destroyer","The Crusher","The BoneDigger"," The Puppetmaster","The Buttsniffer","The Joker","The Horrific","The Overlord","The Sheriff", "The Gladiator"]
//const nickNameRand=array[Math.floor(Math.random()*array.lenght)];
//console.log(nickNameRand)

let puppyPlayerList = document.querySelector("#container")
const singlePuppyDiv = document.querySelector("#singlePuppyDiv")
let puppies = []


async function getAllPuppyTeams() {
    const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310-FTB-ET-WEB-FT/players")
    const dataBase = await response.json()
    puppies = dataBase.data.players
    console.log(puppies)
    render ()
    
} 


    window.addEventListener("hashchange", () =>  {
    console.log(puppies)
    render()
    });

function render () {
    const allPlayerList = puppies.map((puppy) => {
        return  `
                    <div id="basicProfile">
                    <h3>Pupperony</h3>
                    <img  src=${puppy.imageUrl} />
                    <h4> <a href=#${puppy.name} >Player: ${puppy.name} </a> </h4>
                    </div>`;
            
    })





const puppyName = window.location.hash.slice(1)
    const singlePuppy = puppies.find((puppy) => {
        return puppy.name === puppyName;

    })

puppyPlayerList.innerHTML =  allPlayerList.join("")
    
console.log(puppyName)
    
    singlePuppyDiv.innerHTML= `
    <h1>Selected Player</h1>
    <h2>Name: ${singlePuppy.name}</h2>
    <li>Position: ${singlePuppy.status}</li>
    <li>Number: ${singlePuppy.id}</li>
    <li>Breed: ${singlePuppy.breed}</li>
    <div>
    <img src=${singlePuppy.imageUrl} />
    </div>
    `



}




getAllPuppyTeams()