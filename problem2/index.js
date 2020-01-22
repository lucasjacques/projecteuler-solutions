const problem2SolverRobot = {};

problem2SolverRobot.run = function () {
	console.log (`I'm gonna solve the Problem2!`);
	result = problem2SolverRobot.generateFibonacciSum(4000000, true);
	console.log (`I solve the Problem2 and the result is: ${result}`);

};

problem2SolverRobot.generateFibonacciSum = function (maxNumber, evenOnly=false) {
	let currentPair = [1,2];
	let sum = evenOnly ? 0 : 1;
	if(currentPair[1]+1 > maxNumber ) {
		return maxNumber%3;
	}
	while(currentPair[1] <= maxNumber) {
		sum += currentPair[1];
		currentPair = this.generateFibonacciNextPair(currentPair, evenOnly);
	}
	return sum;
}

problem2SolverRobot.generateFibonacciNextPair = function (currentPair, evenOnly=false) {
	/* Below we basically jump three iterations forward in the Fibonacci formula
	 * because mathematically speaking, you need two numbers of the same type
	 * (odd or even) to the result of their sum to be an even number, since we
	 * start with an odd and an even number (1,2) , we will always see another
	 * even number after 3 iterations.
	 * - The first iteration would be: odd (1) + even (2) = odd (3);
	 * - The second iteration would be: even(2) + odd (3) = odd (5);
	 * - The third iteration would be: odd(3) + odd (5) = even (8);
	 * After the third iteration we get back to the same odd + even stuff (this
	 * case would be 5 + 8) and can repeat the same proccess over and over again.
	 *
	 * But why the jumped-four-iterations pair have "* 2" and "* 3", you ask?
	 * Well, because that's is what the fourth iteration looks like when you
	 * see it from the first iteration perspective:
	 * Let's say the first element (1) is x and the second(2) is y.
	 * - The first iteration would be simple: x + y = xy
	 * - The second iteration would be: y + xy = xyy (x + y * 2)
	 * - The third iteration would be: xy + xyy = xxyyy (x * 2 + y * 3) , which
	 * results in the even number we wanted.
	 */
	if(evenOnly) {
		let evenPairElement1 = currentPair[0] + currentPair[1] * 2,
			evenPairElement2 = currentPair[0] * 2 + currentPair[1] * 3;
		return [evenPairElement1 , evenPairElement2];
	}
	return [currentPair[1] , (currentPair[0] + currentPair[1]) ];
}

problem2SolverRobot.run();