const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const fs = require('fs');

app.use(express.static('./public/'));

app.get('/chisiamo', (req, res) => {
	res.status(200);
	res.write(fs.readFileSync('./public/chisiamo.html'));
	res.end();
})
app.get('/progetti', (req, res) => {
	res.status(200);
	res.write(fs.readFileSync('./public/progetti.html'));
	res.end();
})


app.listen(port, () => console.log(`listening on http://localhost:${port}`));