const mongoose = require("mongoose");

class Mongo {
  constructor() {
    this.createMongoConnection();
  }
  createMongoConnection() {
    mongoose.connect(`mongodb://localhost:27017/masai`);
    mongoose.connection.once("open", () => {
      console.log("mongodb is connected");
    });
    mongoose.connection.on("error", () => {
      console.log("error occured in mongodb");
    });
  }
}
module.exports = Mongo;
