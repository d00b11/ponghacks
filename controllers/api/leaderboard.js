var router = require("express").Router();

var getLeaderboard = function(req, res) {
	console.log("get that leaderboard", req.body);

	if (req.err){
		console.warn(err.message);
	}
	else {
		// layouts/public.html
		res.status(200).send("No Leaders yet");
	};
};
router.get("/", getLeaderboard);

module.exports = router;