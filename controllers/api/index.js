const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const commentroutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentroutes);
module.exports = router;
