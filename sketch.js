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
let am1;
let am2;
let sb;
let d;
let log = "";
let w = 0;
let dc1 = function damagecount1(){
    target = document.getElementById("attackeffectr1");
            target.className = "";
    document.getElementById("attackeffectr1").style.display = "none";
    target = document.getElementById("attackeffectm1");
            target.className = "";
    document.getElementById("attackeffectm1").style.display = "none";
    target = document.getElementById("anime1");
            target.className = "";
    ph2 -= d;
    log = "damage";
    pp1 += floor(random(0,5));
    ps1 -= 3;
    ps2 += floor(random(0,7));
    speed();
}
let dc2 = function damagecount2(){
    target = document.getElementById("attackeffectr2");
            target.className = "";
    document.getElementById("attackeffectr2").style.display = "none";
    target = document.getElementById("attackeffectm2");
            target.className = "";
    document.getElementById("attackeffectm2").style.display = "none";
    target = document.getElementById("anime2");
            target.className = "";
    ph1 -= d;
    log = "damage";
    pp2 += floor(random(0,5));
    ps2 -= 3;
    ps1 += floor(random(0,7));
    speed();
}
let aer = function attackeffectr(){
    if(t == 0){
        target = document.getElementById("attackeffectr1");
        if (target.className == null || target.className=="") {
            target.className = "active";
        }
    }
    if(t == 1){
        target = document.getElementById("attackeffectr2");
        if (target.className == null || target.className=="") {
            target.className = "active";
        }
    }
};
let aem = function attackeffectm(){
    if(t == 0){
        target = document.getElementById("attackeffectm1");
        if (target.className == null || target.className=="") {
            target.className = "active";
        }
    }
    if(t == 1){
        target = document.getElementById("attackeffectm2");
        if (target.className == null || target.className=="") {
            target.className = "active";
        }
    }
};

function setup() {
    createCanvas(1500, 170);
    document.getElementById("attackeffectr1").style.display = "none";
    document.getElementById("attackeffectr2").style.display = "none";
}

function draw() {
    if (w == 0) {
        background(250,250,250,50);
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
        fill("black");
        if (log == "damage"){
            text(d + "damage", 500, 150);
        }
        if (log =="attack"){
            if (t == 0){
                text("Player 1's attacks", 500, 150);
            }
            if (t == 1){
                text("Player 2's attacks", 500, 150);
            }
        }
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
        am1 = 0;
        document.getElementById("anime1").style.setProperty(
            "--pi1-image",
            'url("clock.png")'
        );
        document.getElementById("attackeffectr1").style.setProperty(
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
        am2 = 0;
        document.getElementById("anime2").style.setProperty(
            "--pi2-image",
            'url("clock.png")'
        );
        document.getElementById("attackeffectr2").style.setProperty(
            "--pia2-image",
            'url("clocka.png")'
        );
        m = 1;
        document.querySelector(".choosecharacter").style.display = "none";
        speed();
    }
}

function clickattack() {
    if (t == 0){
        log = "attack";
        target = document.getElementById("anime1");
         if (target.className == null || target.className=="") {
         target.className = "attack";
        }
        d = floor(random(pa1,paa1+1));
        if(am1 == 0){
            setTimeout(aer,1000);
            document.getElementById("attackeffectr1").style.display = "";
        }
        setTimeout(dc1,3000);
    }
    if (t == 1){
        log = "attack";
        target = document.getElementById("anime2");
         if (target.className == null || target.className=="") {
         target.className = "attack";
        }
        d = floor(random(pa2,paa2+1));
        if(am2 == 0){
            setTimeout(aer,1000);
            document.getElementById("attackeffectr2").style.display = "";
        }
        setTimeout(dc2,3000);
    }
}