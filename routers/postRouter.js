const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.render);
router.post("/", postController.post);
router.post("/", (req, res) => {
  console.log("✅ Router POST handler hit!");
  console.log("Body:", req.body);
  res.redirect("/");
});

module.exports = router;