
var map = document.getElementById("mapId");
var rowCount = 25;

var colCount = 25;

var size = 25;

map.style.width = colCount * size + "px";
map.style.height = rowCount * size + "px";

var elements = [];

for (var i = 0; i < rowCount; i++) {

    var ulCreate = document.createElement("ul");
    ulCreate.style.height = size + "px";
    var rowArr = [];
    for (var j = 0; j < colCount; j++) {
        var liCreate = document.createElement("li");

        liCreate.style.width = (size - 2) + "px";
        liCreate.style.height = (size - 2) + "px";

        ulCreate.appendChild(liCreate);

        rowArr.push(liCreate);
    }

    map.appendChild(ulCreate);

    elements.push(rowArr);
}

var snakeArr = [];

for (var index = 0; index < 3; index++) {

    elements[0][index].className = "snake";

    snakeArr.push(elements[0][index]);
}
console.log(snakeArr)

var col = 2;
var row = 0;


var eggCol = 0;
var eggRow = 0;


function random(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}

function createFood() {

    eggCol = random(0, colCount);
    eggRow = random(0, rowCount);

    if (elements[eggRow][eggCol].className == "snake") {

        createFood();
    } else {

        elements[eggRow][eggCol].className = "egg";
    }
}

createFood();

var timer = null;

var direction = "right";

var bool = false;

function snakeMove() {

    switch (direction) {
        case "right":
            col++;
            break;
        case "left":
            col--;
            break;
        case "down":
            row++;
            break;
        case "up":
            row--;
            break;
    }

    if (col < 0 || col > (colCount - 1) || row < 0 || row > (rowCount - 1)) {
        console.log(" 游戏结束了  蛇跑出范围！");

        clearInterval(timer);
        return;
    }
    for (var k = 0; k < snakeArr.length; k++) {
        if (elements[row][col] == snakeArr[k]) {
            console.log("蛇踩到自己了");
            clearInterval(timer);
            return;
        }
    }

    if (col == eggCol && row == eggRow) {

        elements[eggRow][eggCol].className = "snake";
        snakeArr.push(elements[eggRow][eggCol]);

        createFood();

    } else {

        snakeArr[0].className = "";

        snakeArr.shift();

        elements[row][col].className = "snake";

        snakeArr.push(elements[row][col]);
    }

}

timer = setInterval(snakeMove, 300);

document.onkeydown = function (even) {
    console.log(even.keyCode);
    if (bool) {
        return;
    }
    switch (even.keyCode) {
        case 38:
            if (direction != "down") {
                direction = "up";
                bool = true;
            }
            break;
        case 40:
            if (direction != "up") {
                direction = "down";
                bool = true;
            }

            break;
        case 37:
            if (direction != "right") {
                direction = "left";
                bool = true;
            }
            break;
        case 39:
            if (direction != "left") {
                direction = "right";
                bool = true;
            }
            break;

    }
    setTimeout(function () {
        bool = false;
    }, 200)
}

