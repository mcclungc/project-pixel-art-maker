// Connie McClung - Pixel Art Project Revised
// 07/30/2022

// Select color input TO DO: update gridColor value upon change
const gridColor = document.querySelector("#colorPicker");

// Select size input
const gridHeight = document.querySelector("#inputHeight");
const gridWidth = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid
const setupForm = document.querySelector("#sizePicker");
setupForm.addEventListener("submit", makeGrid);

//add a single event listener for click events in table
let canvas = document.querySelector("#pixelCanvas");
canvas.addEventListener("click", changeCell);


function makeGrid(event) {
	event.preventDefault();
	let canvas = document.querySelector("#pixelCanvas");
	makeTable(canvas);
}


//toggle to add/remove user-defined color when cell is clicked
function changeCell(event) {
	// only respond if event target is a table cell
	if (event.target.classList.contains("newTD")) {
		// if class "clicked" is present, cell is colored--change back and remove the class
		if (event.target.classList.contains("clicked")) {
			event.target.style.backgroundColor = "white";
			event.target.classList.remove("clicked");
		}
		// if class "clicked" is not present, set color to current #colorPicker value and add the class
		else {
			let cellColor = gridColor.value;
			event.target.style.backgroundColor = cellColor;
			event.target.classList.add("clicked");
		}
	}
}


// make table with submitted height and width dimensions
function makeTable(canvas) {
	// clear existing table 
	if (canvas.classList.contains("has_table")) {
		canvas.innerHTML = "";
		canvas.classList.remove("has_table");
	}
	let rows = gridHeight.value;
	let cols = gridWidth.value;
	for (let r = 1; r <= rows; r++) {
		let newTR = document.createElement("tr");
		canvas.appendChild(newTR);
		for (let c = 1; c <= cols; c++) {
			let newTD = document.createElement("td");
			newTD.classList.add("newTD");
			newTR.appendChild(newTD);
		}
		canvas.classList.add("has_table")
	}
}
