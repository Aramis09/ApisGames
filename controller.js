const { addPrice } = require('./addPrice');
const { default: axios } = require("axios");
const fs = require('fs');


const modifiedApiGamesPage= async (indexPage) =>{
    const responseGames = await axios.get(`https://api.rawg.io/api/games?key=31d13ffee1bf425387ca37ee28e66091&page=${indexPage}`);
    const games = await responseGames.data;
    let clearGames = [];
    games.results.forEach(game => {
        const {id,name,released,background_image,rating,playtime,platforms,genres,stores,tags,short_screenshots} = game;
        const gameFilteredWithoutPrice = {id,name,released,background_image,rating,playtime,platforms,genres,stores,tags,short_screenshots};
        const gameCompleteProperties = addPrice(gameFilteredWithoutPrice);
        clearGames.push(gameCompleteProperties);
        // clearGames.push(gameFilteredWithoutPrice);
    });
    // const gamesJSON = JSON.stringify(clearGames);
    // console.log(clearGames);
    // fs.writeFile('datos.txt', gamesJSON, (err) => {
    //   if (err) throw err;
    //   console.log('Los datos se han guardado correctamente en el archivo.');
    // })
    return clearGames;
};


const completeApiModified = async () => {
    let pagesModified = [];
    for (let indexPage = 1; indexPage < 6; indexPage++) {
       const modifiedPages = await modifiedApiGamesPage(indexPage);
       pagesModified =  [...pagesModified,...modifiedPages];
    };
    const clearArray = pagesModified.filter(game => {
        if(game.price) return game;
    })
    console.log(clearArray.length)
    return clearArray;
}





module.exports = {
    completeApiModified
}