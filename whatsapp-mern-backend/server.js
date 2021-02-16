// importing
import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware

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

//listeners
app.listen(port, () => console.log(`Listening on localhost:${port}`));
