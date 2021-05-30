import type { FaceTypes, PositionTypes } from "../types";
import { FACE_DIRECTONS } from "../constants";

// init. state
let state = {
  x: 0,
  y: 0,
  f: FACE_DIRECTONS.n,
};

// Helpers
export function validFaceDirectionCheck(f: string) {
  const check = Object.values(FACE_DIRECTONS).includes(f);
  return check;
}

export function place(x: number, y: number, f: string) {
  const output = {
    x,
    y,
    f,
  };

  const check = validFaceDirectionCheck(f);
  console.log("check", check);
  state = { x, y, f };

  return output;
}

// Hit once pacman will move 1 position in the direction currently facing
export function move(face: FaceTypes, x: number, y: number) {
  let output = {
    x: x,
    y: y,
  };
  if (face === FACE_DIRECTONS.n) {
    if (y === 4) {
      return output;
    } else {
      output = {
        x: x,
        y: y + 1,
      };
    }
  } else if (face === FACE_DIRECTONS.e) {
    if (x === 0) {
      return output;
    } else {
      output = {
        x: x - 1,
        y: y,
      };
    }
  } else if (face === FACE_DIRECTONS.s) {
    if (y === 0) {
      return output;
    } else {
      output = {
        x: x,
        y: y - 1,
      };
    }
  } else if (face === FACE_DIRECTONS.w) {
    if (x === 4) {
      return output;
    } else {
      output = {
        x: x + 1,
        y: y,
      };
    }
  } else {
    return;
  }
  return output;
}

export function left(face: FaceTypes) {
  let new_face: string = face;
  switch (face) {
    case FACE_DIRECTONS.n as FaceTypes:
      new_face = FACE_DIRECTONS.w;
      break;
    case FACE_DIRECTONS.e as FaceTypes:
      new_face = FACE_DIRECTONS.n;
      break;
    case FACE_DIRECTONS.s as FaceTypes:
      new_face = FACE_DIRECTONS.e;
      break;
    case FACE_DIRECTONS.w as FaceTypes:
      new_face = FACE_DIRECTONS.s;
      break;
    default:
  }
  return new_face;
}

export function right(face: FaceTypes) {
  let new_face: string = face;
  switch (face) {
    case FACE_DIRECTONS.n as FaceTypes:
      new_face = FACE_DIRECTONS.e;
      break;
    case FACE_DIRECTONS.e as FaceTypes:
      new_face = FACE_DIRECTONS.s;
      break;
    case FACE_DIRECTONS.s as FaceTypes:
      new_face = FACE_DIRECTONS.w;
      break;
    case FACE_DIRECTONS.w as FaceTypes:
      new_face = FACE_DIRECTONS.n;
      break;
    default:
  }
  return new_face;
}

export function report(face: FaceTypes, x: number, y: number) {
  const output = {
    x,
    y,
    face,
  };
  return output;
}
