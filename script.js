let sudoku = [];
let consoledSudoku = '';

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function createSudokValues() {
	for (let x = 1; x <= 9; x++) {
		var iterationsAmount = 0;
		var randomNumber = generateRandomNumber();

		if (!sudoku.includes(randomNumber)) {
			sudoku.push(randomNumber);
		} else {
			while (iterationsAmount <= 10) {
				randomNumber = generateRandomNumber();

				if (!sudoku.includes(randomNumber)) {
					sudoku.push(randomNumber);
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
