import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// const style = css`
//   color: hotpink;
// `;
const style = css`
  color: hotpink;
`;

const SomeComponent = ({
  children
}) => /*#__PURE__*/React.createElement("div", {
  css: style
}, children);

const anotherStyle = css({
  textDecoration: 'underline'
});

const AnotherComponent = () => /*#__PURE__*/React.createElement("div", {
  css: anotherStyle
}, "Some text with an underline.");

function App({}) {
  const [counter, setcounter] = useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/React.createElement("p", null, "Edit ", /*#__PURE__*/React.createElement("code", null, "src/App.tsx"), " and save to reload."), /*#__PURE__*/React.createElement("p", null, counter), /*#__PURE__*/React.createElement("button", {
    onClick: () => setcounter(counter + 1)
  }, "increase counter"), /*#__PURE__*/React.createElement("div", {
    css: css`
            display: flex;
            flex-direction: column;
            margin-top: 20px;
          `
  }, /*#__PURE__*/React.createElement(SomeComponent, null, "Some hotpink text."), /*#__PURE__*/React.createElement(AnotherComponent, null)), /*#__PURE__*/React.createElement("a", {
    className: "App-link",
    css: css`
            margin-top: 20px;
          `,
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")));
}

export default App;