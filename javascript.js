var arr = ['','','','','','']

const myFunction1 = () => {
  var x = document.getElementById("number1")
   arr[0]= x.value
}
document.getElementById("number1").addEventListener("keyup", myFunction1)

const myFunction2 = () => {
  var x = document.getElementById("number2")
   arr[1]= x.value
}
document.getElementById("number2").addEventListener("keyup", myFunction2)

const myFunction3 = () => {
  var x = document.getElementById("number3")
   arr[2]= x.value
}
document.getElementById("number3").addEventListener("keyup", myFunction3)

const myFunction4 = () => {
  var x = document.getElementById("number4")
   arr[3]= x.value
}
document.getElementById("number4").addEventListener("keyup", myFunction4)

const myFunction5 = () => {
  var x = document.getElementById("number5")
   arr[4]= x.value
}
document.getElementById("number5").addEventListener("keyup", myFunction5)

const myFunction6 = () => {
  var x = document.getElementById("number6")
   arr[5]= x.value
}
document.getElementById("number6").addEventListener("keyup", myFunction6)

const str="RANDOM NUMBER GENERATED IS :"

const num=parseInt(50*Math.random())
console.log(`Random Number Generated : ${num}`)
const winner = () =>{
	document.getElementById('img').src="win.jpg"
	document.getElementById('res').innerHTML=str + "<b>" + String(num) + "</b><br>" + "CONGRATULATIONS YOU ARE OUR LUCKY WINNER." + "<br>" + "YOU GUESSED IT RIGHT"
}

const loser = () =>{
	document.getElementById('img').src="lose.jpg"
	document.getElementById('res').innerHTML=str + String(num) + "<br>OOOPS<br>" + "BETTER LUCK NEXT TIME"
}

const errorDetect1 = () =>{
	document.getElementById('img').src="error.png"
	document.getElementById('res').innerHTML="You Have One Or More Blank(s) Left<br> Correct It And Try Again"
}

const errorDetect2 = () =>{
	document.getElementById('img').src="error.png"
	document.getElementById('res').innerHTML="Your One or More Input(s) is(are) not in between 0 & 50.<br> Correct It And Try Again"
}
const check = () => {
	
var flag=0
for(var i=0;i<6;i++)
{
	if(parseInt(arr[i])===num)
	{
		flag=1
	}
	if(arr[i]==='')
	{
		flag=2
	}
	if(parseInt(arr[i])<0 || parseInt(arr[i])>50)
	{
		flag=3
	}
}

if(flag===1)
{
	winner()
}
else if(flag===2)
{
     errorDetect1()
}
else if(flag===3)
{
	errorDetect2()
}
else{
	loser()
}
}
