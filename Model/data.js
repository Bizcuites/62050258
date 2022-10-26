const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema(
  {
    firstname: { type: String, require: true, trim: true },
    lastname: { type: String, require: true, trim: true },
    age: { type: Number, require: true },
    created: { type: Date, default: Date.now() },
  },
  {
    collection: "datas",
  }
);

const model = mongoose.model("Data", schema);

module.exports = model;
