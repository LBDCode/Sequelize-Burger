USE burgers_db;

INSERT into burgers (burger_name, devoured)
VALUES ("Royale with Cheese", false),
("Krabby Patty", false),
("Impossible Burger", true)
;

UPDATE burgers SET devoured = false WHERE id = 2;
SELECT * FROM burgers;