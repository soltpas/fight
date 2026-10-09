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
let pa1 = 0;
let pa2 = 0;
let paa1 = 0;
let paa2 = 0;
let sb;
let pi1;
let pi2;

function preload() {
    pi1 = loadImage("clock.png");
    pi2 = loadImage("clock.png");
}

function setup() {
    createCanvas(1500, 170);
}

function draw() {
    background(250,250,250,50)
    textSize(30);
    fill("red");
    text("HP: " + ph1 + " ,ATTACK: " + pa1 + "〜" + paa1 + " ,SPEED: " + ps1 + " ,POINTS: " + pp1 + " ,CHARACTER: " + pc1, 0, 50);
    if (t == 0) {
        text("Player 1's turn", 0, 150);
    }
    fill("blue");
    text("HP: " + ph2 + " ,ATTACK: " + pa2 + "〜" + paa2 + " ,SPEED: " + ps2 + " ,POINTS: " + pp2 + " ,CHARACTER: " + pc2, 0, 100);
    if (t == 1) {
        text("Player 2's turn", 0, 150);
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
        pa1 = 5;
        paa1 = 10;
        pc1 = "clock";
        document.getElementById("anime1").style.setProperty(
            "--pi1-image",
            `url("${pi1.canvas.toDataURL()}")`
        );
        t = 1;
    } else {
        ph2 = 100;
        ps2 = 10;
        pp2 = 0;
        pa2 = 5;
        paa2 = 10;
        pc2 = "clock";
        m = 1;
        document.getElementById("clock-button").style.display = "none";
        speed();
    }
}

function clickattack() {
}