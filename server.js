const express = require('express');
const port=4040;

const app = express();

app.get('/',(req,res)=>{
    res.json({ message:'Welcome to the RandomIdeas' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas',ideasRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));