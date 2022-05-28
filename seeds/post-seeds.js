const { Post } = require("../models");

const postdata = [
  {
    title: "test",
    content: "This is content for post test 1",
    user_id: 1,
  },
  {
    title: "test2",
    content: "This is content for post test 1",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
