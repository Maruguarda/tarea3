const lluviaDeIdeasCena = require('./library.js');


// Native promise version:
async function nativePromiseDinner() {
  lluviaDeIdeasCena().then((comida) => {
	  console.log(`voy a hacer${comida} para la cena.`);
  });
}


// async/await version:
 function announceDinner() {
  // Write your code below:
  lluviaDeIdeasCena().then((comida) => {
	  console.log(`voy a hacer${comida} para la cena.`);
  });
}
announceDinner()
  
