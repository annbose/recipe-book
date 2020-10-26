const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');

// GET root will server the app build
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join((__dirname = 'build/index.html')));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));