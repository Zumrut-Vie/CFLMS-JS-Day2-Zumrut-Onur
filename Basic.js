
// Basic Ex 1
/*var temp = Math.floor(Math.random() * 25) + (-5) ;
if(temp<10){
	console.log("The weather is cold");
}else{
	console.log("The weather is moderate");
}*/

// Basic Ex 2 (with spread operator)
/*numberArray = [];
var a = Math.max(...numberArray);
console.log(a);*/

//Basic Ex 3
var temp = Math.floor(Math.random() * 32) + (-5) ;
if(temp<10){
	document.getElementById("img").src="./winter.jpg";
}else if (temp > 10 && temp < 32 ){
	document.getElementById("img").src="./rainy.jpg";
	}else{
    document.getElementById("img").src="./summer.jpg";
	}

