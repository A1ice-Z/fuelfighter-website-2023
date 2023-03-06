<?php

require_once '../core/connect.php';
header('Access-Control-Allow-Origin: *');
$year = $_GET["year"]; 
$result = $conn->query("SELECT name FROM teams WHERE year = $year ");
$output = [];

while($row = $result->fetch_assoc()) {
  $output[] = $row['name'];
}

echo json_encode($output);