const socket = io();

function rollDice(player) {
    const score = Math.floor(Math.random() * 6) + 1;
    socket.emit('rollDice', { player, score });
}

socket.on('diceRolled', (data) => {
    document.getElementById(`score${data.player}`).innerText = data.score;
});