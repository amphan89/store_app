DROP DATABASE pokemart_db;

CREATE DATABASE pokemart_db;
USE pokemart_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    Item VARCHAR (255),
    Category VARCHAR (255),
    Price VARCHAR (255),
    Stock VARCHAR (255),
    Description VARCHAR (255),
    PRIMARY KEY(id)
);


INSERT INTO products (Item, Category, Price, Stock, Description)
VALUES 
('Pokeball', "Poke Balls", 200, 10, '1x catch rate pokeball'), 
('Great Ball', "Poke Balls", 600, 5, '1.5x catch rate pokeball'), 
('Ultra Ball', "Poke Balls", 1200, 2, '2x catch rate pokeball'),
('Master Ball', "Poke Balls", 2000, 1, 'rare-no fail pokeball'),
('Potion', "medicine", 300, 10, 'restore 20 HP'),
('Super Potion', "medicine", 700, 5, 'restore 50 HP'),
('Elixir', "medicine", 500, 2, 'restore 10 PP'),
('Max Elixir', 'medicine', 1000, 2, 'restore all PP for 1 pokemon'),
('Fire Stone', 'Evolutionary Items', 2000, 2, 'evolve 1 fire pokemon'),
('Water Stone', 'Evolutionary Items', 2000, 2, 'evolve 1 water pokemon'),
('Leaf Stone', 'Evolutionary Items', 2000, 2, 'evolve 1 grass pokemon'),
('Thunder Stone', 'Evolutionary Items', 2000, 2, 'evolve 1 electric pokemon'); 


