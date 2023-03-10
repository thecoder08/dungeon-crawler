var ctx = document.querySelector('canvas').getContext('2d');
var player = {
    x: 0,
    y: 0,
    width: 10,
    height: 10
};
ctx.fillStyle = 'red';
ctx.fillRect(player.x, player.y, player.width, player.height);