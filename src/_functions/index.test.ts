import {validFaceDirectionCheck,  place, move, left, right, report } from "."
import { FACE_DIRECTONS } from "../constants"

// test('place', () => {
//   expect(place(0, 0, 'NORdTH')).toBe('NORTH: 8');
// });

// test("validFaceDirectionCheck", () => {
//   expect(validFaceDirectionCheck("fr")).toBe(false)
// })
// test("validFaceDirectionCheck", () => {
//   expect(validFaceDirectionCheck("NORTH")).toBe(true)
// })

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

// test('init report', () => {
//   expect(report(0,0,"right")).toBe({x: 0, y: 0, face: "right"})
// })

// PLACE 0,0,NORTH

// MOVE

// REPORT

// Output: 0,1,NORTH