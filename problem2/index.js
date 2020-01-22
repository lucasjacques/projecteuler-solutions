const problem2SolverRobot = {};

problem2SolverRobot.run = function () {
	console.log (`I'm gonna solve the Problem2!`);
	result = problem2SolverRobot.generateFibonacciSum(30);
	console.log (`I solve the Problem2 and the result is: ${result}`);

};

problem2SolverRobot.generateFibonacciSum = function (maxNumber) {
	let currentPair = [1,2];
	let sum = 1;
	if(currentPair[1]+1 > maxNumber ) {
		return maxNumber%3;
	}
	while(currentPair[1] <= maxNumber) {
		sum += currentPair[1];
		currentPair = this.generateFibonacciNextPair(currentPair);
	}
	return sum;
}

problem2SolverRobot.generateFibonacciNextPair = function (currentPair) {
	return [currentPair[1] , (currentPair[0] + currentPair[1]) ];
}

problem2SolverRobot.run();