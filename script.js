let row = [];
let previuosRows = [];
let sudoku = [];
const possibleOptionsForDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function randomDigitNotUsedInColumn( sudoku, columnIndex ) {
	let digitsExistingInColumn = [];
	let unusedDigits = [];
	let randomDigitFromUnused = 0;
	
	digitsExistingInColumn = sudoku.filter(square => square.index === columnIndex).map(square => square.digit);	
	unusedDigits = possibleOptionsForDigit.filter(digit => !digitsExistingInColumn.includes(digit));
	randomDigitFromUnused = unusedDigits[Math.floor(Math.random() * unusedDigits.length)];

	return randomDigitFromUnused;
}

function generateDigitUnusedInRowAndColumn( row, digitNotUsedInColumn ) {
	let digitsExistingInRow = [];
	let unusedDigits = [];
	
	digitsExistingInRow = row.map(square => square.digit);
	unusedDigits = possibleOptionsForDigit.filter(digit => !digitsExistingInRow.includes(digit));

console.log('digitNotUsedInColumn ', digitNotUsedInColumn)
console.log('unusedDigits ', unusedDigits)
console.log('unusedDigits.includes(digitNotUsedInColumn) ', unusedDigits.includes(digitNotUsedInColumn))

	return (unusedDigits.includes(digitNotUsedInColumn) ? digitNotUsedInColumn : null);
}

function createSudokValues() {
	for ( let y = 1; y <= 9; y++ ) {
		for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
		temp = [];
			while (temp.length <= 10) {
				let digitNotUsedInColumn = randomDigitNotUsedInColumn(sudoku, columnIndex);
console.log('Y ', y, 'columnIndex ', columnIndex, 'digitNotUsedInColumn ', digitNotUsedInColumn)
				let digitUnusedInRowAndColumnGenerated = generateDigitUnusedInRowAndColumn(row, digitNotUsedInColumn);
console.log('digitUnusedInRowAndColumnGenerated ', digitUnusedInRowAndColumnGenerated)

				if ( digitUnusedInRowAndColumnGenerated !== null ) {
					row.push(
						{
							digit: digitUnusedInRowAndColumnGenerated,
							index: columnIndex,
							shown: true
						}
					);

console.log(" Row after adding ", row)
					break;	
				}
temp.push(1);
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