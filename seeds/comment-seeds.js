const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "This is testing comment text",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This is another testing comment text",
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
