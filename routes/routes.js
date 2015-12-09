var appRouter = function(app) {
  app.get("/account", function(req, res) {
    var accountMock = {
        "username": "nraboy",
        "password": "1234",
        "twitter": "@nraboy",
        "dogname": "khloe"
    }
    if(!req.query.username) {
        return res.send({"status": "Error", "message": "Come on dude!!"});
    } else if(req.query.username != accountMock.username) {
        return res.send({"status": "error", "message": "what the hell brett??"});
    } else {
        return res.send(accountMock);
    }
});
app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});
}

module.exports = appRouter;
