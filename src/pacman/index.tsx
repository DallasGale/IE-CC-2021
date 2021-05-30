import React from "react";

import type { FaceTypes } from "../types";

interface PacmanProps {
  face: FaceTypes;
  x: number;
  y: number;
}
const Pacman: React.FC<PacmanProps> = ({ face, x, y }) => {
  return (
    <div className="pacman-wrapper">
      <div
        className={`pacman facing--${face.toLowerCase()}`}
        data-dir={face}
        data-pos={[x, y]}
      />
    </div>
  );
};

export default Pacman;
