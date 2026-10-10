let m = 0;
let t = 0;
let ph1 = 1;
let ph2 = 1;
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
let cs1 = function clockskill1(){
    target = document.getElementById("clock1");
    if (target.className == null || target.className=="") {
        target.className = "skill";
    }
    d = floor(random(3,6));
    ph2 -= d;
    log = "damage";
    ps1 += floor(random(1,4));
};
let cs2 = function clockskill2(){
    target = document.getElementById("clock2");
    if (target.className == null || target.className=="") {
        target.className = "skill";
    }
    d = floor(random(3,6));
    ph1 -= d;
    log = "damage";
    ps2 += floor(random(1,4));
};
let cse1 = function clockskillend1(){
    target = document.getElementById("clock1");
    target.className = "";
    document.getElementById("clock1").style.display = "none";
    ps1 -= 3;
    ps2 += floor(random(0,7));
    speed();
};
let cse2 = function clockskillend2(){
    target = document.getElementById("clock2");
    target.className = "";
    document.getElementById("clock2").style.display = "none";
    ps2 -= 3;
    ps1 += floor(random(0,7));
    speed();
}

function setup() {
    createCanvas(1500, 170);
    document.getElementById("attackeffectr1").style.display = "none";
    document.getElementById("attackeffectr2").style.display = "none";
    document.getElementById("clock1").style.display = "none";
    document.getElementById("clock2").style.display = "none";
}

function draw() {
    background(250,250,250,50);
    if (ph1 <= 0) {
        w = 1;
    }
    if (ph2 <= 0) {
        w = 2;
    }
    if (w == 0) {
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
        if (log == "skill"){
            if (t == 0){
                text("Player 1's skill", 500, 150);
            }
            if (t == 1){
                text("Player 2's skill", 500, 150);
            }
        }
        if (log == "not enough points"){
            text("Not enough points", 500, 150);
        }
    }
    if (w == 1) {
        textSize(50);
        fill("blue");
        text("Player 2 wins!", 500, 100);
    }
    if (w == 2) {
        textSize(50);
        fill("red");
        text("Player 1 wins!", 500, 100);
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

function clickattack() {
    if (w !== 0) {
        return;
    }
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

function clickskill() {
    if (w !== 0) {
        return;
    }
    if (t == 0){
        if(pp1 >= 2){
            log = "skill";
            pp1 -= 2;
            if(pc1 == "clock"){
                clockskill();
            }
        } else {
            log = "not enough points";
        }
    }
    if (t == 1){
        if(pp2 >= 2){
            log = "skill";
            pp2 -= 2;
            if(pc2 == "clock"){
                clockskill();
            }
        } else {
            log = "not enough points";
        }
    }
}

function clickultimate() {
    if (w !== 0) {
        return;
    }
}

function clickclock() {
    if (w !== 0) {
        return;
    }
    if (t == 0) {
        ph1 = 80;
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
        document.getElementById("clock1").style.setProperty(
            "--pia1-image",
            'url("clocka.png")'
        );
        t = 1;
    } else {
        ph2 = 80;
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
        document.getElementById("clock2").style.setProperty(
            "--pia2-image",
            'url("clocka.png")'
        );
        m = 1;
        document.querySelector(".choosecharacter").style.display = "none";
        speed();
    }
}

function clockskill() {
    if (t == 0) {
        const clock = document.getElementById("clock1");
        clock.style.display = "";
        requestAnimationFrame(() => {
            clock.className = "skill";
        });
        setTimeout(cs1,1000);
        setTimeout(cs1,2000);
        setTimeout(cs1,3000);
        setTimeout(cse1,3500);
    }
    if (t == 1) {
        const clock = document.getElementById("clock2");
        clock.style.display = "";
        requestAnimationFrame(() => {
            clock.className = "skill";
        });
        setTimeout(cs2,1000);
        setTimeout(cs2,2000);
        setTimeout(cs2,3000);
        setTimeout(cse2,3500);
    }
}
