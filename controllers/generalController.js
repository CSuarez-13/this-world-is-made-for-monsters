const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("general/home", {
        title: "This World is Made for Monsters"
    })
})

router.get("/appearances", (req, res) => {
    res.render("general/aliensAppearance", {
        title: "The Extraterrestrial Aesthetic: Analyzing Alien Appearance"
    })
})

router.get("/generations", (req, res) => {
    res.render("general/generationalPerspectives", {
        title: "Old vs. New: Perceptions of Otherness"
    })
})

router.get("/xenophilia", (req, res) => {
    res.render("general/xenophilia", {
        title: "Embracing Otherness: Xenophilia in 'This World Is Made for Monsters'"
    })
})

router.get("/xenophobia", (req, res) => {
    res.render("general/xenophobia", {
        title: "Confronting Fear: Xenophobia in 'This World Is Made for Monsters'"
    })
})

router.get("/references", (req, res) => {
    res.render("general/references", {
        title: "References"
    })
})

module.exports = router;