import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;


