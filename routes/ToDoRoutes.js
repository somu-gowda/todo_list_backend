const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoController");

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.put("/update", updateToDo);
router.delete("/:_id", deleteToDo);

module.exports = router;
