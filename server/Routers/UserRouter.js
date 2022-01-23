const router = require('express').Router();
const User = require("../Models/User-model");
const bcrypt = require('bcrypt');
const Authgurd = require("../Authgurd/Authgurd");
const jwt = require('jsonwebtoken');

router.post("/createAgent", Authgurd, async (req, res) => {

    const { firstName, sureName, agentId, mobile, reating, agentType } = req.body;

    if (firstName && sureName && agentId && mobile && reating && agentType) {

        try {

            const user = new User({
                firstName,
                sureName,
                fullName: `${firstName} ${sureName}`,
                role: agentType,
                agentId,
                reating,
                mobileNumber: mobile,
                whatsAppLink: `https://wa.me/${mobile}`,

            })

            user.save()
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(error => {
                    res.status(400).json(error);
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

        User.find({})
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(400).json(error);
            })

    } catch (error) {

        res.status(400).json("Something went wrong");
        console.log(error);
    }
});

// get customer service agents

router.get("/customerService", async (req, res) => {

    try {

        User.find({ role: "CUSTOMER SERVICE" })
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(400).json(error);
            })

    } catch (error) {

        res.status(400).json("Something went wrong");
        console.log(error);
    }
});

// admin agent 

router.get("/admin", async (req, res) => {

    try {

        User.find({ role: "ADMIN" })
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(400).json(error);
            })

    } catch (error) {

        res.status(400).json("Something went wrong");
        console.log(error);
    }
});

// super Agent

router.get("/superAgent", async (req, res) => {

    try {

        User.find({ role: "SUPER AGENT" })
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(400).json(error);
            })

    } catch (error) {

        res.status(400).json("Something went wrong");

        console.log(error);

    }
});


// onlineMasterAgent

router.get("/onlineMasterAgent", (req, res) => {

    try {

        User.find({ role: "ONLINE MUSTER AGENT" })
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.status(400).json(error);
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

        const deletedAgent = await User.findByIdAndDelete(id);
        console.log(deletedAgent);
        res.status(200).json("deleted")

    } catch (error) {

        console.log(error);
        res.status(400).json(error)

    }

});

// update Agent 

router.put("/update/:id", Authgurd, async (req, res) => {

    try {

        const agent = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(agent)
        res.status(200).json(agent)

    } catch (error) {
        res.status(400).json(error)
    }

})



module.exports = router;