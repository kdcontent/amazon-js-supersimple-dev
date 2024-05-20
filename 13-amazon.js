// // const price = 1090;

// // // decimals number
// // console.log((price / 100).toFixed(2));

// // // module
// // export const logo []// -> variable that needs to be exported
// // import {somth} '..s'; // -> imports, that needs to be put in the head of files
// // type="module";

// const arrayzero = [
//   {
//     userName: 'Khusanov Abdulboriy',
//     year: 2000,
//     gender: 'Male'
//   }, {
//     userName: 'John Ive',
//     year: 1970,
//     gender: 'Male'
//   }, {
//     userName: 'Anna Joy',
//     year: 2001,
//     gender: 'Female'
//   }
// ]

// let htmlFile = '';

// arrayzero.forEach((citizen) => {

// htmlFile += `
// <p>${citizen.userName}</p>
// <p>${citizen.year}</p>
// <p>${citizen.gender}</p>
// `;
// })

// document.body.innerHTML = htmlFile;


//
const soccerPlayers = [
  {
    playerName: 'Ter Stegen',
    position: 'GK',
    club: 'Barcelona',
  }, {
    playerName: 'Sergio Ramos',
    position: 'CB',
    club: 'Sevilla'
  }, {
    playerName: 'Steven Gerrard',
    position: 'CMF',
    club: 'Liverpool'
  }, {
    playerName: 'Leo Messi',
    position: 'AMF',
    club: 'Barcelona'
  }
]

let barcaPlayer = [];
soccerPlayers.forEach((player) =>{
if (player.club === 'Barcelona') {
  barcaPlayer.push(player.playerName);
}
});

document.querySelector('.players-text').innerHTML = barcaPlayer;