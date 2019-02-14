var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurg) {
            var hbars = {
                burgers: dbBurg
            }
            res.render("index", hbars);
        });    
    });

    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
            burger_name: req.body.name,
            devoured: false
        }).then(function(dbBurg) {
            res.json(dbBurg)
        });
    });


    app.put("/api/burgers/", function(req, res) {
        db.Burger.update(
          {
            devoured: req.body.devoured
          },
          {
            where: {
              id: req.body.id
            }
          }
        ).then(function(dbBurg) {
          res.json(dbBurg);
        });
    });



};
