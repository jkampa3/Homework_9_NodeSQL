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
                item_id: itemID
            },
            function (err, data) {
                if (err) throw err;

                if (data.length === 0) {
                    console.log('USER ERROR: Selected ITEM ID is Invalid. Please Select a Valid ITEM ID from List Below.');
                    displayInventory();
                } else {
                    var inventoryDataCheck = data[0];
                    if (quantity <= inventoryDataCheck.stock_quantity) {
                        console.log('Order Confirmed! Order Being Placed!');
                        var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (inventoryDataCheck.stock_quantity - quantityRequested) + ' WHERE item_id = ' + item;
                        connection.query(updateQueryStr, function (err, data) {
                            if (err) throw err;
                            console.log('The Total Today is $' + inventoryDataCheck.price * quantityRequested);
                            console.log('Thank you for shopping with us!');
                            console.log("\n---------------------------------------------------------------------\n");
                            connection.end();
                        })
                    } else {
                        console.log('Sorry, Stock Is Low. Please Replace Order');
                        console.log('Please Modify Your Order.');
                        console.log("\n---------------------------------------------------------------------\n");

                        displayInventory();
                    }
                }
            })
    });
};



function runBamazonCustomer() {

    displayInventory();

};

runBamazonCustomer();
