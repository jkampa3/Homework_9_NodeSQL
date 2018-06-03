//node requirements
var mysql = require('mysql');
var inquirer = require('inquirer');

//database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

//initial inventory load of Bamazon DB

function displayInventory() {

    inventoryQuery = "SELECT * FROM products";
    connection.query(inventoryQuery, function (err, data) {
        if (err) throw err;

        console.log("Initial Inventory At Bamazon:");
        console.log("---------------------------------------------------------------------------------------------------------------\n");

        var initialInvenotry = "";
        for (var i = 0; i < data.length; i++) {
            initialInvenotry = "";
            initialInvenotry += "Item ID: " + data[i].item_id + "  ";
            initialInvenotry += "Product Name: " + data[i].product_name + "  ";
            initialInvenotry += "Department: " + data[i].department_name + "  ";
            initialInvenotry += "Price: $" + data[i].price + "\n"

            console.log(initialInvenotry);
        };

        console.log("---------------------------------------------------------------------------------------------------------------");

    });

};

function runBamazonCustomer() {

    displayInventory(); 

};

runBamazonCustomer();
