//node requirements
var mysql = require('mysql');
var inquirer = require('inquirer');

//database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "croEtLu4rO",
    database: "bamazon"
});

//initial inventory load of Bamazon DB

function displayInventory() {

    inventoryQuery = "SELECT * FROM products";
    connection.query(inventoryQuery, function (err, data) {
        if (err) throw err;

        console.log("---------------------------------------------------------------------------------------------------------------");
        console.log("                                        -----Current Inventory At Bamazon-----");
        console.log("---------------------------------------------------------------------------------------------------------------\n");

        var initialInvenotry = "";
        for (var i = 0; i < data.length; i++) {
            initialInvenotry = "";
            initialInvenotry += "Item ID: " + data[i].item_id + " | ";
            initialInvenotry += "Product Name: " + data[i].product_name + " | ";
            initialInvenotry += "Department: " + data[i].department_name + " | ";
            initialInvenotry += "Price: $" + data[i].price + "\n"

            console.log(initialInvenotry);
        };

        console.log("---------------------------------------------------------------------------------------------------------------");

        bamazonCustomerPrompt();

    });

};

//prompt customer via inquirer for selections

function bamazonCustomerPrompt() {

    console.log("                                          -----BAMAZON PURCHASE CENTER-----");
    console.log("---------------------------------------------------------------------------------------------------------------\n");

    inquirer.prompt([

        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter the Item ID which you would like to purchase.'
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many of the above selection do you need?'
        }

    ]).then(function (userInput) {

        var itemID = input.item_id;
        var quantityRequested = input.quantity;
        var inquirerQuery = "SELECT * FROM products where ?";

        connection.query(inquirerQuery,
            {
                item_id = item
            },
            function (err, data) {
                if (err) throw err;

                if (data.length === 0) {
                    console.log('USER ERROR: Selected ITEM ID is invalid. Please select a valid ITEM ID from list below.');
                    displayInventory();
                };


            });

    });

}

function runBamazonCustomer() {

    displayInventory();

};

runBamazonCustomer();
