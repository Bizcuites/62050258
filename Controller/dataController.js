const Data = require("../Model/data");

exports.index = async (req, res, next) => {
  const data = await Data.find();
  res.status(200).json({
    message: "Successfully Loaded",
    data: data,
  });
};

exports.add = async (req, res, next) => {
  const { firstname, lastname, age } = req.body;
  const data = new Data({
    firstname: firstname,
    lastname: lastname,
    age: age,
  });
  await data.save();
  res.status(201).json({
    message: "Successfully Added ",
  });
};

exports.update = async (req, res, next) => {
  const { firstname, lastname, age } = req.body;
  const { id } = req.params;
  await Data.findByIdAndUpdate(id, {
    firstname: firstname,
    lastname: lastname,
    age: age,
  });

  res.status(200).json({
    message: "Successfully Updated",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  await Data.findByIdAndDelete(id);

  res.status(200).json({
    message: "Successfully Removed",
  });
};
