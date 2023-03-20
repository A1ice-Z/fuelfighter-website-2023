<?php
require_once '../core/connect.php';
$year = $_GET["year"];
$group = $_GET["group"];


$result = $conn->query("SELECT teams.description FROM teams 
WHERE teams.year = $year AND teams.name = '$group'");


$members = [];
while($row = $result->fetch_assoc()) {
    $members = $row; 
  }

echo json_encode($members);