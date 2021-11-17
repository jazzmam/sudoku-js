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
	let isNumberExistent = true;
	let randomDigitFromUnused = 0;
	
	digitsExistingInRow = row.map(square => square.digit);
	// 1 2 9
	console.log("digitsExistingInRow ", digitsExistingInRow);
	
	unusedDigits = possibleOptionsForDigit.filter(digit => !digitsExistingInRow.includes(digit));
	console.log("unusedDigits in ROW ", unusedDigits);
	
	randomDigitFromUnused = unusedDigits[Math.floor(Math.random() * unusedDigits.length)];
	
	console.log("randomDigitFromUnused in ROW ", randomDigitFromUnused);
	//isNumberExistent = columnSquaresByIndex.some(square=> square.digit === randomNumber);
	
	//console.log("COLUMN isNumberExistent ", isNumberExistent, randomNumber);

	return randomDigitFromUnused;
}

function randomDigitNotUsedInColumn(sudoku, columnIndex, randomNumber) {
	let digitsExistingInColumn = [];
	const possibleOptionsForDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let unusedDigits = [];
	let isNumberExistent;
	let randomDigitFromUnused = 0;
	
	digitsExistingInColumn = sudoku.filter(square => square.index === columnIndex).map(square => square.digit);
	// 1 2 9
//console.log("digitsExistingInColumn ", digitsExistingInColumn);
	
	
	unusedDigits = possibleOptionsForDigit.filter(digit => !digitsExistingInColumn.includes(digit));
	//console.log("unusedDigits ", unusedDigits);
	
	randomDigitFromUnused = unusedDigits[Math.floor(Math.random() * unusedDigits.length)];
	
	//console.log("randomDigitFromUnused ", randomDigitFromUnused);

	return randomDigitFromUnused;
}

function createSudokValues() {
	for ( let y = 1; y <= 9; y++ ) {
		for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
			let iterationsAmount = 0;

			while (row.length <= 9) {
				let randomNumber = generateRandomNumber();

				let isDigitUsedInRow = isDigitExistentInRow(row, randomNumber);
	
//&& !isDigitExistentInColumn(sudoku, columnIndex, randomNumber)
console.log(randomDigitNotUsedInRow(row));

				if ( !isDigitUsedInRow ) {
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