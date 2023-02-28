const { createRobot } = require('./robot.js');

describe('Robot', () => {
	it('Should advance and change orientation and position', () => {
		let robotN = createRobot(0, 0);
		expect(robotN.advance()).toBe(1);
		let robotS = createRobot(5, 2, 'S');
		expect(robotS.advance()).toBe(1);
		let robotW = createRobot(5, 2, 'W');
		expect(robotW.advance()).toBe(4);
	});

	it('Should turn right and change orientation', () => {
		let robotN = createRobot(0, 0);
		expect(robotN.turnRight()).toMatch('E');

		let robotE = createRobot(0, 0, 'E');
		expect(robotE.turnRight()).toMatch('S');

		let robotS = createRobot(0, 0, 'S');
		expect(robotS.turnRight()).toMatch('W');

		let robotW = createRobot(0, 0, 'W');
		expect(robotW.turnRight()).toMatch('N');
	});

	it('Should turn left and change orientation', () => {
		let robotN = createRobot(0, 0);
		expect(robotN.turnLeft()).toMatch('W');

		let robotE = createRobot(0, 0, 'E');
		expect(robotE.turnLeft()).toMatch('N');

		let robotS = createRobot(0, 0, 'S');
		expect(robotS.turnLeft()).toMatch('E');

		let robotW = createRobot(0, 0, 'W');
		expect(robotW.turnLeft()).toMatch('S');
	});

	it('Should exec to certain instructions to move the robot', () => {
		let robot = createRobot(0, 0);
		expect(robot.instructions('RAALAL')).toMatch(/2, 1 W/i);
	});

	it('Should throw an error if there is an error boundaries', () => {
		let robot = createRobot(9, 3);
		expect(robot.instructions('RAALAL')).toMatch('error boundaries');
	});
});
