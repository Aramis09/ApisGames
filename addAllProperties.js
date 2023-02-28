
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
        game.price = '9.99';
        game.description = 'PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.';
    }   ; 
    if(game.name === "Horizon Zero Dawn") {
        game.price = '49.99';
        game.description = 'Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!';
    };
    if(game.name === "Grand Theft Auto IV") {
        game.price = '29.98';
        game.description = 'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.';
    }
    if(game.name === "Rocket League") {
        game.price = 'free';
        game.description = 'Rocket League combines arcade-style soccer with four-wheel mayhem, easy controls, and fluid, physics-based competition.';
    ;};
    if(game.name === "Dota 2") {
        game.price = 'free';
        game.description = 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if its their 10th hour of play or 1,000th, theres always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.';
    };
    if(game.name === "Terraria") {
        game.price = '9.99';
        game.description = 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!';
    };
    if(game.name === "Cyberpunk 2077") {
        game.price = '59.99';
        game.description = 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.';
    };
    if(game.name === "Warframe") {
        game.price = 'free';
        game.description = 'Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game';
    };
    if(game.name === "Metro 2033") {
        game.price = '5.99';
        game.description = 'In the year 2013, the world has been devastated by an apocalyptic catastrophe that has wiped out all of humanity and turned the earths surface into a polluted wasteland. A handful of survivors took refuge in the depths of the Moscow metro and thus began a new Dark Age for human civilization.'
        'The year is now 2033. An entire generation has been born and raised underground, and their besieged metro station cities struggle to survive both the other survivors and the mutant horrors that await them outside.' ;
    };
    if(game.name === "Metal Gear Solid V: The Phantom Pain") {
        game.price = '19.99';
        game.description = 'Ushering in a new era for the METAL GEAR franchise with cutting-edge technology powered by the Fox Engine, METAL GEAR SOLID V: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.';
    };
    if(game.name === "Rise of the Tomb Raider") {
        game.price = '29.99';
        game.description = 'Rise of the Tomb Raider: 20 Year Celebration includes the base game and Season Pass featuring all-new content. Explore Croft Manor in the new “Blood Ties” story, then defend it against a zombie invasion in “Lara’s Nightmare”.';
    };
    if(game.name === "Batman: Arkham Knight") {
        game.price = '2.99';
        game.description = 'Batman™: Arkham Knight brings the award-winning Arkham trilogy from Rocksteady Studios to its epic conclusion. Developed exclusively for New-Gen platforms, Batman: Arkham Knight introduces Rocksteadys uniquely designed version of the Batmobile.';
    };
    if(game.name === "The Walking Dead: Season 2") {
        game.price = '7.99';
        game.description = 'The Walking Dead: Season Two continues the story of Clementine, a young girl orphaned by the undead apocalypse. Left to fend for herself, she has been forced to learn how to survive in a world gone mad.';
    };
    if(game.name === "The Witcher 2: Assassins of Kings Enhanced Edition") {
        game.price = '19.99';
        game.description = 'A time of untold chaos has come. Mighty forces clash behind the scenes in a struggle for power and influence. The Northern Kingdoms mobilize for war. But armies on the march are not enough to stop a bloody conspiracy...';
    };
    if(game.name === "BioShock 2") { // hasta aqui es la pagina 1, no todos los juegos se les pudo pueden encontrar precio (luego hay que hacer un filtrado)
        game.price = '19.99';
        game.description = 'Set approximately 10 years after the events of the original BioShock, the halls of Rapture once again echo with sins of the past. Along the Atlantic coastline, a monster has been snatching little girls and bringing them back to the undersea city of Rapture.';
    }
    //Page2
    if(game.name === "Hitman") {
        game.price = '25.29';
        game.description = 'The original assassin is back! Betrayed by the Agency and hunted by the police, Agent 47 finds himself pursuing redemption in a corrupt and twisted world.';
    }
    if(game.name === "Apex Legends") {
        game.price = 'free';
        game.description = 'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.';
    }
    if(game.name === "Hollow Knight") {
        game.price = '14.99';
        game.description = 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.';
    }
    if(game.name === "Mirror's") {
        game.price = '19.99';
        game.description = 'Mirrors Edge™ Catalyst raises the action-adventure bar through fluid, first person action and immerses players in Faiths story as she fights for freedom.';
    }
    if(game.name === "Little Nightmares") {
        game.price = '19.99';
        game.description = 'Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw – a vast, mysterious vessel inhabited by corrupted souls looking for their next meal.';
    }
    if(game.name === "Hotline Miami") {
        game.price = '9.99';
        game.description = 'Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat.';
    }
    if(game.name === "Dark Souls III") {
        game.price = '59.99';
        game.description = 'Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!';
    }
    if(game.name === "Outlast") {
        game.price = '19.99';
        game.description = 'Hell is an experiment you cant survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you dare';
    }
    if(game.name === "Deus Ex: Mankind Divided") {
        game.price = '29.99';
        game.description = '';
    }
    if(game.name === "Spec Ops: The Line") {
        game.price = '5.99';
        game.description = 'Now an experienced covert operative, Adam Jensen is forced to operate in a world that has grown to despise his kind. Armed with a new arsenal of state-of-the-art weapons and augmentations, he must choose the right approach, along with who to trust, in order to unravel a vast worldwide conspiracy';
    }
    if(game.name === "BioShock Remastered") {
        game.price = '4.99';
        game.description = 'BioShock is a shooter unlike any other, loaded with unique weapons and tactics. Complete with an arsenal of revolvers, shotguns, and grenade launchers, players will be forced to genetically modify their DNA to become an even deadlier weapon';
    }
    if(game.name === "Marvel's Spider-Man") {
        game.price = '49.99';
        game.description = 'In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.';
    }
    if(game.name === "Far Cry 3") {
        game.price = '19.99';
        game.description = 'Discover the dark secrets of a lawless island ruled by violence and take the fight to the enemy as you try to escape. You’ll need more than luck to escape alive!';
    }
    if(game.name === "Amnesia: The Dark Descent") {
        game.price = '19.99';
        game.description = 'Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core.';
    }
    if(game.name === "Alan Wake") {
        game.price = '14.99';
        game.description = 'A Dark Presence stalks the small town of Bright Falls, pushing Alan Wake to the brink of sanity in his fight to unravel the mystery and save his love.';
    }
    if(game.name === "Half-Life 2: Deathmatch") {
        game.price = '4.99';
        game.description = 'Fast multiplayer action set in the Half-Life 2 universe! HL2s physics adds a new dimension to deathmatch play. Play straight deathmatch or try Combine vs. Resistance teamplay. Toss a toilet at your friend today!';
    }
    if(game.name === "Saints Row: The Third") {
        game.price = '9.99';
        game.description = 'Get ready for the most out-landish gameplay scenarios ever seen as the Third Street Saints take on the Syndicate!';
    }
    if(game.name === "Half-Life") {
        game.price = '9.99';
        game.description = 'Named Game of the Year by over 50 publications, Valves debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world.';
    }
    if(game.name === "Wolfenstein: The New Order") { //page 3 complete.
        game.price = '19.99';
        game.description = 'Wolfenstein®: The New Order reignites the series that created the first-person shooter genre. Wolfenstein offers a deep game narrative packed with action, adventure and first-person combat.';
    }
    if(game.name === "Borderlands") {
        game.price = '9.89';
        game.description = 'Get ready for the mind blowing insanity! Play as one of four trigger-happy mercenaries and take out everything that stands in your way! With its addictive action, frantic first-person shooter combat, massive arsenal of weaponry, RPG elements and four-player co-op, Borderlands is a breakthrough experience that challenges all the...';
    }
    if(game.name === "Detroit: Become Human") {
        game.price = '39.99';
        game.description = 'Detroit: Become Human puts the destiny of both mankind and androids in your hands, taking you to a near future where machines have become more intelligent than humans. Every choice you make affects the outcome of the game, with one of the most intricately branching narratives ever created';
    }
    if(game.name === "Path of Exile") {
        game.price = 'free';
        game.description = 'You are an Exile, struggling to survive on the dark continent of Wraeclast, as you fight to earn power that will allow you to exact your revenge against those who wronged you. Created by hardcore gamers, Path of Exile is an online Action RPG set in a dark fantasy world.';
    }
    if(game.name === "Stardew Valley") {
        game.price = '14.99';
        game.description = 'Youve inherited your grandfathers old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?';
    }
    if(game.name === "Prey") {
        game.price = '29.99';
        game.description = 'In Prey, you awaken aboard Talos I, a space station orbiting the moon in the year 2032. You are the key subject of an experiment meant to alter humanity forever – but things have gone terribly wrong. The space station has been overrun by hostile aliens and you are now being hunted.';
    }
    if(game.name === "L.A. Noire") {
        game.price = '19.99';
        game.description = 'L.A. Noire is a violent crime thriller that blends breathtaking action with true detective work to deliver an unprecedented interactive experience. This complete edition of L.A. Noire includes the complete original game and all previously released downloadable content.';
    }
    if(game.name === "Injustice: Gods Among Us Ultimate Edition") {
        game.price = '19.99';
        game.description = 'Injustice: Gods Among Us Ultimate Edition enhances the bold new franchise to the fighting game genre from NetherRealm Studios. Featuring six new playable characters, over 30 new skins, and 60 new S.T.A.R. Labs missions, this edition packs a punch.';
    }
    if(game.name === "Garry's") {
        game.price = '9.99';
        game.description = 'Garrys Mod is a physics sandbox. There arent any predefined aims or goals. We give you the tools and leave you to play.';
    }
    if(game.name === "PlayerUnknown’s Battlegrounds") {
        game.price = 'free';
        game.description = 'Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer';
    }
    if(game.name === "Sid Meier's Civilization V") {
        game.price = '5.99';
        game.description = 'Create, discover, and download new player-created maps, scenarios, interfaces, and more!';
    }
    if(game.name === "Dead Space") {
        game.price = '19.99';
        game.description = 'The sci-fi survival-horror classic returns, completely rebuilt to offer an even more immersive experience — including visual, audio, and gameplay improvements — while staying faithful to the original game’s thrilling vision.';
    }
    if(game.name === "For Honor") {
        game.price = '14.99';
        game.description = 'Carve a path of destruction through an intense, believable battlefield in For Honor';
    }
    if(game.name === "Fallout: New Vegas") {
        game.price = '9.99';
        game.description = 'Welcome to Vegas. New Vegas. Enjoy your stay!';
    }
    if(game.name === "Assassin’s Creed IV: Black Flag") {
        game.price = '39.99';
        game.description = 'The year is 1715. Pirates rule the Caribbean and have established their own lawless Republic where corruption, greediness and cruelty are commonplace.Among these outlaws is a brash young captain named Edward Kenway.';
    }
    if(game.name === "Dishonored") {
        game.price = '9.99';
        game.description = 'Reprise your role as a supernatural assassin in Dishonored 2. Declared a “masterpiece” by Eurogamer and hailed “a must-play revenge tale” by Game Informer, Dishonored 2 is the follow up to Arkane’s 1st-person action blockbuster & winner of 100+ "Game of the Year" awards, Dishonored.';
    }
    if(game.name === "Company of Heroes 2") {
        game.price = '19.99';
        game.description = 'Experience the ultimate WWII RTS platform with COH2 and its standalone expansions. This package includes the base game, which you can then upgrade by purchasing The Western Front Armies, Ardennes Assault and/or The British Forces. More info in the "About This Game" section below.';
    }
    if(game.name === "Hellblade: Senua's Sacrifice") { //aqui termina la pagina 4
        game.price = '29.99';
        game.description = 'From the makers of Heavenly Sword, Enslaved: Odyssey to the West, and DmC: Devil May Cry, comes a warrior’s brutal journey into myth and madness. Set in the Viking age, a broken Celtic warrior embarks on a haunting vision quest into Viking Hell to fight for the soul of her dead lover';
    }
    if(game.name === "Dishonored 2") {
        game.price = '29.99';
        game.description = 'Reprise your role as a supernatural assassin in Dishonored 2. Declared a “masterpiece” by Eurogamer and hailed “a must-play revenge tale” by Game Informer, Dishonored 2 is the follow up to Arkane’s 1st-person action blockbuster & winner of 100+ Game of the Year awards, Dishonored.';
    }
    if(game.name === "Hitman: Absolution") {
        game.price = '19.99';
        game.description = 'The original assassin is back! Betrayed by the Agency and hunted by the police, Agent 47 finds himself pursuing redemption in a corrupt and twisted world.';
    }
    if(game.name === "The Elder Scrolls V: Skyrim Special Edition") {
        game.price = '39.99';
        game.description = 'Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.';
    }
    if(game.name === "Control") {
        game.price = '39.99';
        game.description = 'Winner of over 80 awards, Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat.';
    }
    if(game.name === "Death Stranding") {
        game.price = '8.49';
        game.description = 'From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America. Can you reunite the shattered world, one step at a time?';
    }
    if(game.name === "Metal Gear Solid V: Ground Zeroes") {
        game.price = '19.99';
        game.description = 'World-renowned Kojima Productions brings the Metal Gear Solid franchise to Steam with METAL GEAR SOLID V: GROUND ZEROES. Play as the legendary hero Snake and infiltrate a Cuban military base to rescue the hostages. Can you make it out alive?';
    }

    if(game.name === "Star Wars Jedi: Fallen Order") {
        game.price = '39.99';
        game.description = 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.';
    }
    if(game.name === "The Last of Us™ Part I") {
        game.price = '59.99';
        game.description = 'Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.';
    }
    if(game.name === "Mass Effect 2 (2010)") {
        game.price = '19.99';
        game.description = 'Recruit. Explore. Control.Two years after Commander Shepard repelled invading Reapers bent on the destruction of organic life, a mysterious new enemy has emerged. On the fringes of known space, something is silently abducting entire human colonies';
    }
    if(game.name === "Dishonored 2") {
        game.price = '29.99';
        game.description = 'Reprise your role as a supernatural assassin in Dishonored 2. Declared a “masterpiece” by Eurogamer and hailed “a must-play revenge tale” by Game Informer, Dishonored 2 is the follow up to Arkane’s 1st-person action blockbuster & winner of 100+ Game of the Year awards, Dishonored.';
    }
    if(game.name === "Just Cause 3") {
        game.price = '19.99';
        game.description = 'With over 1000 km² of complete freedom from sky to seabed, Rico Rodriguez returns to unleash chaos in the most creative and explosive ways imaginable.';
    }
    if(game.name === "Mortal Kombat X") {
        game.price = '19.99';
        game.description = 'Experience the Next Generation of the #1 Fighting Franchise. Mortal Kombat X combines unparalleled, cinematic presentation with all new gameplay.';
    }
    if(game.name === "Bastion") {
        game.price = '14.99';
        game.description = 'Discover the secrets of the Calamity, a surreal catastrophe that shattered the world to pieces.';
    }
    if(game.name === "Star Wars Jedi: Fallen Order") {
        game.price = '14.99';
        game.description = '';
    }
    if(game.name === "Journey") {  //termina pagina 5
        game.price = '14.99';
        game.description = 'Explore the ancient, mysterious world of Journey as you soar above ruins and glide across sands to discover its secrets. Play alone or in the company of a fellow traveler and explore its vast world together. Featuring stunning visuals and a Grammy-nominated musical score, Journey delivers a breathtaking experience like no other.';
    }
    if(game.name === "Counter-Strike") {
        game.price = 'free';
        game.description = 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.)';
    };

};
 
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
