function handleClick(){
    const messageElem = document.getElementById("message");
    messageElem.textContent = "CLICK ON MAPLE DONUT TO CREATE MORE";
}

const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", handleClick);

function handleMouse(){
    btnElement.style.backgroundColor = "green";
}

function handleMouseOut(){

    btnElement.style.backgroundColor=""; //Go back to default
}
btnElement.addEventListener("mouseover", handleMouse);
btnElement.addEventListener("mouseout", handleMouseOut);

let donutCount = 0;
const myBtn = document.getElementById("myBtn");
const myBttn = document.getElementById("myBttn");
const myDonut = document.getElementById("circle");
const donutDisplay = document.getElementById("donutCounter");

function addToDonutCount(){
    donutCount++;
    donutDisplay.innerText="Number of Donut clicks: " + donutCount;

}
myDonut.addEventListener("click", addToDonutCount);

 donutDisplay.addEventListener("click", function(){
    donutDisplay.style.fontSize = "50px";
    donutDisplay.style.color = "red";
 })

 myDonut.addEventListener("dblclick", function(){
    myDonut.style.borderColor = "purple";
 })
 myDonut.addEventListener("click", function(){
    myDonut.style.borderColor = "";
 })

 function handleClick1(){
    const messageElem = document.getElementById("message1");
    messageElem.textContent = "You do not have enough donuts to buy this feature";
}
 function handleClickOut1(){
    const messageElem = document.getElementById("message1");
    messageElem.textContent = "";
}
 function startCounter(){

    donutCount++;
    donutDisplay.innerText="Number of Donut clicks: " + donutCount;
    
}
function autoCounter(){
    donutCount -= 10;
    setInterval (startCounter, 1000);

}
let autoClickerCost = 10;
myBtn.addEventListener("click", function(){
    if (donutCount >= autoClickerCost){
        donutCount -= autoClickerCost;
        


    }
})
function autoVerifier(){
    if (donutCount <= 10){

        myBtn.addEventListener("click", handleClick1);
        myBtn.addEventListener("mouseout", handleClickOut1);
    }
    if (donutCount>=10){

        myBtn.addEventListener("click", autoCounter)

    }
}
    myBtn.addEventListener("mouseover", autoVerifier)    


 function changeColor(){
    myBtn.style.backgroundColor = "yellow"
 }
 
 myBtn.addEventListener("mouseover", changeColor);
 myBtn.addEventListener("mouseout", function(){
    myBtn.style.backgroundColor = ""
 })
 let countMulti = 1;
 function handleClick2(){
    const messageElem = document.getElementById("message2");
    messageElem.textContent = "You do not have enough donuts to buy this feature";
}

 function multiplyDonuts(){
    if (donutCount >= 100){
        donutCount - autoBuyer;
        donutCount+= countMulti;
        countMulti++;
    }
    
 }
 myBttn.addEventListener("click", multiplyDonuts)
 function changeColor1(){
    myBttn.style.backgroundColor = "pink"
 }
 myBttn.addEventListener("mouseover", changeColor1);
 myBttn.addEventListener("mouseout", function(){
    myBttn.style.backgroundColor = ""
 })