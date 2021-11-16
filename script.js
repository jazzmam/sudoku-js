var row = [];
var previuosRows = [];
var sudoku = [];

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function isDigitExistentInRow(row, randomNumber) {
	return row.some(square=> square.digit === randomNumber);
}

function isDigitExistentInColumn(sudoku, columnIndex, randomNumber) {
	let isNumberNotExistent;
	// console.log('sudoku inside ', sudoku, "<---INSIDE")
	// console.log('columnIndex inside ', columnIndex)

	// CREATE FOR HERE: isNumberNotExistent = sudoku.some(square=> square.index === columnIndex);
//use randomNumber
	return isNumberNotExistent;
}

function createSudokValues() {
	for ( let y = 1; y <= 9; y++ ) {
		for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
			let iterationsAmount = 0;

			while (row.length <= 9) {
				let randomNumber = generateRandomNumber();
			//	let isDigitExistentInRow = row.some(square => square.digit === randomNumber);

			//	console.log("isDigitExistentInColumn FUNCTION ", isDigitExistentInColumn(sudoku, columnIndex, randomNumber));
				
				if ( !isDigitExistentInRow(row, randomNumber) ) {
					row.push(
						{
							digit: randomNumber,
							index: columnIndex,
							shown: true
						}
					);

					console.log(" Row after adding ", row)
					break;	
				}

				iterationsAmount += 1;
			}
		}
		previuosRows = [ ...sudoku];
		sudoku = [ ...previuosRows, ...row ];
		row = [];
	}
	return sudoku;
}

console.log(createSudokValues());