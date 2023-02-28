const createRobot = (x, y, o = "N") => {
  let xp = x;
  let yp = y;
  let orientation = o;

  function advance() {
    if (!(xp < 10) || !(yp < 10) || !(xp > 0) || !(yp > 0)) {
      throw new Error("error boundaries");
    }
    if (orientation === "N") return (yp += 1);
    if (orientation === "E") return (xp += 1);
    if (orientation === "S") return (yp -= 1);
    if (orientation === "W") return (xp -= 1);
  }

  function turnRight() {
    if (orientation === "N") return (orientation = "E");
    if (orientation === "E") return (orientation = "S");
    if (orientation === "S") return (orientation = "W");
    if (orientation === "W") return (orientation = "N");
  }

  function turnLeft() {
    if (orientation === "N") return (orientation = "W");
    if (orientation === "E") return (orientation = "N");
    if (orientation === "S") return (orientation = "E");
    if (orientation === "W") return (orientation = "S");
  }

  function instructions(string) {
    let arrString = string.split("");
    arrString.forEach((direction) => {
      if (direction === "R") return turnRight();
      if (direction === "L") return turnLeft();
      return advance();
    });
    return `Mi posición es: ${xp}, ${yp} ${orientation}`;
  }

  return { advance, turnLeft, turnRight, instructions };
};

let robot = createRobot(9, 3);
console.log(robot.instructions("RAALAL"));

exports.createRobot = createRobot;
