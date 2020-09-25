


//}

window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");
	const stroke_weight = document.querySelector('.line_width');

	//window.addEventListener("resize", resizeCanvas);
	function resizeCanvas() {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
    }
	resizeCanvas();
	


	//variables
	let painting = false;
	const clearButton = document.querySelector(".clear");

	function startPosition(e) {
		painting = true;
		draw(e);
	}

	function finishedPosition() {
		painting = false;
		ctx.beginPath();
	}

	function draw(e) {
		if (!painting) return;
		ctx.lineWidth = stroke_weight.value;
		ctx.lineCap = "round";

		ctx.strokeStyle = brushColour;
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
	}

	function clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	
	  


	//eventlisteners

	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", finishedPosition);
	canvas.addEventListener("mousemove", draw);
	canvas.addEventListener("touchstart", startPosition);
	canvas.addEventListener("touchend", finishedPosition);
	canvas.addEventListener("touchmove", draw);
	
	window.addEventListener("resize", resizeCanvas);
	clearButton.addEventListener("click", clearCanvas);
	stroke_weight.addEventListener("change", function(){
		stroke.value
	});
	
	

	//function changeColor (event) {
      //  colorName = event.target.getAttribute('id')
        //ctx.strokeStyle = colorName
        //console.log(colorName)
        
    
})

const colours = ['#007892','#9d65c9','#ff427f', '#fc8210','yellow']
	
	for (const colour of colours) {
		const colourDiv = document.createElement('li')
		document.querySelector('ul').appendChild(colourDiv)
		colourDiv.classList.add('colour')
		colourDiv.style.backgroundColor = colour
		colourDiv.addEventListener('click', changeColour)
	  }

	function changeColour () {
		brushColour = this.style.backgroundColor
	  }

	  


    /*const colors = Array.from(document.querySelectorAll('.colors li'))


    function loadColors () {
        const colors = Array.from(document.querySelectorAll('.colors li'))
        colors.forEach(color => {
            colorName = color.getAttribute('id')
            color.style.backgroundColor = colorName
        } )*/
    

	//loadColors()
	

	//window.addEventListener('resize, ');

/*ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(100, 100, 100, 100);*/

/*ctx.strokeStyle = "red"; //need to go first
	ctx.beginPath();
	ctx.moveTo(100, 100);
	ctx.lineTo(100, 200);
	ctx.stroke();*/


    