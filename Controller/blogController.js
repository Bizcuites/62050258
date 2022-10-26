const Blog = require("../Model/blog");

exports.index = async (req, res, next) => {
  const blog = await Blog.find();
  res.status(200).json({
    message: "Successfully Loaded",
    data: blog,
  });
};

exports.add = async (req, res, next) => {
  const { title, detail } = req.body;
  const blog = new Blog({
    title: title,
    detail: detail,
  });
  await blog.save();
  res.status(201).json({
    message: "Successfully Added",
  });
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);

  res.status(200).json({
    message: "Successfully Removed",
  });
};

exports.update = async (req, res, next) => {
  const { title, detail } = req.body;
  const { id } = req.params;
  await Blog.findByIdAndUpdate(id, {
    title: title,
    detail: detail,
  });

  res.status(200).json({
    message: "Successfully Updated",
  });
};
