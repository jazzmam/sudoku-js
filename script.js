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
	let digitsExistingInColumn = [];
	const possibleOptionsForDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let unusedDigits = [];
	let isNumberExistent;
	// RAKE RANDOM ITEM FROM ARRAY const randomElement = array[Math.floor(Math.random() * array.length)];

	digitsExistingInColumn = sudoku.filter(square => square.index === columnIndex).map(square => square.digit);
	// 1 2 9
	console.log("digitsExistingInColumn ", digitsExistingInColumn);
	
	
	unusedDigits = possibleOptionsForDigit.filter(digit => !digitsExistingInColumn.includes(digit));
	console.log("unusedDigits ", unusedDigits);

	//isNumberExistent = columnSquaresByIndex.some(square=> square.digit === randomNumber);
	
	//console.log("COLUMN isNumberExistent ", isNumberExistent, randomNumber);

	return isNumberExistent;
}

function createSudokValues() {
	for ( let y = 1; y <= 9; y++ ) {
		for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
			let iterationsAmount = 0;

			while (row.length <= 9) {
				let randomNumber = generateRandomNumber();

			isDigitExistentInColumn(sudoku, columnIndex, randomNumber);
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