import React from "react";

import Body from "./Body";
import Header from "./Header";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <Body />
    </div>
  );
};

export default App;
