const express = require("express");
const router = express.Router();
const notepadController = require("../controllers/notepad");

router.get("/", notepadController.loadNotePad);
router.post("/notes/add", notepadController.notePadInsert);
router.get("/notes/library",notepadController.getLibrary);
router.post("/notes/library",notepadController.getcontent);
router.get("/notes/library/delete/:id",notepadController.deleteIndex);
router.get("/notes/library/getClicked/:id",notepadController.getClicked);
router.get("/notes/library/edit/:id",notepadController.getEditContent);
router.post("/notes/library/edit/:id",notepadController.editContent);




module.exports = router;
