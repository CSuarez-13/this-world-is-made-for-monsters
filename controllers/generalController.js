const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("general/home", {
        title: "This world is made for monsters"
    })
})

router.get("/appearances", (req, res) => {})

router.get("/generations", (req, res) => {})

router.get("/xenophilia", (req, res) => {})

router.get("/xenophobia", (req, res) => {})

router.get("/references", (req, res) => {})

module.exports = router;