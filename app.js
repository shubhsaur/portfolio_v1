const express = require("express");
const request = require("request");

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

app.get("/", (req, res) => {
	request({ url: "https://github.com/flackr/scroll-timeline/dist/scroll-timeline.js" }, (response, body) => {
		res.json(JSON.parse(body));
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
