<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button'])) {
            $button = $_POST['button'];
            
$servername = "localhost";
$username = "";
$password = "";
$dbname = "task3";

// Create a new MySQL connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare a SQL statement to insert the button value into a table
$stmt = $conn->prepare("INSERT INTO texts (sentence) VALUES (?)"); // table name, (column name), git the value from the web page

// Bind the button value to the prepared statement
$stmt->bind_param("s", $button); // s for string

// Execute the prepared statement
$stmt->execute();

// Close the prepared statement and MySQL connection
$stmt->close();
$conn->close();

       }
        ?>