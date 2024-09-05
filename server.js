const express = require('express');
const port=4040;

const app = express();

const ideas = [
    {
        id: 1,
        text: 'First random content given',
        tag: 'Technology',
        username: 'TonyStark',
        date: '2022-01-02',
    },
    {
        id: 2,
        text: 'Second random content given in this post',
        tag: 'Marketing',
        username: 'SteveRogers',
        date: '2022-01-03',
    },
    {
        id: 3,
        text: 'Third random content for the third post here',
        tag: 'Technology',
        username: 'TonyStark',
        date: '2022-01-05',
    },
]

app.get('/',(req,res)=>{
    res.json({ message:'Welcome to the RandomIdeas' });
});

//GET All ideas
app.get('/api/ideas',(req,res)=>{
    res.send({ success: true, data: ideas });
});

//GET Specific idea
app.get('/api/ideas/:id',(req,res)=>{
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    if(!idea){
        return res.status(404).json({ success: false, error: 'Resource not found' });
    }
    res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server running on port ${port}`));