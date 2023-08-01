const btnElement = document.getElementById("btn");
const messageElem = document.getElementById("message");
const myBtn = document.getElementById("myBtn");
const myBtnMess = document.getElementById("message1")
const myBttn = document.getElementById("myBttn");
const myBttnMess = document.getElementById("message2")
const myDonut = document.getElementById("circle");
const donutDisplay = document.getElementById("donutCounter");
const autoClickAmt = document.getElementById("autoClick");
const clickMultiplierAmt = document.getElementById("clickMulti");
const aboutUs = document.getElementById("aboutbtn");

let autoClickerCost = 10;
let clickMultiCost = 100;
let donutCount = 0;
let autoClickCount= 0;
let autoClickCost=10;
let multiClickCount = 0;
let multiplierCost = 10;
let costMulti = 2;
let autoCostMulti = 2;
let hiddenBtn = 1000;


myDonut.addEventListener("click", donutClick);
autoClickAmt.addEventListener("mouseover", function(){
    autoClickAmt.style.color = "red";
})
autoClickAmt.addEventListener("mouseout", function(){
    autoClickAmt.style.color = "";
})
clickMultiplierAmt.addEventListener("mouseover", function(){
    clickMultiplierAmt.style.color = "red";
})
clickMultiplierAmt.addEventListener("mouseout", function(){
    clickMultiplierAmt.style.color = "";
})
donutDisplay.addEventListener("mouseover", function(){
    donutDisplay.style.fontSize = "50px";
    donutDisplay.style.color = "red";
})
aboutUs.addEventListener("click", handleClick);
function handleClick(){
    messageElem.textContent = "You have found the hidden treasure: 1000 Donuts";
    donutCount += hiddenBtn;

    donutDisplay.innerText = `Number of Donuts:  ${parseFloat(
        donutCount.toFixed(2)
    )}`;
    

    aboutUs.addEventListener("mouseout", function(){
        messageElem.textContent = "";
    })
}

function donutClick(){
    if (multiClickCount == 0){
        donutCount++;  
    }
    else{
        donutCount += 1 * multiClickCount;
    }

    donutDisplay.innerText = `Number of Donuts:  ${parseFloat(
        donutCount.toFixed(2)
    )}`;

    myDonut.addEventListener("dblclick", function(){
        myDonut.style.borderColor = "red";
        
    })
     myDonut.addEventListener("click", function(){
        myDonut.style.borderColor = "";
    
    })
    

}

myBttn.addEventListener("mouseover", function(){
    if (donutCount<multiplierCost){
        myBttnMess.textContent = "YOU DO NOT HAVE ENOUGH TO UPGRADE";
    }
    myBttn.addEventListener("mouseout", function(){
        myBttnMess.textContent = "";

    })


})

myBttn.addEventListener("click", function(){
    if(donutCount >= multiplierCost){
        donutCount -= multiplierCost;
        donutCount += multiClickCount
        multiClickCount++;
        multiplierCost *= costMulti;
        myBttn.innerText = "Upgrade: " + multiplierCost;
        donutDisplay.innerText = `Number of Donuts:  ${parseFloat(
            donutCount.toFixed(2)
        )}`

        clickMultiplierAmt.innerText = `Click Multiplier:  ${parseFloat(
            multiClickCount.toFixed(2)
        )}`;

    }
})
function startCounter(){
    donutCount += multiClickCount;
    donutCount ++;

    donutDisplay.innerText = `Number of Donuts:  ${parseFloat(
        donutCount.toFixed(2)
    )}`
    
    
}

myBtn.addEventListener("click", function(){
    if (donutCount>=multiplierCost){
        autoClickCount++;
        donutCount -= autoClickCost;
        autoClickCost *= autoCostMulti;
        myBtn.innerText = "Upgrade: " + autoClickCost;
        autoClickAmt.innerText = `Auto Clicker:  ${parseFloat(
            autoClickCount.toFixed(2)
        )}`;
        setInterval (startCounter, 1000);  
    }


})

myBtn.addEventListener("mouseover", function(){
    if (donutCount<autoClickCost){
        myBtnMess.textContent = "YOU DO NOT HAVE ENOUGH TO UPGRADE";
    }
    myBtn.addEventListener("mouseout", function(){
        myBtnMess.textContent = "";
    })

})


