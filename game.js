var ctx = document.querySelector('canvas').getContext('2d');
var player = {
    x: 0,
    y: 0,
    width: 10,
    height: 10
};
var up = false;
var down = false;
var left = false;
var right = false;
document.onkeydown = function(event) {
    if (event.code == 'KeyA') {
        left = true;
    }
    if (event.code == 'KeyD') {
        right = true;
    }
    if (event.code == 'KeyW') {
        up = true;
    }
    if (event.code == 'KeyS') {
        down = true;
    }
}
document.onkeyup = function(event) {
    if (event.code == 'KeyA') {
        left = false;
    }
    if (event.code == 'KeyD') {
        right = false;
    }
    if (event.code == 'KeyW') {
        up = false;
    }
    if (event.code == 'KeyS') {
        down = false;
    }
}
function loop() {
    if (left) {
        player.x -= 5;
    }
    if (right) {
        player.x += 5;
    }
    if (up) {
        player.y -= 5;
    }
    if (down) {
        player.y += 5;
    }
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    requestAnimationFrame(loop);
}
loop();