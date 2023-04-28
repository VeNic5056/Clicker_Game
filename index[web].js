const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 작동중 입니다...');
})
