let m = 0;
let t = 0;
let ph1 = 0;
let ph2 = 0;
let ps1 = 0;
let ps2 = 0;
let pp1 = 0;
let pp2 = 0;
let pc1 = "";
let pc2 = "";
let sb;

function preload() {
}

function setup() {
    createCanvas(1500, 800);
}

function draw() {
    background(250,250,250,50)
    textSize(30);
    fill("red");
    text("HP: " + ph1, 0, 50);
    text("SPEED: " + ps1, 0, 100);
    text("POINTS: " + pp1, 0, 150);
    text("CHARACTER: " + pc1, 0, 750);
    if (t == 0) {
        text("your turn", 0, 200);
    }
    fill("blue");
    text("HP: " + ph2, 1300, 50);
    text("SPEED: " + ps2, 1300, 100);
    text("POINTS: " + pp2, 1300, 150);
    text("CHARACTER: " + pc2, 1300, 750);
    if (t == 1) {
        text("your turn", 1300, 200);
    }
}

function speed() {
    if (ps1 == ps2) {
            sb = floor(random(0,2));
            if (sb == 0) {
                ps1 += 1;
            } else {
                ps2 += 1;
            }
        }
        if (ps1 > ps2) {
            t = 0;
        } else {
            t = 1;
        }
}

function clickclock() {
    if (t == 0) {
        ph1 = 100;
        ps1 = 10;
        pp1 = 0;
        pc1 = "clock";
        t = 1;
    } else {
        ph2 = 100;
        ps2 = 10;
        pp2 = 0;
        pc2 = "clock";
        m = 1;
        document.getElementById("clock-button").style.display = "none";
        speed();
    }
}

function clickattack() {
}