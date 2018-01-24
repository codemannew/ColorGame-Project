var numSquare = 6;
var color = generateColor(numSquare);
var squares = document.querySelectorAll(".square");

var correctcolor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =  document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquare=3;
	color = generateColor(numSquare);
	correctcolor=pickColor();
	colorDisplay.textContent=correctcolor;
	 h1.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++)
	{
		if(color[i]){
			squares[i].style.backgroundColor=color[i];
		} else{
			squares[i].style.display="none";
		}
	}

});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numSquare=6;
	color = generateColor(numSquare);
	correctcolor=pickColor();
	colorDisplay.textContent=correctcolor;
	 h1.style.backgroundColor="steelblue";
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.backgroundColor=color[i];
			squares[i].style.display="block";
		
	}

});

colorDisplay.textContent = correctcolor;



resetButton.addEventListener("click",function(){
	 color = generateColor(numSquare);
	 correctcolor = pickColor();
	 colorDisplay.textContent=correctcolor;
	 for(var i=0;i<squares.length;i++)
	 {
	 	squares[i].style.backgroundColor=color[i];
	 }
	 h1.style.backgroundColor="steelblue";
	 message.textContent="";
	 reset.textContent="NEW GAME";
});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=color[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===correctcolor)
		{
			messageDisplay.textContent="Correct";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			reset.textContent="PLAY AGAIN";
		}
		else
		{	
			this.style.backgroundColor="#020B1D";
			messageDisplay.textContent="Try Again";
		}
	});
}
function changeColor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*color.length);
	return color[random];
}
 function generateColor(num){
 	var arr =[];
 	for(var i=0;i<num;i++)
 	{
 	arr.push(randomColor());
 		}
 	return arr;
 }

function randomColor(){
	var r= Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}




