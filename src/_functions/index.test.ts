import { move, left, right , report} from "./index"


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >> move()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

test('move NORTH 1 unit within the bounds', () => {
  expect(move("NORTH", 0, 0)).toEqual({x: 0, y: 1});
});
test('try to move NORTH 1 unit  outside the bounds', () => {
  expect(move("NORTH", 0, 4)).toEqual({x: 0, y: 4});
});
test('move EAST 1 unit  within the bounds', () => {
  expect(move("EAST", 0, 0)).toEqual({x: 0, y: 0});
});
test('try to move EAST 1 unit  outside the bounds', () => {
  expect(move("EAST", 1, 0)).toEqual({x: 0, y: 0});
});

test('move SOUTH 1 unit  within the bounds', () => {
  expect(move("SOUTH", 0, 1)).toEqual({ x: 0, y: 0});
});
test('try to move SOUTH 1 unit  outside the bounds', () => {
  expect(move("SOUTH", 0, 0)).toEqual({ x: 0, y: 0});
});

test('move WEST 1 unit  within the bounds', () => {
  expect(move("WEST", 0, 0)).toEqual({x: 1, y: 0});
});
test('try to move WEST 1 unit  outside the bounds', () => {
  expect(move("WEST", 4, 0)).toEqual({x: 4, y: 0});
});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >> turn left()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

test('turn left when facing NORTH', () => {
  expect(left("NORTH")).toBe("WEST");
});

test('turn left when facing EAST', () => {
  expect(left("EAST")).toBe("NORTH");
});

test('turn left when facing SOUTH', () => {
  expect(left("SOUTH")).toBe("EAST");
});

test('turn left when facing WEST', () => {
  expect(left("WEST")).toBe("SOUTH");
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >> turn right()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

test('turn right when facing NORTH', () => {
  expect(right("NORTH")).toBe("EAST");
});

test('turn right when facing EAST', () => {
  expect(right("EAST")).toBe("SOUTH");
});

test('turn right when facing SOUTH', () => {
  expect(right("SOUTH")).toBe("WEST");
});

test('turn right when facing WEST', () => {
  expect(right("WEST")).toBe("NORTH");
});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >> turn right()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
test('report current position', () => {
  expect(report("NORTH", 3,  0)).toEqual({face: "NORTH", x: 3, y: 0});
});
