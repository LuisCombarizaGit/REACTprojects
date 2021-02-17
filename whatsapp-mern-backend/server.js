// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// DB config
const connection_url =
  "mongodb+srv://LuisCombariza:ZFOjEpPQw8TIdweB@cluster0.hglem.mongodb.net/whats-app-project?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ??

// api routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listeners
app.listen(port, () => console.log(`Listening on localhost:${port}`));
