let sudoku = [];
let consoledSudoku = '';

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function createSudokValues() {
	for (let x = 1; x <= 9; x++) {
		let iterationsAmount = 0;
		let randomNumber = generateRandomNumber();
		var isDigitExistentInRow = sudoku.some(square=> square.digit === randomNumber);

		if (!isDigitExistentInRow) {
			sudoku.push(
				{
					digit: randomNumber,
					index: x,
				}
			);
		} else {
			while (iterationsAmount <= 10) {
				randomNumber = generateRandomNumber();
				isDigitExistentInRow = sudoku.some(square=> square.digit === randomNumber);

				if (!isDigitExistentInRow) {
					sudoku.push(
						{
							digit: randomNumber,
							index: x,
						}
					);
					break;	
				}

				iterationsAmount += 1;
			}
		}
	}

	return sudoku;
}

console.log(createSudokValues());

// CREATE ARRAY OF ARRAYs FOR THE LINE ADDING INDEXES
// CREATE COLUMNS
