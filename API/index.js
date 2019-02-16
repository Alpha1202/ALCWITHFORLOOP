import express from 'express';




const app = express();
const PORT = 4001;

app.get('/', (req, res) => {
    return res.send('The API is working');
});

app.listen(PORT, function(){
    console.log('server is running on port' + PORT);
});