console.log('Pokemon');
// method: get
// url: 'https://pokeapi.co/api/v2/pokemon/1';
// url: 'https://pokeres.bastionbot.org/images/pokemon/1.png';
function getPokemons1() {
  axios({
    method: 'get',
    url: `https://pokeapi.co/api/v2/pokemon/1`
  })
    .then(res => {
      console.log(res.data.name);
      // jquery
      $('#name-1').text(res.data.name)
      $('#image-1').attr('src','https://pokeres.bastionbot.org/images/pokemon/1.png')
    })
    .catch(err => {
      console.log(err);
    });
}
function getPokemons2() {
  axios({
    method: 'get',
    url: `https://pokeapi.co/api/v2/pokemon/2`
  })
    .then(res => {
      console.log(res.data.name);
      // jquery
      $('#name-2').text(res.data.name)
      $('#image-2').attr('src','https://pokeres.bastionbot.org/images/pokemon/2.png')
    })
    .catch(err => {
      console.log(err);
    });
}
/* 
s
*/
// method: get
// url: 'https://pokeapi.co/api/v2/pokemon/1';
// url: 'https://pokeres.bastionbot.org/images/pokemon/1.png';
// STEP 1:
// 1. test the api => chrome and postman
// 2. change the name to be the pokemon name
// 3. change the image to be the pokemon image
// pokemonName.text('asdasdasd')
// pokemonImage.attr('src','hghghghgh')
// axois
/* 
axios({
  method: 'get',
  url: `https://pokeapi.co/api/v2/pokemon/1`
})
  .then(res => {
    console.log(res.data.name);
    const { name } = res.data;
    const name2= name[0].toUpperCase() +name.slice(1)
    // pokemonName.text(name);
    pokemonName.text(name2);
    // pokemonName.text(name[0].toUpperCase() +name.slice(1,name.length-1)+name[name.length-1].toUpperCase() );
    pokemonImage.attr(
      'src',
      `https://pokeres.bastionbot.org/images/pokemon/1.png`
    );
  })
  .catch(err => {
    console.log(err);
  });
*/
// STEP 2:
// 1. create a function that will execute when click on the button
// 2. this fucntion will itreate 3 times and each time will change
// the p && img tags to have the pokemon name && image
// const pokemonName = $('#name');
// const pokemonImage = $('#image');
// BONUS:
// 1. make another fucntion like one that we create but it will create for you li each time
// 2. each li will has the p && img tags to have the pokemon name && image at least
// 3. add more details to the li like: height && weight && base_experience
/* 
// We loaded axios library in our html file
// Lets make an ajax call with axios
console.log('Pokemon');
// method: get
// url: 'https://pokeapi.co/api/v2/pokemon/1';
// url: 'https://pokeres.bastionbot.org/images/pokemon/1.png';
const imgage = 'https://pokeres.bastionbot.org/images/pokemon/1.png';
const url = 'https://pokeapi.co/api/v2/pokemon';
const pokemonList = $('#list');
const pokemonList2 = $('.item');
const pokemonName = $('#name');
const pokemonImage = $('#image');
// axios({
//   url,
//   method: 'get'
// })
//   .then(response => {
//     // code for if the request succeeds
//     console.log(response.data);
//     const { name } = response.data;
//     console.log(name);
//     pokemonName.text(name);
//     pokemonImage.attr(
//       'src',
//       'https://pokeres.bastionbot.org/images/pokemon/1.png'
//     );
//   })
//   .catch(error => {
//     // code for if the request fails
//     console.log(error);
//   });
  function getPokemon(number){
    for (let i = 0; i < 4; i++) {
      pokemonItem=$(pokemonList2[i])
   
      const [p,img] = pokemonItem.children();
      console.log(p,img)
    axios({
      url:`${url}/${i+1}`,
      method: 'get'
    })
      .then(response => {
        // code for if the request succeeds
        console.log(response.data);
        const { name } = response.data;
        console.log(name);
        $(p).text(name);
        $(img).attr(
          'src',
          `https://pokeres.bastionbot.org/images/pokemon/${i+1}.png`
        );
      })
      .catch(error => {
        // code for if the request fails
        console.log(error);
      });
    }
  }