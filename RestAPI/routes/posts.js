const express = require("express");
const router = express.Router();
const Post = require("../modals/Post");

// GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// router.get("/specific", (req, res) => {
//   res.send("Specific posts");
// });

// router.post("/",async (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description
//   });
//   post
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => res.json({ message: err }));
//   console.log(req.body);
// });

// SUBMITS A POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ meassage: err });
  }
  console.log(req.body);
});

// SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    console.log(req.params.postId);
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete Post
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (error) {
    res.json({ message: err });
  }
});

module.exports = router;
