

let puppyPlayerList = document.querySelector("#container")
const singlePuppyDiv = document.querySelector("#singlePuppyDiv")


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

    return `<div class="basicHover" id="basicProfile">
                <img  class="imgAllProfile"  src=${puppy.imageUrl} />
                <h4> <a href=#${puppy.name}> ${puppy.name} </a> </h4>
                </div>`
    })


const puppyName = window.location.hash.slice(1)
    
const singlePuppy = puppies.find((puppy) => {
        return puppy.name === puppyName;

    })


    puppyPlayerList.innerHTML = singlePuppy ? "" : allPlayerList.join("")

if(singlePuppy) {
    singlePuppyDiv.innerHTML= `
    <div>
    <div>
    <h1 >Selected Player</h1>
    <h2 >Player: ${singlePuppy.name}</h2>
    <li >Position: ${singlePuppy.status}</li>
    <li  > # ${singlePuppy.id}</li>
    <li  >Breed: ${singlePuppy.breed}</li>
    <br/>
    <a  class="backclick" href=# > Back to all Players </a> </div>
    </div>
    <div class="sglImgDiv" > <img class="imgSglProfile" src=${singlePuppy.imageUrl} /> </div>
    
    </div>`
}else{
    singlePuppyDiv.innerHTML=""
} 
}



getAllPuppyTeams()