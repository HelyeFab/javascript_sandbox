import 'regenerator-runtime/runtime';
import axios from 'axios';
import fetch from 'node-fetch';

// let API_URL = 'https://icanhazdadjoke.com/';
let API_URL = 'http://localhost:8000/jokes';
let numOfJokes = 5;

let jokes = [];

const getJokes = async () => {
  while (jokes.length < numOfJokes) {
    let response = await axios.get(API_URL, {
      headers: { Accept: 'application/json' },
    });
    let jokesObj = response.data;
    jokesObj.map((joke) =>
      jokes.push({ id: joke.id, joke: joke.joke, votes: 0 })
    );
  }
  let jokesSet= new Set(jokes.map(j => j.id))
  let newJoke={
    "id": "ly5hNR7w5Ed",
    "joke": "FAKE FAKE FAKE",
    "status": 200
  }

  if(jokesSet.has(newJoke.id)){
    console.log("Found a duplicate");
    console.log(newJoke);
  } else {
    jokes.push({id: newJoke.id, joke: newJoke.joke, votes: 0})
    console.log(jokes)
  }


};

getJokes();
