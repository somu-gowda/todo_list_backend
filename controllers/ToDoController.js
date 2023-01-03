const ToDoModel = require("../modules/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  ToDoModel.create({ text }).then((data) => {
    res.send({data: data, message: "Createed successfully....."});
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.send({message: "Update Successfully..."}))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.params;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send({message: "Deleted Successfully..."}))
    .catch((err) => console.log(err));
};
