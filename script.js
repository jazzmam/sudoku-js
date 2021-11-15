var row = [];
var sudoku = [];
var fullSudoku = [];

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function createSudokValues() {
	for (let y = 1; y <= 9; y++) {
		for (let x = 1; x <= 9; x++) {
			console.log ("Y ", y , "X ", x)
			let iterationsAmount = 0;
			let randomNumber = generateRandomNumber();
			var isDigitExistentInRow = row.some(square=> square.digit === randomNumber);

			if (!isDigitExistentInRow) {
				row.push(
					{
						digit: randomNumber,
						index: x,
						shown: true
					}
				);
			} else {
				while (iterationsAmount <= 10) {
					randomNumber = generateRandomNumber();
					isDigitExistentInRow = row.some(square=> square.digit === randomNumber);

					if (!isDigitExistentInRow) {
						row.push(
							{
								digit: randomNumber,
								index: x,
								shown: true
							}
						);
						break;	
					}

					iterationsAmount += 1;
				}
			}

			// inner for end


		}
		console.log("FULL ROW ", row)
		//fullSudoku = sudoku.concat(row);
		fullSudoku = sudoku.push(...row);
		console.log("FULL SUDOKU ", fullSudoku)
		// HERE fullSudoku value is overwriten every time
		row = [];
	// outer for end
	}
	return fullSudoku;
}

console.log(createSudokValues());