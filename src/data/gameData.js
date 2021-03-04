let Game = {
    name: '',
    platforms: [],
    genres: [],
}

let Games = [];

let gamesInfo = [
    'Fortnite', 
    0,
    3,
    'Dauntless', 
    0,
    2,
    'Rocket League',
    0,
    7,
    'SMITE',
    0,
    0,
    'Paladins: Champions of the Realm',
    0, 
    3,
    'Realm Royale',
    0, 
    0,
    'Call of Duty: Modern Warfare',
    0, 
    3,
    'Call of Duty: Warzone',
    0, 
    3, 
    '#IDARB',
    3,
    5,
    'Atom Universe',
    2,
    2,
    'DC Universe Online',
    2,
    4,
    'Aragmai',
    0,
    4,
    'Ark: Survival Evolved',
    0,
    4,
    'Astroneer',
    0,
    6,
    'Black Desert Online',
    1,
    5
];

let platforms = [['ps', 'x', 'pc'], ['ps', 'x'], ['ps', 'pc'], ['x', 'pc']];
let genres = ['action', 'strategy', 'rpg', 'shooter', 'adventure', 'puzzle', 'racing', 'sports'];

gamesInfo.forEach((item, i) => {
    if(item.substring) {
        let game = new Game();
        game.name = item;
        game.platform = platforms[i + 1];
        game.genres = genres[i + 2];
        Games.push(game);
    }
});

console.log(Games);

// export default Games;