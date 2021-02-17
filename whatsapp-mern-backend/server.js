// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1157289",
  key: "b255949f3af928cd5580",
  secret: "227a363c09360ba8f606",
  cluster: "us3",
  useTLS: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connected");

  const msgCollection = db.collection("messagecontens");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A Change occured:", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
      });
    } else {
      console.log("Error triggering Pusher");
    }
  });
});

// middleware
app.use(express.json());
app.use(cors());

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

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

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
