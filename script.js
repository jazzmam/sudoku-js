let row = [];
let previuosRows = [];
let sudoku = [];
const possibleOptionsForDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function isDigitExistentInRow(row, randomNumber) {
	console.log("ROW isNumberExistent ", row.some(square=> square.digit === randomNumber), randomNumber );
	return row.some(square=> square.digit === randomNumber);
}

function randomDigitNotUsedInRow(row) {
	let digitsExistingInRow = [];
	let unusedDigits = [];
	let randomDigitFromUnused = 0;
	
	digitsExistingInRow = row.map(square => square.digit);
	unusedDigits = possibleOptionsForDigit.filter(digit => !digitsExistingInRow.includes(digit));	
	randomDigitFromUnused = unusedDigits[Math.floor(Math.random() * unusedDigits.length)];

	return randomDigitFromUnused;
}

function randomDigitNotUsedInColumn(sudoku, columnIndex, randomNumber) {
	let digitsExistingInColumn = [];
	let unusedDigits = [];
	let randomDigitFromUnused = 0;
	
	digitsExistingInColumn = sudoku.filter(square => square.index === columnIndex).map(square => square.digit);	
	unusedDigits = possibleOptionsForDigit.filter(digit => !digitsExistingInColumn.includes(digit));
	randomDigitFromUnused = unusedDigits[Math.floor(Math.random() * unusedDigits.length)];

	return randomDigitFromUnused;
}

function createSudokValues() {
	for ( let y = 1; y <= 9; y++ ) {
		for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
		//	let iterationsAmount = 0;

			while (row.length <= 9) {
				//let randomNumber = generateRandomNumber();
				let randomNumberForRow = randomDigitNotUsedInRow(row);
				randomDigitNotUsedInColumn();
				//let isDigitUsedInRow = isDigitExistentInRow(row, randomNumber);
	

// PASS RANDOM NUMBER TO COLUMMN FUNCTION (DIVIDE randomDigitNotUsedInColumn() onto 2 func)
// CREATE CHECK FOR COLUMN


			//	if ( !isDigitUsedInRow ) {
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
			//	}

				//iterationsAmount += 1;
			}
		}
		previuosRows = [ ...sudoku];
		sudoku = [ ...previuosRows, ...row ];
		row = [];
	}
	return sudoku;
}

console.log(createSudokValues());