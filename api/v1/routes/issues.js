const express = require("express");
const router = express.Router();

const IssueController = require("../controllers/issues");

router.get("/", IssueController.issues_get_all_issues);
router.get("/:id", IssueController.issues_get_issue);
router.post("/", IssueController.issues_save_issues);
router.patch("/:id", IssueController.issues_update_issues);
router.delete("/:id", IssueController.issues_delete_issues);

module.exports = router;
