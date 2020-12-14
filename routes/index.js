const db = require('../models/index');
const User = db.user;

const getHomePage = (req, res) => {

    User.findAll({ limit: 10 }).then(function(projects) {
       
            res.render('index.ejs', {
                title: "Welcome to Socka | View Players",
                players: projects
            });
        });
    };

    // res.render('index.ejs', {
    //     title: "Welcome to Socka | View Players"
    //     ,players: result
    // });

module.exports = {
    getHomePage
};