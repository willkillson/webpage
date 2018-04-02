

var mouse = {
    x: undefined, y: undefined
}
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log(mouse.x + " " + mouse.y);
});


var distance = function (x1, y1, x2, y2) {

    let dx = x2 - x1;
    let dy = y2 - y1;
    dx = dx * dx;
    dy = dy * dy;
    return Math.sqrt(dx + dy);
}

//Circle constructor
function Circle(x, y, dx, dy, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = 1;
    this.ograd = radius;
    this.radius = radius;
    this.draw = function () {

        c.beginPath();

        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.strokeStyle = `rgba(${this.r},${this.g},${this.b},1)`;
        c.fill();
        c.stroke();
    }
    this.update = function () {
        //resize code

        if (distance(this.x, this.y, mouse.x, mouse.y) < this.radius + 40) {
            this.radius = this.radius + 5;
        }
        else if (this.ograd < this.radius + 40) {
            this.radius = this.radius - 30;
        }


        if ((this.radius < 0) || (this.radius > 1000)) {//reseting big ass bounds
            this.radius = this.ograd;
        }
        //resize code

        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        if (this.x >= canvas.width - this.radius) {
            this.dx = -this.dx;
        }
        else if (this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y >= canvas.height - this.radius) {
            this.dy = -this.dy;
        }
        else if (this.y - this.radius < 0) {
            this.dy = -this.dy;
        }







    }

}

//array of circles
var circles = [];
for (var i = 0; i < 300; i++) {

    let radius = 60 + 45 * Math.random();

    //from 30 to innerwidth - 30
    let x = radius + (innerWidth - 3 * radius) * Math.random();
    let y = radius + (innerHeight - 3 * radius) * Math.random();


    let dx = 4 * (Math.random() - 0.5);
    let dy = 4 * (Math.random() - 0.5);
    let r = Math.floor(256 * Math.random());
    let g = Math.floor(256 * Math.random());
    let b = Math.floor(256 * Math.random());


    var circle = new Circle(x, y, dx, dy, radius, r, g, b);

    circles.push(circle);
}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < circles.length; i++) {
        circles[i].draw();
        circles[i].update();
    }

}

animate();