const games = [
    { name: "Slither.io", url: "https://slither.io/" },
    { name: "Among Us", url: "https://www.playamongus.net/" },
    { name: "Krunker.io", url: "https://krunker.io/" },
    { name: "Minecraft Classic", url: "https://classic.minecraft.net/" },
    { name: "Happy Wheels", url: "https://totaljerkface.com/happy_wheels.tjf" }
];

const searchInput = document.getElementById('search');
const gameList = document.getElementById('gameList');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    gameList.innerHTML = '';
    
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));
    
    filteredGames.forEach(game => {
        const li = document.createElement('li');
        li.textContent = game.name;
        li.onclick = () => window.open(game.url, '_blank');
        gameList.appendChild(li);
    });
});