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
let uc1 = 0;
let uc2 = 0;
let ucm1 = 0;
let ucm2 = 0;
let am1;
let am2;
let sb;
let d;
let log = "";
let target;
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
    document.getElementById("clocku").style.display = "none";
    ph2 -= d;
    log = "damage";
    pp1 += floor(random(0,5));
    uc1 -= floor(random(0,2));
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
    document.getElementById("clocku").style.display = "none";
    ph1 -= d;
    log = "damage";
    pp2 += floor(random(0,5));
    uc2 -= floor(random(0,2));
    ps2 -= 3;
    ps1 += floor(random(0,7));
    speed();
}
let ee = function effectend(){
    target = document.getElementById("attackeffectr1");
            target.className = "";
    target = document.getElementById("attackeffectm1");
            target.className = "";
    target = document.getElementById("anime1");
            target.className = "";
    target = document.getElementById("attackeffectr2");
            target.className = "";
    target = document.getElementById("attackeffectm2");
            target.className = "";
    target = document.getElementById("anime2");
            target.className = "";
}
let aer = function attackeffectr(){
    if(t == 0){
        target = document.getElementById("attackeffectr1");
        if (target.className === "" || target.className === null) {
            target.className = "active";
        }
    }
    if(t == 1){
        target = document.getElementById("attackeffectr2");
        if (target.className === "" || target.className === null) {
            target.className = "active";
        }
    }
};
let aem = function attackeffectm(){
    if(t == 0){
        target = document.getElementById("attackeffectm1");
        if (target.className === "" || target.className === null) {
            target.className = "active";
        }
    }
    if(t == 1){
        target = document.getElementById("attackeffectm2");
        if (target.className === "" || target.className === null) {
            target.className = "active";
        }
    }
};
let cs1 = function clockskill1(){
    target = document.getElementById("clock1");
    if (target.className === "" || target.className === null) {
        target.className = "skill";
    }
    d = floor(random(3,6));
    ph2 -= d;
    log = "damage";
    ps1 += floor(random(1,4));
    uc1 -= 1;
};
let cs2 = function clockskill2(){
    target = document.getElementById("clock2");
    if (target.className === "" || target.className === null) {
        target.className = "skill";
    }
    d = floor(random(3,6));
    ph1 -= d;
    log = "damage";
    ps2 += floor(random(1,4));
    uc2 -= 1;
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
let cu1 = function clockultimate1(){
    target = document.getElementById("clocku");
    if (target.className === "" || target.className === "two") {
        target.className = "";
    } else if (target.className === "three") {
        target.className = "two";
    } else if (target.className === "four") {
        target.className = "three";
    } else if (target.className === "five") {
        target.className = "four";
    } else if (target.className === "six") {
        target.className = "five";
    } else if (target.className === "seven") {
        target.className = "six";
    }
    target = document.getElementById("anime1");
        if (target.className === "" || target.className === null) {
            target.className = "attack";
        }
    aer();
    d = floor(random(pa1,paa1+1));
    target = document.getElementById("clocku");
    if (target.className === "") {
        setTimeout(dc1,1000);
    } else {
        setTimeout(ee,1000);
        ph2 -= d;
    }
}
let cu2 = function clockultimate2(){
    target = document.getElementById("clocku");
    if (target.className === "" || target.className === "two") {
        target.className = "";
    } else if (target.className === "three") {
        target.className = "two";
    } else if (target.className === "four") {
        target.className = "three";
    } else if (target.className === "five") {
        target.className = "four";
    } else if (target.className === "six") {
        target.className = "five";
    } else if (target.className === "seven") {
        target.className = "six";
    }
    target = document.getElementById("anime2");
        if (target.className === "" || target.className === null) {
            target.className = "attack";
        }
    aer();
    d = floor(random(pa2,paa2+1));
    target = document.getElementById("clocku");
    if (target.className === "") {
        setTimeout(dc2,1000);
    } else {
        setTimeout(ee,1000);
        ph1 -= d;
    }
};

function setup() {
    createCanvas(1300, 170);
    document.getElementById("attackeffectr1").style.display = "none";
    document.getElementById("attackeffectr2").style.display = "none";
    document.getElementById("clock1").style.display = "none";
    document.getElementById("clock2").style.display = "none";
    document.getElementById("clocku").style.display = "none";
}

function draw() {
    background(250,250,250,50);
    if (uc1 < 0) {
        uc1 = 0;
    }
    if (uc2 < 0) {
        uc2 = 0;
    }
    if (ph1 <= 0) {
        w = 1;
    }
    if (ph2 <= 0) {
        w = 2;
    }
    if (w == 0) {
        textSize(30);
        fill("red");
        text("HP: " + ph1 + " ,ATTACK: " + pa1 + "〜" + paa1 + " ,SPEED: " + ps1 + " ,POINTS: " + pp1 + " ,ULTIMATE: " + uc1 + " ,USING: " + pc1, 0, 50);
        if (t == 0) {
            text("Player 1's turn", 0, 150);
        }
        fill("blue");
        text("HP: " + ph2 + " ,ATTACK: " + pa2 + "〜" + paa2 + " ,SPEED: " + ps2 + " ,POINTS: " + pp2 + " ,ULTIMATE: " + uc2 + " ,USING: " + pc2, 0, 100);
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
        if (target.className === "" || target.className === null) {
            target.className = "attack";
        }
        d = floor(random(pa1,paa1+1));
        if(am1 == 0){
            setTimeout(aer,1000);
            document.getElementById("attackeffectr1").style.display = "";
        }
        setTimeout(dc1,3000);
        if(am1 == 1){
            setTimeout(aem,1000);
            document.getElementById("attackeffectm1").style.display = "";
        }
        setTimeout(dc1,3000);
    }
    if (t == 1){
        log = "attack";
        target = document.getElementById("anime2");
        if (target.className === "" || target.className === null) {
            target.className = "attack";
        }
        d = floor(random(pa2,paa2+1));
        if(am2 == 0){
            setTimeout(aer,1000);
            document.getElementById("attackeffectr2").style.display = "";
        }
        setTimeout(dc2,3000);
        if(am2 == 1){
            setTimeout(aem,1000);
            document.getElementById("attackeffectm2").style.display = "";
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
    if (t == 0){
        if(uc1 == 0){
            log = "ultimate";
            uc1 = ucm1;
            if(pc1 == "clock"){
                clockultimate();
            }
        } else {
            log = "not enough points";
        }
    }
    if (t == 1){
        if(uc2 == 0){
            log = "ultimate";
            uc2 = ucm2;
            if(pc2 == "clock"){
                clockultimate();
            }
        } else {
            log = "not enough points";
        }
    }
}

function clickclock() {
    if (w !== 0) {
        return;
    }
    if (t == 0) {
        ph1 = 230;
        ps1 = 10;
        pp1 = 0;
        pa1 = 10;
        paa1 = 15;
        pc1 = "clock";
        am1 = 0;
        uc1 = 12;
        ucm1 = 12;
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
        document.getElementById("clocku").style.setProperty(
            "--pia1-image",
            'url("clocka.png")'
        );
        t = 1;
    } else {
        ph2 = 230;
        ps2 = 10;
        pp2 = 0;
        pa2 = 10;
        paa2 = 15;
        pc2 = "clock";
        am2 = 0;
        uc2 = 12;
        ucm2 = 12;
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
        document.getElementById("clocku").style.setProperty(
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

function clockultimate() {
    if (t == 0) {
        const clock = document.getElementById("clocku");
        clock.style.display = "";
        requestAnimationFrame(() => {
            clock.className = "seven";
        });
        document.getElementById("attackeffectr1").style.display = "";
        setTimeout(cu1,6000);
        setTimeout(cu1,8000);
        setTimeout(cu1,10000);
        setTimeout(cu1,12000);
        setTimeout(cu1,14000);
        setTimeout(cu1,16000);
    }
    if (t == 1) {
        const clock = document.getElementById("clocku");
        clock.style.display = "";
        requestAnimationFrame(() => {
            clock.className = "seven";
        });
        document.getElementById("attackeffectr2").style.display = "";
        setTimeout(cu2,6000);
        setTimeout(cu2,8000);
        setTimeout(cu2,10000);
        setTimeout(cu2,12000);
        setTimeout(cu2,14000);
        setTimeout(cu2,16000);
    }
}

function clickfridge() {
    if (w !== 0) {
        return;
    }
    if (t == 0) {
        ph1 = 430;
        ps1 = 6;
        pp1 = 0;
        pa1 = 5;
        paa1 = 10;
        pc1 = "fridge";
        am1 = 1;
        uc1 = 15;
        ucm1 = 15;
        document.getElementById("anime1").style.setProperty(
            "--pi1-image",
            'url("fridge.png")'
        );
        document.getElementById("attackeffectr1").style.setProperty(
            "--pia1-image",
            'url("fridgea.png")'
        );
        document.getElementById("clock1").style.setProperty(
            "--pia1-image",
            'url("fridgea.png")'
        );
        document.getElementById("clocku").style.setProperty(
            "--pia1-image",
            'url("fridgea.png")'
        );
        t = 1;
    } else {
        ph2 = 430;
        ps2 = 6;
        pp2 = 0;
        pa2 = 5;
        paa2 = 10;
        pc2 = "fridge";
        am2 = 0;
        uc2 = 15;
        ucm2 = 15;
        document.getElementById("anime2").style.setProperty(
            "--pi2-image",
            'url("fridge.png")'
        );
        document.getElementById("attackeffectr2").style.setProperty(
            "--pia2-image",
            'url("fridgea.png")'
        );
        document.getElementById("clock2").style.setProperty(
            "--pia2-image",
            'url("fridgea.png")'
        );
        document.getElementById("clocku").style.setProperty(
            "--pia2-image",
            'url("fridgea.png")'
        );
        m = 1;
        document.querySelector(".choosecharacter").style.display = "none";
        speed();
    }
}
