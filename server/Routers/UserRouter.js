const router = require('express').Router();
const db = require("../database");
const Authgurd = require("../Authgurd/Authgurd");


router.post("/createAgent", Authgurd, async (req, res) => {

    const { firstName, sureName, agentId, mobile, reating, agentType } = req.body;

    if (firstName && sureName && agentId && mobile && reating && agentType) {

        try {

            const user = {
                firstName,
                sureName,
                fullName: `${firstName} ${sureName}`,
                role: agentType,
                agentId,
                reating,
                mobileNumber: mobile,
            }

            // find if agent already exist

            db.query(`SELECT * FROM user WHERE agentId = '${agentId}'`, (err, result) => {

                if (err) throw err;

                if (result.length > 0) {

                    res.status(400).json("AgentId is already exists");

                } else {

                    // find if mobile number already exist

                    db.query(`SELECT * FROM user WHERE mobileNumber = '${mobile}'`, (err, result) => {

                        if (err) throw err;

                        if (result.length > 0) {

                            res.status(400).json("Mobile number already exists");

                        } else {

                            // create agent

                            db.query(`INSERT INTO user SET ?`, user, (err, result) => {
                                if (err) throw err;

                                res.status(200).json("Agent created successfully")
                            })
                        }
                    })

                }
            })

        } catch (error) {

            res.status(400).json("Something went wrong");
            console.log(error);
        }

    } else {

        res.status(400).json("Please fill all the fields");
    }
});


// get all agents

router.get("/getAllAgents", async (req, res) => {

    try {

        db.query("SELECT * FROM user", (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })


    } catch (error) {

        res.status(400).json("Something went wrong");
        console.log(error);
    }
});

// get customer service agents

router.get("/customerService", async (req, res) => {

    try {

        db.query("SELECT * FROM user WHERE role = 'CUSTOMER SERVICE'", (err, result) => {
            if (err) throw err;
            res.status(200).json(result);
        })

    } catch (error) {

        res.status(400).json("Something went wrong");
        console.log(error);
    }
});

// admin agent 

router.get("/admin", async (req, res) => {

    try {

        db.query("SELECT * FROM user WHERE role = 'ADMIN'", (err, result) => {

            if (err) throw err;
            res.status(200).json(result);

        })

    } catch (error) {

        res.status(400).json("Something went wrong");
        console.log(error);
    }
});

// super Agent

router.get("/superAgent", async (req, res) => {

    try {

        db.query("SELECT * FROM user WHERE role = 'SUPER AGENT'", (err, result) => {

            if (err) throw err;
            res.status(200).json(result);

        })

    } catch (error) {

        res.status(400).json("Something went wrong");

        console.log(error);

    }
});


// onlineMasterAgent

router.get("/onlineMasterAgent", (req, res) => {

    try {

        db.query("SELECT * FROM user WHERE role = 'ONLINE MUSTER AGENT'", (err, result) => {

            if (err) throw err;
            res.status(200).json(result);

        })

    } catch (error) {

        res.status(400).json("Something went wrong");

        console.log(error);

    }

});

// agent delete

router.get("/delete/:id", Authgurd, async (req, res) => {

    const { id } = req.params

    try {

        db.query(`DELETE FROM user WHERE _id = ${id}`, (err, result) => {

            if (err) throw err;
            res.status(200).json(result);

        })

    } catch (error) {

        console.log(error);
        res.status(400).json(error)

    }

});

// update Agent 

router.put("/update/:id", Authgurd, async (req, res) => {

    try {

        const { id } = req.params;

        db.query(`UPDATE user SET ? WHERE _id = ${id}`, req.body, (err, result) => {

            if (err) throw err;
            db.query(`SELECT * FROM user WHERE _id = ${id}`, (err, result) => {
                if (err) throw err;
                res.status(200).json(result[0]);
                console.log(result);
            })

        })

    } catch (error) {
        res.status(400).json(error)
    }

})



module.exports = router;