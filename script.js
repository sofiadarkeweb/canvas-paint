//}
window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");
	const strokeWeight = document.querySelector(".lineSlider");
	let rainbowColor = document.querySelector(".magic");
	let hue = 0;
	let stroke = 0;
	let brushColour, rainbowPressed;

	//color divs
	const colours = ["#007892", "#9d65c9", "#ff427f", "#fc8210", "yellow"];
	const colourDivs = [];
	for (const colour of colours) {
		const colourDiv = document.createElement("li");
		document.querySelector("ul").appendChild(colourDiv);
		colourDiv.classList.add("colour");
		colourDiv.style.backgroundColor = colour;
		colourDiv.addEventListener("click", changeColour);
		colourDivs.push(colourDiv);
	}

	function changeColour() {
		rainbowPressed = false;
		//window.removeEventListener('mousemove', increment)
		brushColour = this.style.backgroundColor;
	}

	//resize window
	function resizeCanvas() {
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;
	}
	resizeCanvas();

	//rainbow color
	function rainbowColorFunction() {
		rainbowPressed = true;
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		window.addEventListener("mousemove", increment);
		//colourDivs.forEach(div => div.removeEventListener('click', changeColour))
	}

	function increment() {
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		hue++;
		if (hue >= 360) {
			hue = 0;
		}
	}

	//clear canvas
	function clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	//variables
	let painting = false;
	const clearButton = document.querySelector(".clear");

	function startPosition(e) {
		painting = true;
		draw(e);
	}

	function finishedPosition() {
		painting = false;
		ctx.closePath()
		ctx.beginPath();
	}

	function draw(e) {
		//e.preventDefault()
		console.log(e.type)
		if (!painting) return;
		ctx.lineWidth = strokeWeight.value;
		ctx.lineCap = "round";
		if (!rainbowPressed) ctx.strokeStyle = brushColour;
		ctx.lineTo(e.pageX, e.pageY);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(e.pageX, e.pageY);
		ctx.closePath();
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
	strokeWeight.addEventListener("change", function () {
		stroke.value;
	});

	rainbowColor.addEventListener("click", rainbowColorFunction);

});














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
