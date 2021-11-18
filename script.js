let row = [];
let previuosRows = [];
let sudoku = [];
const possibleOptionsForDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generateRandomArrayIndex(unusedDigits) {
	return Math.floor(Math.random() * unusedDigits.length);
}

function unusedDigitInRowAndColumn( sudoku, row, columnIndex ) {
	let digitsExistingInRow = [];
	let digitsExistingInColumn = [];
	let unusedDigitsInRow = [];
	let unusedDigitsInColumn = [];
	let unusedDigits;
	
	digitsExistingInRow = row.map(square => square.digit);
	unusedDigitsInRow = possibleOptionsForDigit.filter(digit => !digitsExistingInRow.includes(digit));

	digitsExistingInColumn = sudoku.filter(square => square.index === columnIndex).map(square => square.digit);
	unusedDigitsInColumn = possibleOptionsForDigit.filter(digit => !digitsExistingInColumn.includes(digit));

	unusedDigits = unusedDigitsInRow.filter(digit => unusedDigitsInColumn.includes(digit));	
	randomDigitFromUnused = unusedDigits[generateRandomArrayIndex(unusedDigits)];
	
console.log('unusedDigits ', unusedDigits)
console.log('randomDigitFromUnused ', randomDigitFromUnused);

	return randomDigitFromUnused;
}

function createSudokValues() {
	for ( let y = 1; y <= 9; y++ ) {
		for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
			while (row.length <= 9) {
					row.push(
						{
							digit: unusedDigitInRowAndColumn(sudoku, row, columnIndex),
							index: columnIndex,
							shown: true
						}
					);

console.log(" Row after adding ", row)
					break;
			}
			// the end of inner loop
		}
		previuosRows = [ ...sudoku];
		sudoku = [ ...previuosRows, ...row ];
		row = [];
		// the end of inner loop
	}
	return sudoku;
}

console.log(createSudokValues());