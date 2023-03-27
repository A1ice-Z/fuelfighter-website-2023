<?php
require_once
'../core/connect.php';
header('Access-Control-Allow-Origin: *');
$firstname = "Tor";
$lastname = "Børve Rasmussen";
$picture = $conn ->query("SELECT image FROM members WHERE firstname = '$firstname' AND lastname = '$lastname'");
$output = [];
while($row = $picture->fetch_assoc()) { 
    $output[] = $row['image'];
}
    
echo json_encode($output);
