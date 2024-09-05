const express = require("express");
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "First random content given",
    tag: "Technology",
    username: "TonyStark",
    date: "2022-01-02",
  },
  {
    id: 2,
    text: "Second random content given in this post",
    tag: "Marketing",
    username: "SteveRogers",
    date: "2022-01-03",
  },
  {
    id: 3,
    text: "Third random content for the third post here",
    tag: "Technology",
    username: "TonyStark",
    date: "2022-01-05",
  },
];

//GET All ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

//GET Specific idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }
  res.json({ success: true, data: idea });
});

//POST Add idea
router.post("/", (req, res) => {
    const idea = {
        id: ideas.length+1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0,10),
    }
    ideas.push(idea);
  res.status(201).json({ success: true, data: idea });
});

//PUT Update idea
router.put("/:id", (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    if (!idea) {
      return res
        .status(404)
        .json({ success: false, error: "Resource not found" });
    }
    idea.text=req.body.text || idea.text;
    idea.tag=req.body.tag || idea.tag;

    res.json({ success: true, data: idea });
  });

//DELETE An idea
router.delete("/:id", (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    const index=ideas.indexOf(idea);
    if (index==-1) {
      return res
        .status(404)
        .json({ success: false, error: "Resource not found" });
    }
    ideas.splice(index,1);
    res.status(200).json({ success: true, data: {} });
  });

module.exports = router;