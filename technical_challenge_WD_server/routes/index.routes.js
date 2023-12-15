const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const phoneRouter = require("./phone.routes")
router.use("/phones", phoneRouter)

module.exports = router;
