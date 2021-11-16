var row = [];
var previuosRows = [];
var sudoku = [];

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function createSudokValues() {
	for ( let y = 1; y <= 9; y++ ) {
		for ( let x = 1; x <= 9; x++ ) {
			let iterationsAmount = 0;

			while (row.length <= 9) {
				let randomNumber = generateRandomNumber();
				let isDigitExistentInRow = row.some(square=> square.digit === randomNumber);
				
				if ( !isDigitExistentInRow ) {
					row.push(
						{
							digit: randomNumber,
							index: x,
							shown: true
						}
					);

					console.log(" Row after adding ", row)
					break;	
				}

				iterationsAmount += 1;
			}
			// inner for end
		}
		previuosRows = [ ...sudoku];
		sudoku = [ ...previuosRows, ...row ]
		row = [];
	// outer for end
	}
	return sudoku;
}

console.log(createSudokValues());