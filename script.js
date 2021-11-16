var row = [];
var sudoku = [];
var previuosRow = [];

function generateRandomNumber() {
	return Math.floor(Math.random() * 9 + 1);
}

function createSudokValues() {
	for (let y = 1; y <= 9; y++) {
		for (let x = 1; x <= 9; x++) {
			// console.log ("Y ", y , "X ", x)
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
				 console.log(" ROW AFTER ADDING ", row)
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

							 console.log(" Row after adding ", row)
							break;	
					}

					iterationsAmount += 1;
				}
			}

			// inner for end
		}
		previuosRow = [ ...sudoku];
		sudoku = [ ...previuosRow, ...row ]
		row = [];
	// outer for end
	}
	return sudoku;
}

console.log(createSudokValues());