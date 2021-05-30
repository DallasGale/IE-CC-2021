import type { FaceTypes, PositionTypes } from "../types"
import { FACE_DIRECTONS } from "../constants"

// init. state
let state = {
x: 0,
y: 0,
f: FACE_DIRECTONS.n
}


// Helpers
export function validFaceDirectionCheck(f:string ) {
  const check = Object.values(FACE_DIRECTONS).includes(f)
  return check
}
// 1. FIRST Valid command is place(..)

export function place(x: number, y: number, f: string) {
  const output = {  
    x, y, f
  }

  // validate
  //  if x < 0 || > 5 !!!
  //  if y < 0 || > 5 !!!!
  //  if face !== FACE_DIRECTONS

  const check = validFaceDirectionCheck(f)
  console.log("check", check)
  state = {x, y, f}
  

  return output
};


// Hit once pacman will move 1 position in the direction currently facing
export function move(face: FaceTypes, x: number, y:number) {
  let output = {
        x: x,
        y: y
  }
  
  if (face === FACE_DIRECTONS.n) {
    // restrict going out of bounds
    if (y === 4) {
    
      return output
    } else {
      output = {
        x: x,
        y: y + 1
      }
    }

  } else if (face === FACE_DIRECTONS.e) {
        // restrict going out of bounds
        if (x === 0) {
          return output
        } else {
          output = {
            x: x - 1,
            y: y 
          }
        }
        
  } else if (face === FACE_DIRECTONS.s) {
    // restrict going out of bounds
    if (y === 0) {
      return output
    } else {
      output = {
        x: x ,
        y: y -1 
      }
    }

  } else if (face === FACE_DIRECTONS.w) {
    // restrict going out of bounds
    if (x === 4) {
      return output
    } else {
      output = {
        x: x + 1 ,
        y: y
      }
    }
  } else {
    // south
    return

  }

  return output


 
}

export function left(face: FaceTypes ) {
  // let output = dir
  let new_face: string = face 
  switch(face) {
    case FACE_DIRECTONS.n as FaceTypes:
      new_face = FACE_DIRECTONS.w
      break;
    case FACE_DIRECTONS.e as FaceTypes:
      new_face = FACE_DIRECTONS.n
      break;
    case FACE_DIRECTONS.s as FaceTypes:
      new_face = FACE_DIRECTONS.e
      break;
    case FACE_DIRECTONS.w as FaceTypes:
      new_face = FACE_DIRECTONS.s
      break;
    default:
  }
  
  return new_face
}


export function right(face: FaceTypes ) {
  let new_face: string = face 
  switch(face) {
    case FACE_DIRECTONS.n as FaceTypes:
      new_face = FACE_DIRECTONS.e
      break;
    case FACE_DIRECTONS.e as FaceTypes:
      new_face = FACE_DIRECTONS.s
      break;
    case FACE_DIRECTONS.s as FaceTypes:
      new_face = FACE_DIRECTONS.w
      break;
    case FACE_DIRECTONS.w as FaceTypes:
      new_face = FACE_DIRECTONS.n
      break;
    default:
  }
  
  return new_face
}



export function report(x: PositionTypes, y: PositionTypes, face: FaceTypes) {
  // reports x,y and f 
  const output = {
    x, y, face
  }
  return output
}