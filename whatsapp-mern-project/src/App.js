import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import "./App.css";
import "./index.css";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("b255949f3af928cd5580", {
      cluster: "us3",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessages) => {
      alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages]);
    });
  }, []);

  console.log(messages);

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
