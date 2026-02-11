var button1 = document.querySelector(".score1")
var num = document.querySelector(".number")
var numCount = 0
button1.addEventListener("click",function(){
    num.textContent = numCount + 1
    numCount++
    
})
var button2 = document.querySelector(".score2")
var num2 = document.querySelector(".number")
var num2Count = 0
button2.addEventListener("click",function(){
    num2Count = num2Count + 2
    num2.textContent = num2Count
})

var button3 = document.querySelector(".score3")
var num3 = document.querySelector(".number")
var num3Count = 0
button3.addEventListener("click",function(){
    num3Count = num3Count + 3
    num3.textContent = num3Count
})

var button4 = document.querySelector(".score4")
var num4 = document.querySelector(".guest")
var num4Count = 0
button4.addEventListener("click",function(){
    num4.textContent = num4Count + 1
    num4Count++
    
})

var button5 = document.querySelector(".score5")
var num5 = document.querySelector(".guest")
var num5Count = 0
button5.addEventListener("click",function(){
    num5Count = num5Count + 2
    num5.textContent = num5Count
})

var button6 = document.querySelector(".score6")
var num6 = document.querySelector(".guest")
var num6Count = 0
button6.addEventListener("click",function(){
    num6Count = num6Count + 3
    num6.textContent = num6Count
})