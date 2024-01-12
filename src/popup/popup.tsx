import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import "../styles/globals.css";

const Container = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: #141517;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  background-color: #2e3033;
  color: #dfe2ea;
  :hover {
    background: #303235;
    color: #fff;
  }
`;

const App: React.FC<{}> = () => {
  const displayNone = (color: string) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { color });
      }
    });

    console.log("123");
  };

  return (
    <Container>
      <Button onClick={() => displayNone("blue")}>123</Button>
    </Container>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
