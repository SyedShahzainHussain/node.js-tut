const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);


async function dataConnect() {
    let result = await client.connect();
    let dataBase = result.db("shahzain");
    return dataBase.collection("shahzaindata");
}

module.exports = dataConnect;