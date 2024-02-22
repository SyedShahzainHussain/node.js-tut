const dataConnect = require("./mongodb");
const express = require("express");
const mongodb = require("mongodb");

const app = express();

app.use(express.json());

app.get("", async (req, res) => {
  const data = await api();
  res.send(data);
});

app.post("/users", async (req, res) => {
  let data = await dataConnect();
  let response = await data.insertOne(req.body);
  res.send(response);
});

app.put("/users:name", async (req, res) => {
  let data = await dataConnect();
  let response = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(response);
});

app.delete("/users:id", async (req, res) => {
  let data = await dataConnect();
  let response = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(response);
});

app.listen(5000);

const api = async () => {
  let data = await dataConnect();
  data = await data.find({}).toArray();
  return data;
};
