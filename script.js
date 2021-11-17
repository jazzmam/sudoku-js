let row = [];
let previuosRows = [];
let sudoku = [];

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function isDigitExistentInRow(row, randomNumber) {
	console.log("ROW isNumberExistent ", row.some(square=> square.digit === randomNumber), randomNumber );
	return row.some(square=> square.digit === randomNumber);
}

function isDigitExistentInColumn(sudoku, columnIndex, randomNumber) {
	let isNumberExistent;
	let columnSquaresByIndex;

	columnSquaresByIndex = sudoku.filter(square=> square.index === columnIndex);
	//console.log("columnSquaresByIndex ", columnSquaresByIndex);

	isNumberExistent = columnSquaresByIndex.some(square=> square.digit === randomNumber);
	
	console.log("COLUMN isNumberExistent ", isNumberExistent, randomNumber);

	return isNumberExistent;
}

function createSudokValues() {
	for ( let y = 1; y <= 9; y++ ) {
		for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
			let iterationsAmount = 0;

			while (row.length <= 9) {
				let randomNumber = generateRandomNumber();

			//isDigitExistentInColumn(sudoku, columnIndex, randomNumber);
//&& !isDigitExistentInColumn(sudoku, columnIndex, randomNumber)

				if ( !isDigitExistentInRow(row, randomNumber)) {
				//	if ( !isDigitExistentInColumn(sudoku, columnIndex, randomNumber)) {
						row.push(
							{
								digit: randomNumber,
								index: columnIndex,
								shown: true
							}
						);
	
						console.log(" Row after adding ", row)
						break;	
				//	}
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