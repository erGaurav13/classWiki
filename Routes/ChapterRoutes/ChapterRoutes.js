const express = require("express");
const {
  createChapter,
  deleteChapter,
  getChapterById,
  getChaptersBySubjectId,
  updateChapter,
} = require("../../Controller/ChapterController/ChapterController");

const router = express.Router();

router.post("/", createChapter);

// router.get("/", getChaptersBySubjectId);

 
router.get("/:id", getChaptersBySubjectId);

router.put("/:id", updateChapter);

router.delete("/:id", deleteChapter);

module.exports = router;
