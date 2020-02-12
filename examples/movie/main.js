// We loaded axios library in our html file
// Lets make an ajax call with axios
console.log('Movie');

// STEP 1:
// 1. search on this website and try to know how to use it https://www.themoviedb.org/movie
// api_key=1bfa430aada4409bfa6a3c5528128e8a

let objReq = {
    method: 'get',
    url:'http://api.themoviedb.org/3/discover/movie?api_key=1bfa430aada4409bfa6a3c5528128e8a'
  };
  const resCB = function(response) {
    // console.log('SUCC', response.data);
    // MORE CONFUSE
    // printOneMovie(response.data.results[0]);
    let oneMovie = response.data.results[0];
    console.log(oneMovie);
    let titleMovie = oneMovie.title;
    let rateMovie = oneMovie.vote_average;
    let descMovie = oneMovie.overview;
    let imageMovie = oneMovie.poster_path;
    // console.log(titleMovie)
    // console.log(rateMovie)
    // console.log(descMovie)
    const titleParag=document.querySelector('.title')
    const rateParag=document.querySelector('.rate')
    const descParag=document.querySelector('.desc')
    const imageImg=document.querySelector('#image')
    titleParag.innerText=titleMovie
    rateParag.innerText=(rateMovie*10)+'%'
    descParag.innerText=descMovie
    imageImg.src='https://image.tmdb.org/t/p/w500'+imageMovie
    // from this objMovie pic two keys that really matter in any movie
  };

  const errCB=function (error) {
    console.log('eROR', error)
    
  };
  axios(objReq)
    .then(resCB)
    .catch(errCB);
// STEP 1
// 1. test the api
// 2. change the title to be the movie title
// 3. change the image to be the movie image

// STEP 2:
// 1. create a function that will execute when click on the button
// 2. this fucntion will itreate 3 times and each time will change
// the p && img tags to have the movie title && image

// BONUS:
// 1. make another fucntion like one that we create but it will create for you li each time
// 2. each li will has the p && img tags to have the movie title && image at least
// 3. add more details to the li like: release_date && average rate && type
