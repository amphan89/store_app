var mysql = require('mysql');
var inquirer = require('inquirer');
require('console.table');

var choices = ['View Products for sale', 'Buy Item', 'Nothing'];

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '***',
  database: 'pokemart_db',
  port: 3306
});

connection.connect();
loadProduct();

function loadProduct() {
  connection.query('SELECT * FROM products', function (err, results, fields) {
    console.table(results);
    promptCustomerQuestion();

  });
};

function promptCustomerQuestion() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View Products for sale', 'Buy Item', 'Nothing'],
      name: 'choices'
    },
  ])

    .then(answers => {
      if (answers.choices == 'View Products for sale') {
        loadProduct();
      } else if (answers.choices == 'Nothing') {
        console.log('Ok, goodbye!');
        connection.end();
      } else if (answers.choices == 'Buy Item') {
        promptCustomerForItem();
      };
    })
};

function promptCustomerForItem(val) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'choice',
      message: 'what is the id of the item?'
    }
  ])
    .then(function (val) {
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, inventory)

      function checkInventory(choiceId, inventory) {
        for (var i = 0; i < inventory.length; i++) {
          if (inventory[i] === choiceId) {
            return inventory[i];
          }
        }
        return null;
      };

      if (product) {
        promptCustomerForQty(product);
      }
    })
};



function promptCustomerForQty(product) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'quantity',
      message: 'how many of this item?',
    }
  ])
    .then(function (val) {
      var quantity = parseInt(val.quantity);

      if (quantity > product.stock_quantity) {
        console.log('Not Enough Inventory!');
      } else {
        makePurchase(product, quantity);
      }
    })
};



function makePurchase(product, quantity) {
  connection.query(
    'UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?',
    [quantity, product.item_id],
    function (err, res) {
      loadProduct();
    }
  )
};


