const router = require('express').Router();
const db = require("../database");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register

router.post("/register", async (req, res) => {

    const { firstName, sureName, password, secrateCode, mobileNumber, agentId } = req.body;

    if (firstName && sureName && password && secrateCode, agentId) {

        if (secrateCode === process.env.SECRETCODE) {

            try {

                const user = {
                    firstName,
                    sureName,
                    fullName: `${firstName} ${sureName}`,
                    role: "ADMIN",
                    password: await bcrypt.hash(password, 10),
                    mobileNumber,
                    agentId,
                    reating: 7,
                }

                db.query(`SELECT * FROM user WHERE mobileNumber ='${mobileNumber}'`, function (err, result) {

                    console.log(result);

                    if (err) throw err;

                    if (result.length > 0) {

                        res.status(400).json("User mobileNumber is already exist");

                    } else {

                        db.query(`SELECT * FROM user WHERE agentId ='${agentId}'`, function (err, result) {

                            console.log(result);

                            if (err) throw err;

                            if (result.length > 0) {

                                res.status(400).json("User agentId is already exist")
                            }
                            else {

                                db.query(`INSERT INTO user SET ?`, user, function (err, result) {
                                    if (err) throw err;

                                    res.status(200).json(result);
                                });
                            }
                        });
                    }
                });


            } catch (error) {

                res.status(400).json(error);

            }

        } else {

            res.status(400).json("secrate code is not correct");
        }


    } else {

        res.status(400).json("Please fill all the fields");
    }

});


// Login route

router.post("/login", async (req, res) => {

    const { mobileNumber, password } = req.body;


    if (password && mobileNumber) {

        try {


            db.query(`SELECT * FROM user WHERE mobileNumber ='${mobileNumber}'`, function (err, result) {

                if (err) throw err;

                if (result.length > 0) {

                    const user = result[0];

                    bcrypt.compare(password, user.password);

                    bcrypt.compare(password, user.password, function (err, response) {

                        if (err) {

                            res.status(400).json("Incorrect password")

                        } else {

                            jwt.sign({ id: user._id, role: user.role, userName: user.fullName }, process.env.TOKENSECRATE, function (err, token) {

                                res.status(200).json({ token, user });
                            });
                        }
                    });

                } else {

                    res.status(400).json("User not found");
                }

            });

        } catch (error) {

            res.status(400).json("Something went wrong");
            console.log(error);
        }

    } else {

        res.status(400).json("Please fill all the fields");
    }
});


module.exports = router;