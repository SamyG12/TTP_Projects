
//assigning variables
const jokeE1 = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

//a button to generate a joke with a click
jokeBtn.addEventListener('click', generateJoke)


//a function called generateJoke
generateJoke()

//using async/await
async function generateJoke() {
    const config = {
        headers: {
            Accept:'application/json',
        },
    }
    //data coming from https://icanhazdadjoke.com/
    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json()

    jokeE1.innerHTML = data.joke
}