// We loaded axios library in our html file
// Lets make an ajax call with axios

// method: get
// url: https://cataas.com/cat


console.log('1');
// change title html cohort 11
document.querySelector('#title').innerText = 'Cohort 11';
let obj = {
  method: 'get',
  url: 'https://cataas.com/cat/4'
};
const success = function(response) {
  console.log('2 SUCC', response);
  console.log('DATA', response.data);
};
const notSuccess = function(error) {
  console.log('2 ERR', error);
};
axios(obj)
  .then(success)
  .catch(notSuccess);
console.log('3');