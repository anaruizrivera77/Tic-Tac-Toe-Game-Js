let sign = "x";
let button = document.getElementById("btn");
let display = document.getElementById("player");



function fill(number){
    let box = document.getElementById("div" + number);
    console.log(box);

    if(box.innerText ==""){
        box.innerText = sign;

        check();

        display.innerHTML = "Now " + sign + " 's Turn";
    }

    if(winer()){
        alert("WON");
    }
    else{
        if(draw()){
            alert("Match Draw");
        }
    }
}

function check(){
    if(sign == "x"){
        sign = "0";
    }
    else{
        sign = "x";
    }
}

function getdata(div){
   return document.getElementById(div).innerHTML;
}


function winer(){
    if(checkcondition("div1","div2","div3")||checkcondition("div4","div5","div6")||
    checkcondition("div7","div8","div9")||checkcondition("div1","div4","div7")||
    checkcondition("div2","div5","div8")||checkcondition("div3","div6","div9")||
    checkcondition("div3","div5","div7")||checkcondition("div1","div5","div9"))
    {
        return true;
    }
}

function checkcondition(ex1,ex2,ex3){
    if(getdata(ex1)!=""&&
    getdata(ex2)!=""&&
    getdata(ex3)!=""&&
    
    
    getdata(ex1) == getdata(ex2)&&
    getdata(ex2) == getdata(ex3)
    )
    {
        return true;
    }
}

function draw(){
    if(getdata("div1")!=""&&
    getdata("div2")!=""&&
    getdata("div3")!=""&&
    getdata("div4")!=""&&
    getdata("div5")!=""&&
    getdata("div6")!=""&&
    getdata("div7")!=""&&
    getdata("div8")!=""&&
    getdata("div9")!="")

    {
        return true;
    }
    
}

function reset(){
    for(var i=1;i<=9;i++){
        document.getElementById("div" + i).innerHTML="";
    }
}













