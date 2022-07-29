// Connie McClung - Pixel Art Project
// 07/29/2022

// Select color input
const gridColor = document.querySelector("#colorPicker");

// Select size input
const gridHeight = document.querySelector("#inputHeight");

const gridWidth = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
const setupForm = document.querySelector("#sizePicker");

setupForm.addEventListener("submit", makeGrid);

function makeGrid(event) {
	event.preventDefault();

	const rows = gridHeight.value;
	const cols = gridWidth.value;
	const cellColor = gridColor.value;
	const canvas = document.querySelector("#pixelCanvas");

	// make table with submitted height and width dimensions
	for (let r = 1; r <= rows; r++) {
		let newTR = document.createElement("tr");
		canvas.appendChild(newTR);
		for (let c = 1; c <= cols; c++) {
			let newTD = document.createElement("td");
			newTR.appendChild(newTD);
		}
	}
	//use a single event listener to respond to click events in table cells
	canvas.addEventListener("click", changeCell);
	
	//toggle to add/remove user-defined color when cell is clicked
	function changeCell(event) {
		// if class "clicked" is present, cell is colored--change back and remove the class
		if (event.target.classList.contains("clicked")) {
			event.target.style.backgroundColor = "white";
			event.target.classList.remove("clicked");
		}
		// if class "clicked" is not present, set color and add the class
		else {
			event.target.style.backgroundColor = cellColor;
			event.target.classList.add("clicked");
		}
	}
}


