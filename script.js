//}
window.addEventListener("load", () => {
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");
	const strokeWeight = document.querySelector(".lineSlider");
	let rainbowColor = document.querySelector(".magic");
	let eraser = document.querySelector(".eraser");
	const clearButton = document.querySelector(".clear");
	let hue = 0;
	let stroke = 0;
	let brushColour;
	let rainbowPressed;
	let painting = false;

	//Adding color divs
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

	//change colours function
	function changeColour() {
		rainbowPressed = false;
		brushColour = this.style.backgroundColor;
	}

	//resize window
	function resizeCanvas() {
		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;
	}
	resizeCanvas();

	//rainbow color
	function rainbowCreator() {
		rainbowPressed = true;
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		window.addEventListener("mousemove", incrementColor);
	}

	function incrementColor() {
		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		hue++;
		if (hue >= 360) {
			hue = 0;
		}
	}

	//Clear canvas button
	function clearCanvas() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	// ERASOR BUTTON
	function eraseIt() {
		console.log(this);
		rainbowPressed = false;
		brushColour = "#adefd1ff";
	}

	// THE DRAWING
	function startPosition(e) {
		painting = true;
		draw(e);
	}

	function finishedPosition() {
		painting = false;
		ctx.closePath();
		ctx.beginPath();
	}

	function draw(e) {
		console.log(e.type);
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
	rainbowColor.addEventListener("click", rainbowCreator);
	eraser.addEventListener("click", eraseIt);
	strokeWeight.addEventListener("change", function () {
		stroke.value;
	});
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
