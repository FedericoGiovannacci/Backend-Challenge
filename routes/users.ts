import Router from "express";
const jwt = require("jsonwebtoken");
const router = Router();
const db = require("../database/models");

router.post("/register", async (req, res) => {
  await db.Users.create({
    username: req.body.username,
    password: req.body.password,
    role_id: 2,
  });
});

router.post("/login", async (req, res) => {
  const user = await db.Users.findOne({
    where: { username: req.body.username },
  });

  if (user.password == req.body.password) {
    jwt.sign({ user }, "secretKey", (err: any, token: any) => {
      res.json({ token });
    });
  }
});

router.post("/post", async (req: any, res: any) => {
  const bearer = req.headers["authorization"].split(" ")[1];
  console.log(bearer);
  jwt.verify(bearer, "secretKey", (err: any, authdata: any) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ authdata });
    }
  });
});

export default router;
