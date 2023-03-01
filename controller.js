const { addAllProperties } = require('./addAllProperties');
const { default: axios } = require("axios");
const fs = require('fs');

const formatedApiGamesPage= async (pageNumber) =>{
    const responseApi = await axios.get(`https://api.rawg.io/api/games?key=31d13ffee1bf425387ca37ee28e66091&page=${pageNumber}`);
    const games = await responseApi.data;
    let clearGames = [];
    games.results.forEach(game => {
        const {id,name,released,background_image,rating,playtime,platforms,genres,stores,short_screenshots} = game;
        const gameFilteredWithoutPrice = {id,name,released,background_image,rating,playtime,platforms,genres,stores,short_screenshots};
        // const gameCompleteProperties = addPrice(gameFilteredWithoutPrice); 
        const gameCompleteProperties = addAllProperties(gameFilteredWithoutPrice); 
        clearGames.push(gameCompleteProperties);
    });
    // const gamesJSON = JSON.stringify(clearGames);
    // console.log(clearGames);
    // fs.writeFile('datos.txt', gamesJSON, (err) => {
    //   if (err) throw err;
    //   console.log('Los datos se han guardado correctamente en el archivo.');
    // })
    return clearGames;
};

let clearArray = []; 

const completeApiModified = async () => {
    if(!clearArray.length){
        let pagesModified = [];
        for (let pageNumber = 1; pageNumber < 7 ; pageNumber++) {
           const modifiedPages = await formatedApiGamesPage(pageNumber);
           pagesModified =  [...pagesModified,...modifiedPages];
        };
        clearArray = pagesModified.filter(game => {
            if(game.price) return game;
        });
        console.log(clearArray.length);
        return clearArray;
    };
    return clearArray;
};




module.exports = {
    completeApiModified
}