const problem1SolverRobot = {};

problem1SolverRobot.run = function () {
	console.log (`I'm gonna solve the Problem1!`);
	result = problem1SolverRobot.findMultiplesSum(1000, [3, 5]);
	console.log (`I solve the Problem1 and the result is: ${result}`);

};

problem1SolverRobot.findMultiplesSum = function (number, factors) {
	let multiplesSum = 0;
	for (var i = number - 1; i > 0; i--) {
		for (var j = factors.length - 1; j >= 0; j--) {		
			if(problem1SolverRobot.isMultiple(i, factors[j])){
				multiplesSum += i;
				/* if you don't break this second for loop as in the line below, 
				 * numbers multiples of two or more factors will be count two or
				 * more times than expected 
				 */
				break;
			}
		}
	}
	return multiplesSum;
}

problem1SolverRobot.isMultiple = function (number, multiple) {
	if (number % multiple === 0) {
		return true;
	}
	return false;
}

problem1SolverRobot.run();