import React, { useState } from "react";

import type { FaceTypes, PositionTypes } from "../types";

interface PacmanProps {
  face: FaceTypes;
  x: PositionTypes;
  y: PositionTypes;
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
