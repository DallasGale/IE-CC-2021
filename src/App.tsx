import React, { useState } from "react";
import "./app.scss";

//  Functions
import { report, move, left, right } from "./_functions/index";

// Types
import type { FaceTypes } from "./types";
import { FACE_DIRECTONS } from "./constants";

//  Components
import Pacman from "./pacman/index";

interface GridProps {
  cellIds: Number[];
}

interface ReportProps {
  output: string;
}

// >>>>>>>>>>>>>>>>>>>>>
// UI
// >>>>>>>>>>>>>>>>>>>>>
const Report: React.FC<ReportProps> = ({ output }) => (
  <div className="report">
    <h2 className="report__text">
      Report:{" "}
      <span className={`report__text--output ${!output ? "blink" : "stare"}`}>
        {output ? output : "waiting..."}
      </span>
    </h2>
  </div>
);

// >>>>>>>>>>>>>>>>>>>>>
// Layout
// >>>>>>>>>>>>>>>>>>>>>
const GridRow: React.FC<GridProps> = ({ cellIds }) => (
  <div className="row">
    <div className="cell" data-id={cellIds[0]} />
    <div className="cell" data-id={cellIds[1]} />
    <div className="cell" data-id={cellIds[2]} />
    <div className="cell" data-id={cellIds[3]} />
    <div className="cell" data-id={cellIds[4]} />
  </div>
);

// >>>>>>>>>>>>>>>>>>>>>
// Board
// >>>>>>>>>>>>>>>>>>>>>

const App = () => {
  // initial state
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [face, setFace] = useState<FaceTypes>("NORTH");

  // placed stated
  const [placeToggle, setPlaceToggle] = useState(false);
  const [placeX, setPlaceX] = useState(0);
  const [placeY, setPlaceY] = useState(0);
  const [placeFace, setPlaceFace] = useState<FaceTypes>("NORTH");

  const [reportText, setReportText] = useState("");

  // Handlers
  const handleMove = (face: FaceTypes, x: number, y: number) => {
    const output = move(face, x, y);
    if (output) {
      setPos({ x: output.x, y: output.y });
    }
    if (
      (face === FACE_DIRECTONS.n && y === 4) ||
      (face === FACE_DIRECTONS.s && y === 0) ||
      (face === FACE_DIRECTONS.e && x === 0) ||
      (face === FACE_DIRECTONS.w && x === 4)
    ) {
      alert("soz! you have hit the wall");
    }
  };

  const handleLeft = () => {
    const output = left(face) as FaceTypes;
    setFace(output);
  };

  const handleRight = () => {
    const output = right(face) as FaceTypes;
    setFace(output);
  };

  const handleReport = (x: number, y: number, face: FaceTypes) => {
    const output = report(face, x, y);
    setReportText(
      `co-ordinates - x: ${output.x} -  y: ${output.y} - face: ${face}`
    );
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPos({ x: placeX, y: placeY });
    setFace(placeFace);
  };

  return (
    <div className="App">
      <nav className="nav">
        <ul className="nav__controls">
          <li className="nav__control-item">
            <button
              className="nav__control-item-button"
              onClick={() => setPlaceToggle(true)}
            >
              PLACE
            </button>
            <div
              className={`nav__control-item-popup ${
                placeToggle ? "show" : "hide"
              }`}
            >
              <form onSubmit={(e) => handleSubmit(e)} className="form">
                <label className="form__label">
                  X
                  <input
                    className="form__input"
                    min={0}
                    max={4}
                    name="place-x"
                    type="number"
                    value={placeX}
                    onChange={(e) => setPlaceX(parseInt(e.target.value))}
                  />
                </label>
                <label className="form__label">
                  Y
                  <input
                    className="form__input"
                    min={0}
                    max={4}
                    id="place-y"
                    type="number"
                    value={placeY}
                    onChange={(e) => setPlaceY(parseInt(e.target.value))}
                  />
                </label>
                <label className="form__label">
                  Face which direction?
                  <select
                    className="form__select"
                    id="place-face"
                    value={placeFace}
                    onChange={(e) => setPlaceFace(e.target.value as FaceTypes)}
                  >
                    <option value={FACE_DIRECTONS.n}>{FACE_DIRECTONS.n}</option>

                    <option value={FACE_DIRECTONS.e}>{FACE_DIRECTONS.e}</option>

                    <option value={FACE_DIRECTONS.s}>{FACE_DIRECTONS.s}</option>

                    <option value={FACE_DIRECTONS.w}>{FACE_DIRECTONS.w}</option>
                  </select>
                </label>
                <div className="form__ctas">
                  <button type="submit" className="form__submit">
                    PLACE PACMAN!
                  </button>
                </div>
              </form>
              <button
                className="close"
                onClick={() => setPlaceToggle(!placeToggle)}
              >
                CLOSE
              </button>
            </div>
          </li>

          <li className="nav__control-item">
            <button className="nav__control-item-button" onClick={handleLeft}>
              LEFT
            </button>
          </li>
          <li className="nav__control-item">
            <button className="nav__control-item-button" onClick={handleRight}>
              RIGHT
            </button>
          </li>
          <li className="nav__control-item">
            <button
              className="nav__control-item-button"
              onClick={() => handleMove(face, pos.x, pos.y)}
            >
              MOVE
            </button>
          </li>
          <li className="nav__control-item">
            <button
              className="nav__control-item-button"
              onClick={() => handleReport(pos.x, pos.y, face)}
            >
              REPORT
            </button>
          </li>
        </ul>
      </nav>

      <Report output={reportText} />
      <div className="grid">
        <Pacman face={face} x={pos.x} y={pos.y} />
        <GridRow cellIds={[4.4, 3.4, 2.4, 1.4, 0.4]} />
        <GridRow cellIds={[4.3, 3.3, 2.3, 1.3, 0.3]} />
        <GridRow cellIds={[4.2, 3.2, 2.2, 1.2, 0.2]} />
        <GridRow cellIds={[4.1, 3.1, 2.1, 1.1, 0.1]} />
        <GridRow cellIds={[4.0, 3.0, 2.0, 1.0, 0.0]} />
      </div>
    </div>
  );
};

export default App;
