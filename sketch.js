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
let time;
let d;
let ae = function attackeffect(){
    if(t == 0){
        document.getElementById("ae1").style.display = "";
        target = document.getElementById("attackeffect1");
        if (target.className == null || target.className=="") {
            target.className = "active";
        } else {
            target.className = "";
        }
    }
    if(t == 1){
        document.getElementById("ae2").style.display = "";
        target = document.getElementById("attackeffect2");
        if (target.className == null || target.className=="") {
            target.className = "active";
        } else {
            target.className = "";
        }
    }
};

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
            'url("clock.png")'
        );
        document.getElementById("ae1").style.setProperty(
            "--pia1-image",
            'url("clocka.png")'
        );
        t = 1;
    } else {
        ph2 = 100;
        ps2 = 10;
        pp2 = 0;
        pa2 = 5;
        paa2 = 10;
        pc2 = "clock";
        document.getElementById("anime2").style.setProperty(
            "--pi2-image",
            'url("clock.png")'
        );
        m = 1;
        document.getElementById("clock-button").style.display = "none";
        speed();
    }
}

function clickattack() {
    if (t == 0){
        time = millis();
        target = document.getElementById("anime1");
         if (target.className == null || target.className=="") {
         target.className = "attack";
        }
        d = floor(random(pa1,paa1+1));

    }
    if (t == 1){
        time = millis();
        target = document.getElementById("anime2");
         if (target.className == null || target.className=="") {
         target.className = "attack";
        }
        d = floor(random(pa2,paa2+1));
    }
}