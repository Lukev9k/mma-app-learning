async function getJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await response.json();
    console.log(joke.setup);
    console.log(joke.punchline);
}

getJoke();