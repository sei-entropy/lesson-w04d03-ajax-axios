// We loaded axios library in our html file
// Lets make an ajax call with axios

// method: get
// url: 'https://pokeapi.co/api/v2/pokemon/1';
// url: 'https://pokeres.bastionbot.org/images/pokemon/1.png';

// STEP 1:
// 1. test the api
// 2. change the name to be the pokemon name
// 3. change the image to be the pokemon image

// STEP 2:
// 1. create a function that will execute when click on the button
// 2. this fucntion will itreate 3 times and each time will change
// the p && img tags to have the pokemon name && image

// BONUS:
// 1. make another fucntion like one that we create but it will create for you li each time
// 2. each li will has the p && img tags to have the pokemon name && image at least
// 3. add more details to the li like: height && weight && base_experience

const pokemonList = $(".item");
function getPokemonsAll() {
  for (let i = 0; i <= 5; i++) {
    axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${i + 1}`
    })
      .then(res => {
        const currentPokemonName = $(pokemonList[i].children[0]);
        const currentPokemonImage = $(pokemonList[i].children[1]);
        const currentName = res.data.name;
        console.log(currentName);
        const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${i +
          1}.png`;
        currentPokemonName.text(currentName);
        currentPokemonImage.attr("src", imageUrl);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

function getPokemons1() {
  axios({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/1`
  })
    .then(res => {
      const currentPokemonName = $(pokemonList[0].children[0]);
      const currentPokemonImage = $(pokemonList[0].children[1]);
      const currentName = res.data.name;
      console.log(currentName);
      const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/1.png`;
      currentPokemonName.text(currentName);
      currentPokemonImage.attr("src", imageUrl);
    })
    .catch(err => {
      console.log(err);
    });
}

function getPokemons2() {
  axios({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/1`
  })
    .then(res => {
      const currentPokemonName = $(pokemonList[1].children[0]);
      const currentPokemonImage = $(pokemonList[1].children[1]);
      const currentName = res.data.name;
      console.log(currentName);
      const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/2.png`;
      currentPokemonName.text(currentName);
      currentPokemonImage.attr("src", imageUrl);
    })
    .catch(err => {
      console.log(err);
    });
}

function getPokemons3() {
  axios({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/1`
  })
    .then(res => {
      const currentPokemonName = $(pokemonList[2].children[0]);
      const currentPokemonImage = $(pokemonList[2].children[1]);
      const currentName = res.data.name;
      console.log(currentName);
      const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/3.png`;
      currentPokemonName.text(currentName);
      currentPokemonImage.attr("src", imageUrl);
    })
    .catch(err => {
      console.log(err);
    });
}
