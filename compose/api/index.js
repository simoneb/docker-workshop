const redis = require("redis");
const cors = require("cors");
const app = require("express")();

const redisClient = redis.createClient("redis://redis");

app.use(cors());

app.get("/count", (req, res, next) => {
  redisClient.get("count", (err, value) => {
    if (err) return next(err);
    res.status(200).send(value);
  });
});

app.post("/count", (req, res, next) => {
  redisClient.incr("count", (err, value) => {
    if (err) return next(err);
    res.status(200).send("" + value);
  });
});

app.listen(8080, () => console.log("api listening on port 8080"));
