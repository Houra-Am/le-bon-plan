const config = require("../config");

const jwt = require('jsonwebtoken');
const userModel = require('../models/');
const app = express();

app.get("/admin", async (req, res, next) => {
    try{
    const token = req.headers.authorization;
//    console.log(token);
    const result = jwt.verify(token.split(" ")[1], config.secret);
    const user = await userModel.findOne({
        _id: result.id
    }).exec()

    }catch(err){
        res.status(401).send("Unauthorized !");
    };
});

module.exports = app;