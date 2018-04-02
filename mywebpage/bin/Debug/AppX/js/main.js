// Your code here!
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 2;


var c = canvas.getContext('2d');


//////////////////////////////////////////line drawing
//line
//c.beginPath();
//c.moveTo(0, 0);
//c.lineTo(canvas.width, canvas.height);
//c.strokeStyle = "rgba(255,255,0,1)";
//c.stroke();


////////////////////////////////////////PutPixelFunction

//function PutPixel(x, y, r, g, b, a) {
//    c.beginPath();
//    c.moveTo(x, y);
//    c.lineTo(x+1, y+1);
//    c.strokeStyle = `rgba(${r},${g},${b},${a})`;
//    c.stroke();
//}


//for (var i = 0; i < 300; i++) {
//    PutPixel(canvas.width*Math.random(), canvas.height * Math.random(), 255, 255, 0, 1);
//}


//////////////////////////////////////////Arc Circle
//for (var i = 0; i < 10000; i++) {
//    var r = Math.floor(256 * Math.random());
//    var g = Math.floor(256 * Math.random());
//    var b = Math.floor(256 * Math.random());
//    var a = 1;
//    var x = Math.floor(canvas.width * Math.random());
//    var y = Math.floor(canvas.height * Math.random());
//    c.beginPath();
//    c.strokeStyle = `rgba(${r},${g},${b},${a})`;
//    c.arc(x, y, 30, 0, 2 * Math.PI, false);
//    c.stroke();
//}

function Board() {
 //////////////////////////////////////////rectangle
//c.fillStyle = 'rgba(255,0,0,1)';
//var GridSize = 40;
//var fillamount = 1.0;
//for (var i = 0; i < 8; i++) {
//    for (var j = 0; j < 8; j++) {
//        c.fillStyle = `rgba(255,0,0,${fillamount})`;
//        c.fillRect(GridSize * i + i, GridSize * j + j, GridSize, GridSize);
//    }
//    fillamount = (fillamount - 2 * (1 / 16));
//}
    this._gridHeight = 25;
    this._gridWidth = 11;
    this._cellSize = 30;
    this._cellPadding = 5;
    this.isEmpty = true;//this will invoke a place piece function

    this._board = new Array(this._gridWidth);//creating the multidem array in javascript <3
    for (let i = 0; i < this._board.length; i++) {
        this._board[i] = new Array(this._gridHeight);
    }
    for (let i = 0; i < this._gridWidth; i++) {
        //////board set up
        //assigns whole _board array with empty
        for (let j = 0; j < this._gridHeight; j++) {
            this._board[i][j] = "empty";
        }
    }
    for (let i = 0; i < this._gridHeight; i++) {
        //////board set up
        //assigns boarder portions of _board array
        this._board[0][i] = "boarder";
        this._board[this._gridWidth-1][i] = "boarder";
        if (i < this._gridWidth) {
            this._board[i][0] = "boarder";
            this._board[i][this._gridHeight-1] = "boarder";
        }
    }
    for (let i = 0; i < this._gridHeight; i++) {
        this._board[5][i] = "block";
    }

    this.update = function () {
        if (this.isEmpty === true) {
            this.placePiece();
        }
    }
    this.placePiece = function () {

    }
    this.draw = function () {



        for (let i = 0; i < this._gridWidth; i++) {
            for (let j = 0; j < this._gridHeight; j++) {
                //we need to set the specific color depending on what is in the array

                //so this is where we pick different colors
                c.beginPath();
                c.fillStyle = 'red';
         
                if (this._board[i][j] === "boarder") {
                    c.fillStyle = 'blue';
                }
                if (this._board[i][j] === "empty") {
                    c.fillStyle = 'black';
                }
                if (this._board[i][j] === "block") {
                    c.fillStyle = 'green';
                }

 
   
                c.fillRect(i * this._cellSize, j * this._cellSize, this._cellSize, this._cellSize);
                c.stroke();
            }
        }




    }

}

function Piece() {

}



var mouse = {
    x: undefined, y: undefined
}
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log(mouse.x + " " + mouse.y);
});




var board = new Board();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    board.draw();
}

animate();