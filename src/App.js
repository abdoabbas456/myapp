import React from "react";
import "./style/App.scss";
import Header from "./component/header";
import Main from "./component/main";
import Case from "./component/promtion";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />

      <Case/>
    </div>
  );
}

export default App;
