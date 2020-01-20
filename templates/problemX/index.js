const problemXSolverRobot = {};

problemXSolverRobot.run = function () {
	console.log (`I'm gonna solve the ProblemX!`);
	result = problemXSolverRobot.numbersSum(10);
	console.log (`I solve the ProblemX and the result is: ${result}`);

};

problemXSolverRobot.numbersSum = function (number) {
	let sum = number;
	for (var i = number - 1; i >= 0; i--) {
		sum += i;
	}
	return sum;
}

problemXSolverRobot.run();