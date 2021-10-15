import React from "react";
import Topbar from "./components/Topbar";
import Center from "./components/Center";
import {AuthContextProvider} from "./context/State"

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Topbar />
        <Center />
      </AuthContextProvider>
    </>
  );
};

export default App;
