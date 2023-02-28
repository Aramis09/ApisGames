
const addPropertiePlatforms = game => {
    const platformsProperty = game.platforms.map(property => property.platform.name);
    game.platforms = platformsProperty;
    
};

const addPropertieGenres = game => {
    const genresProperty = game.genres.map(property => property.name);
    game.genres = genresProperty;
    
};

const addPropertieStore =  game => {
    const storeProperty = game.stores.map(property => property.store.name);
    game.stores = storeProperty;
    
};
const addPropertyImages = game => {
    const imagesProperty = game.short_screenshots.map(property => property.image);
    game.images = imagesProperty;
    
};

const addPrice = (game) => {
    if(game.name === "PAYDAY 2") {
        game.price = '9.99'
    }    
    if(game.name === "Horizon Zero Dawn") {
        game.price = '49.99'
    }
    if(game.name === "Grand Theft Auto IV") {
        game.price = '29.98'
    }
    if(game.name === "Rocket League") {
        game.price = 'free'
    }
    if(game.name === "Dota 2") {
        game.price = 'free'
    }
    if(game.name === "Terraria") {
        game.price = '9.99'
    }
    if(game.name === "Cyberpunk 2077") {
        game.price = '59.99'
    }
    if(game.name === "Warframe") {
        game.price = 'free'
    }
    if(game.name === "Metro 2033") {
        game.price = '5.99'
    }
    if(game.name === "Metal Gear Solid V: The Phantom Pain") {
        game.price = '19.99'
    }
    if(game.name === "Rise of the Tomb Raider") {
        game.price = '29.99'
    }
    if(game.name === "Batman: Arkham Knight") {
        game.price = '2.99'
    }
    if(game.name === "The Walking Dead: Season 1") {
        game.price = '7.99'
    }
    if(game.name === "The Witcher 2: Assassins of Kings Enhanced Edition") {
        game.price = '19.99'
    }
    if(game.name === "BioShock 2") { // hasta aqui es la pagina 1, no todos los juegos se les pudo pueden encontrar precio (luego hay que hacer un filtrado)
        game.price = '19.99'
    }
    //Page2
    if(game.name === "Hitman") {
        game.price = '25.29'
    }
    if(game.name === "Apex Legends") {
        game.price = 'free'
    }
    if(game.name === "Hollow Knight") {
        game.price = '14.99'
    }
    if(game.name === "Mirror's") {
        game.price = '19.99'
    }
    if(game.name === "Little") {
        game.price = '19.99'
    }
    if(game.name === "hotline") {
        game.price = '9.99'
    }
    if(game.name === "Dark Souls III") {
        game.price = '59.99'
    }
    if(game.name === "Outlast") {
        game.price = '19.99'
    }
    if(game.name === "Deus Ex: Mankind Divided") {
        game.price = '29.99'
    }
    if(game.name === "Spec Ops: The Line") {
        game.price = '5.99'
    }
    if(game.name === "BioShock Remastered") {
        game.price = '4.99'
    }
    if(game.name === "Marvel's Spider-Man") {
        game.price = '49.99'
    }
    if(game.name === "Far Cry 3") {
        game.price = '19.99'
    }
    if(game.name === "Amnesia: The Dark Descent") {
        game.price = '19.99'
    }
    if(game.name === "Alan Wake") {
        game.price = '14.99'
    }
    if(game.name === "Half-Life 2: Deathmatch") {
        game.price = '4.99'
    }
    if(game.name === "Saints Row: The Third") {
        game.price = '9.99'
    }
    if(game.name === "Half-Life") {
        game.price = '9.99'
    }
    if(game.name === "Wolfenstein: The New Order") { //page 3 complete.
        game.price = '19.99'
    }
    if(game.name === "Borderlands") {
        game.price = '9.89'
    }
    if(game.name === "Detroit: Become Human") {
        game.price = '39.99'
    }
    if(game.name === "Path of Exile") {
        game.price = 'free'
    }
    if(game.name === "Stardew Valley") {
        game.price = '14.99'
    }
    if(game.name === "Prey") {
        game.price = '29.99'
    }
    if(game.name === "L.A. Noire") {
        game.price = '19.99'
    }
    if(game.name === "Injustice: Gods Among Us Ultimate Edition") {
        game.price = '19.99'
    }
    if(game.name === "Garry's") {
        game.price = '9.99'
    }
    if(game.name === "PlayerUnknown’s Battlegrounds") {
        game.price = 'free'
    }
    if(game.name === "Sid Meier's Civilization V") {
        game.price = '5.99'
    }
    if(game.name === "Dead Space") {
        game.price = '19.99'
    }
    if(game.name === "For Honor") {
        game.price = '14.99'
    }
    if(game.name === "Fallout: New Vegas") {
        game.price = '9.99'
    }
    if(game.name === "Assassin’s Creed IV: Black Flag") {
        game.price = '39.99'
    }
    if(game.name === "Dishonored") {
        game.price = '9.99'
    }
    if(game.name === "Company of Heroes 2") {
        game.price = '19.99'
    }
    if(game.name === "Hellblade: Senua's Sacrifice") { //aqui termina la pagina 4
        game.price = '29.99'
    }
    if(game.name === "Dishonored 2") {
        game.price = '29.99'
    }
    if(game.name === "Hitman: Absolution") {
        game.price = '19.99'
    }
    if(game.name === "The Elder Scrolls V: Skyrim Special Edition") {
        game.price = '39.99'
    }
    if(game.name === "Control") {
        game.price = '39.99'
    }
    if(game.name === "Death Stranding") {
        game.price = '8.49'
    }
    if(game.name === "Metal Gear Solid V: Ground Zeroes") {
        game.price = '19.99'
    }
    if(game.name === "Star Wars Jedi: Fallen Order") {
        game.price = '39.99'
    }
    
}
 
const addAllProperties = game => {
    addPrice(game);
    addPropertieGenres(game);
    addPropertiePlatforms(game);
    addPropertieStore(game);
    addPropertyImages(game);
    const {id,name,background_image,rating,playtime,platforms,genres,stores,price,images  } = game;
    const gameClear = { id,name,background_image,rating,playtime,platforms,genres,stores,price,images };
    return gameClear;
};
module.exports ={ addAllProperties };
