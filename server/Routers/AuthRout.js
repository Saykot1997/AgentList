const router = require('express').Router();
const User = require("../Models/User-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register

router.post("/register", async (req, res) => {

    const { firstName, sureName, password, secrateCode, mobileNumber, agentId } = req.body;

    if (firstName && sureName && password && secrateCode, agentId) {

        if (secrateCode === process.env.SECRETCODE) {

            try {

                const user = new User({
                    firstName,
                    sureName,
                    fullName: `${firstName} ${sureName}`,
                    role: "ADMIN",
                    password: await bcrypt.hash(password, 10),
                    mobileNumber,
                    agentId,
                    reating: 7,
                })

                const findUserMobileNumber = await User.findOne({ mobileNumber });
                const findUserAgentId = await User.findOne({ agentId });

                if (findUserMobileNumber) {

                    res.status(403).json("User mobileNumber is already exist");

                } else if (findUserAgentId) {

                    res.status(403).json("User agentId is already exist");
                }
                else {

                    await user.save();
                    res.status(200).json("user is created");

                }

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

            const user = await User.findOne({
                mobileNumber
            });

            if (!user) {

                res.status(400).json("User not found");

            } else {
                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {

                    res.status(400).json("Incorrect password");

                } else {

                    const token = jwt.sign({ id: user._id, role: user.role, userName: user.fullName }, process.env.TOKENSECRATE);

                    const { password, ...rest } = user._doc;

                    res.status(200).json({ ...rest, token });

                }
            }

        } catch (error) {

            res.status(400).json("Something went wrong");
            console.log(error);
        }

    } else {

        res.status(400).json("Please fill all the fields");
    }
});


module.exports = router;