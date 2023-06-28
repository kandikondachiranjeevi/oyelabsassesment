const mysql = require("mysql");

const customers = [
  {
    email: "anurag11@yopmail.com",
    name: "anurag",
  },
  {
    email: "sameer11@yopmail.com",
    name: "sameer",
  },
  {
    email: "ravi11@yopmail.com",
    name: "ravi",
  },
  {
    email: "akash11@yopmail.com",
    name: "akash",
  },
  {
    email: "anjali11@yopmail.com",
    name: "anjai",
  },
  {
    email: "santosh11@yopmail.com",
    name: "santosh",
  },
];

const connection = mysql.createConnection({
  host: "your_host",
  user: "your_username",
  password: "your_password",
  database: "your_database",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database.");

  // Loop through the customers array and perform the insert/update operation
  customers.forEach((customer) => {
    connection.query(
      "INSERT INTO customers (name, email) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = ?",
      [customer.name, customer.email, customer.name],
      (err, result) => {
        if (err) {
          console.error("Error inserting/updating customer:", err);
          return;
        }
        console.log("Customer inserted/updated successfully:", customer);
      }
    );
  });

  // Close the database connection
  connection.end((err) => {
    if (err) {
      console.error("Error closing the MySQL database connection:", err);
      return;
    }
    console.log("MySQL database connection closed.");
  });
});
