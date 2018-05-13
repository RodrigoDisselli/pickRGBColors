
function makeFlower(){
    var degree;
    for(var i=0; i<8; i++){

        degree = "rotate(" + (i * 45) + "deg)";
        document.getElementById("color" + i).style.transform = "" + degree;
        document.getElementById("color" + i + "-r").style.transform = "" + degree;
        document.getElementById("color" + i + "-g").style.transform = "" + degree; 
        document.getElementById("color" + i + "-b").style.transform = "" + degree; 

        document.getElementById("color" + i).style.zIndex = 9 - i;
        document.getElementById("color" + i + "-r").style.zIndex = 9 - i;
        document.getElementById("color" + i + "-g").style.zIndex = 9 - i;
        document.getElementById("color" + i + "-b").style.zIndex = 9 - i; 
    }
}

function defaultStart(){
    document.body.style.backgroundImage = "url('background.png')";
    //document.getElementById("print-rgb").setAttribute("disabled", "disabled");
    console.log();
    return colorEffect(255,255,255);
}

function sampleColor(print){
    document.getElementById("color-rgb").style.backgroundColor = print.value;
}

function printColor(color){
    var print = document.getElementById("print-rgb");
    print.value = document.getElementById("color" + color).style.backgroundColor;
    sampleColor(print);
}

function colorR(color){
    var print = document.getElementById("print-rgb");
    print.value = document.getElementById("color" + color + "-r").style.backgroundColor;
    sampleColor(print);
}

function colorG(color){
    var print = document.getElementById("print-rgb");
    print.value = document.getElementById("color" + color + "-g").style.backgroundColor;
    sampleColor(print);
}

function colorB(color){
    var print = document.getElementById("print-rgb");
    print.value = document.getElementById("color" + color + "-b").style.backgroundColor;
    sampleColor(print);
}

function copyRGB(){
    var copyText = document.getElementById("print-rgb");
    copyText.select();
    document.execCommand("Copy");
}

function callByIndex(){
    var indexValue = new Array(0,0,0);
    

    indexValue[0] = document.getElementById("input0").value;
    indexValue[1] = document.getElementById("input1").value;
    indexValue[2] = document.getElementById("input2").value;
    
    if(indexValue[0] == ""){indexValue[0] = 0;}
    if(indexValue[1] == ""){indexValue[1] = 0;}
    if(indexValue[2] == ""){indexValue[2] = 0;}

    if(indexValue[0] > 255){indexValue[0] = 255;}
    if(indexValue[1] > 255){indexValue[1] = 255;}
    if(indexValue[2] > 255){indexValue[2] = 255;}

    if((indexValue[0] == "")&&(indexValue[1] == "")&&(indexValue[2] == "")){ indexValue = [255, 255, 255]}

    return colorEffect(indexValue[0],indexValue[1],indexValue[2]);
}

function colorEffect(r,g,b){
    var colorMatrix = [];
    
    
    for(var i=0; i<4;i++){
        colorMatrix[i] = [];
        
            colorMatrix[i][0] = r;
            colorMatrix[i][1] = g;
            colorMatrix[i][2] = b;

    }

    return makeColor(colorMatrix);
}

function colorCalculator(colorMatrix){
    var dafaultValue = 5/7;
    var colorChanger = new Array(1.1,1.1,1.1);
    console.log("colorChanger= " + colorChanger[0]);

    if (colorMatrix[1][0] == 0){ colorMatrix[1][0] = 45; }
    if (colorMatrix[2][1] == 0){ colorMatrix[2][1] = 45; }
    if (colorMatrix[3][2] == 0){ colorMatrix[3][2] = 45; }

    colorMatrix[0][0] = colorMatrix[0][0]*dafaultValue;
    colorMatrix[0][1] = colorMatrix[0][1]*dafaultValue;
    colorMatrix[0][2] = colorMatrix[0][2]*dafaultValue;

    colorMatrix[1][0] = colorMatrix[1][0]*colorChanger[0];
    colorMatrix[1][1] = colorMatrix[1][1]*dafaultValue;
    colorMatrix[1][2] = colorMatrix[1][2]*dafaultValue;

    colorMatrix[2][0] = colorMatrix[2][0]*dafaultValue;  
    colorMatrix[2][1] = colorMatrix[2][1]*colorChanger[1];
    colorMatrix[2][2] = colorMatrix[2][2]*dafaultValue;

    colorMatrix[3][0] = colorMatrix[3][0]*dafaultValue;
    colorMatrix[3][1] = colorMatrix[3][1]*dafaultValue;
    colorMatrix[3][2] = colorMatrix[3][2]*colorChanger[2];

    if (colorMatrix[1][0] > 255){ colorMatrix[1][0] = 255; }
    if (colorMatrix[2][1] > 255){ colorMatrix[2][1] = 255; }
    if (colorMatrix[3][2] > 255){ colorMatrix[3][2] = 255; }

    return colorMatrix;
}

function makeColor(colorMatrix){
    
    for(var i=0; i<8; i++ ){

        document.getElementById("color" + i).style.backgroundColor = "rgb(" + colorMatrix[0][0] + "," + colorMatrix[0][1] + "," + colorMatrix[0][2] + ")";

        colorMatrix = colorCalculator(colorMatrix);
        //make the color of a div change
        document.getElementById("color" + i + "-r").style.backgroundColor = "rgb(" + colorMatrix[1][0] + "," + colorMatrix[1][1] + "," + colorMatrix[1][2] + ")";
        document.getElementById("color" + i + "-g").style.backgroundColor = "rgb(" + colorMatrix[2][0] + "," + colorMatrix[2][1] + "," + colorMatrix[2][2] + ")";
        document.getElementById("color" + i + "-b").style.backgroundColor = "rgb(" + colorMatrix[3][0] + "," + colorMatrix[3][1] + "," + colorMatrix[3][2] + ")";
    }
}

defaultStart();
makeFlower();
