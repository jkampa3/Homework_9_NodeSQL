DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(40) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(10) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Salmon Fillet Pillow", "Home Decor", 12.89, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mullet Headband", "Health and Beauty", 9.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tonsil Plush Toy", "Toys and Games", 21.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Afro", "Pet Supplies", 6.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lifesize Bigfoot Statue", "Home Decor", 2565.00, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("One Pound Replica Fat", "School Supplies", 23.10, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Giant Googly Eyes", "Toys and Games", 9.49, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shakespearean Insult Bandages", "Health and Beauty", 6.32, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat TurnTable Scratch Pad", "Pet Supplies", 26.00, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Keyboard Waffle Iron", "School Supplies", 60.20, 321);

SELECT * FROM products;