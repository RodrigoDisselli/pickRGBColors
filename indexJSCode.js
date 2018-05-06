var r = 0;
var g = 0;
var b = 0;

var rR = 0;
var gR = 0;
var bR = 0;

var rG = 0;
var gG = 0;
var bG = 0;

var rB = 0;
var gB = 0;
var bB = 0;

var i;
var string;
var print = document.getElementById("print-rgb");
var showColor = document.getElementById("color-rgb");

defaultStart();

function defaultStart(){
    print.textContent = "empty";
    r = 255; g = 255; b = 255;
    rR = r; gR = g; bR = b;
    rG = r; gG = g; bG = b;
    rB = r; gB = g; bB = b;
    
    colorEffect();
}

function colorR(getButton){
    string = "color" + getButton + "-r";
    document.getElementById("" + string);
    print.textContent = document.getElementById("" + string).value;
    showColor.style.backgroundColor = document.getElementById("" + string).value;
}

function colorG(getButton){
    string = "color" + getButton + "-g";
    document.getElementById("" + string);
    print.textContent = document.getElementById("" + string).value;
    showColor.style.backgroundColor = document.getElementById("" + string).value;
}

function colorB(getButton){
    string = "color" + getButton + "-b";
    document.getElementById("" + string);
    print.textContent = document.getElementById("" + string).value;
    showColor.style.backgroundColor = document.getElementById("" + string).value;
}

function printColor(getButton){
    string = "color" + getButton;
    document.getElementById("" + string);
    print.textContent = document.getElementById("" + string).value;
    showColor.style.backgroundColor = document.getElementById("" + string).value;
}

function makeDarker(){
    r = r*(6/7);
    g = g*(6/7);
    b = b*(6/7);
}

function makeReder(){
    
    if(rR==0){  rR=  rR + 5; }

    rR = rR*(1.3);
    gR = gR*(5/7);
    bR = bR*(5/7);

    if(rR>255){ rR = 255;}
}

function makeGreener(){
    
    if(gG==0){  gG=  gG + 5;}

    rG = rG*(5/7);
    gG = gG*(1.1);
    bG = bG*(5/7);

    if(gG>255){  gG = 255;}
}

function makeBluer(){
    
    if(bB==0){  bB=  bB + 5;}

    rB = rB*(5/7);
    gB = gB*(5/7);
    bB = bB*(1.1);
    
    if(bB>255){ bB = 255;}
}

function colorButton(getColor){
    
     if(getColor==0){    r = 0; g = 197; b = 173; 
    }if(getColor==1){    r = 0; g = 210; b = 135; 
    }if(getColor==2){    r = 54; g = 168; b = 224; 
    }if(getColor==3){    r = 175; g = 112; b = 193; 
    }if(getColor==4){    r = 66; g = 91; b = 113; 

    }if(getColor==5){    r = 0; g = 173; b = 152; 
    }if(getColor==6){    r = 0; g = 185; b = 118; 
    }if(getColor==7){    r = 41; g = 146; b = 196; 
    }if(getColor==8){    r = 164; g = 91; b = 185; 
    }if(getColor==9){    r = 56; g = 79; b = 98; 

    }if(getColor==10){   r = 245; g = 206; b = 45; 
    }if(getColor==11){    r = 239; g = 147; b = 53; 
    }if(getColor==12){    r = 242; g = 101; b = 78; 
    }if(getColor==13){    r = 240; g = 243; b = 244; 
    }if(getColor==14){    r = 165; g = 180; b = 181;

    }if(getColor==15){   r = 249; g = 173; b = 41; 
    }if(getColor==16){    r = 224; g = 107; b = 16; 
    }if(getColor==17){    r = 209; g = 80; b = 58; 
    }if(getColor==18){    r = 201; g = 206; b = 209; 
    }if(getColor==19){    r = 145; g = 157; b = 158;   
    }


    colorEffect();
}

function colorEffect(){
    rR = r; gR = g; bR = b;
    rG = r; gG = g; bG = b;
    rB = r; gB = g; bB = b;

    for(i=1;i<9;i++){
        string = "color" + i;
        document.getElementById("" + string).style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b + ')';
        document.getElementById("" + string).value = 'rgb('+ r.toFixed(0) + ',' + g.toFixed(0) + ',' + b.toFixed(0) + ')';
        makeDarker();
        makeReder();
        document.getElementById("" + string + "-r").style.backgroundColor = 'rgb('+ rR + ',' + gR + ',' + bR + ')';
        document.getElementById("" + string + "-r").value = 'rgb('+ rR.toFixed(0) + ',' + gR.toFixed(0) + ',' + bR.toFixed(0) + ')';
        makeGreener();
        document.getElementById("" + string + "-g").style.backgroundColor = 'rgb('+ rG + ',' + gG + ',' + bG + ')';
        document.getElementById("" + string + "-g").value = 'rgb('+ rG.toFixed(0) + ',' + gG.toFixed(0) + ',' + bG.toFixed(0) + ')';
        makeBluer();
        document.getElementById("" + string + "-b").style.backgroundColor = 'rgb('+ rB + ',' + gB + ',' + bB + ')';
        document.getElementById("" + string + "-b").value = 'rgb('+ rB.toFixed(0) + ',' + gB.toFixed(0) + ',' + bB.toFixed(0) + ')';
    }
}
