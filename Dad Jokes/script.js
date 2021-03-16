const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("btnJoke");

jokeBtn.addEventListener("click", generateJokes);

generateJokes();

//using async and await
async function generateJokes(){
    const config = {
        headers: {
            "Accept": "application/json"
        }
    }

    const response = await fetch("https://icanhazdadjoke.com/", config);

    const data =  await response.json();

    jokeElement.innerHTML = data.joke;
}

//using then syntax
//function generateJokes(){
//    const config = {
//        headers: {
//            "Accept": "application/json"
//        }
//    }//create a variable for the heaaders used when calling dad joke API
//
//    //using the fetch api to make a request for the dad joke api
//    fetch("https://icanhazdadjoke.com/", config)
//    .then(response => response.json())//gets the response format
//    .then(data => {
//        jokeElement.innerText = data.joke;
//    });//getting the data from the response
//}