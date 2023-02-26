<?php
require_once '../core/connect.php';
$year = $_GET["year"];
$group = $_GET["group"];

// write sql query to get members per year
$result = $conn->query("SELECT members.firstname, member_in_team.position_description, teams.name FROM(members 
INNER JOIN (member_in_team INNER JOIN teams ON member_in_team.team_id = teams.team_id)  
ON members.member_id=member_in_team.member_id) WHERE teams.year = $year AND teams.name = '$group'");


while($row = $result->fetch_assoc()) {
    $output[] = $row['name'];
    $firstname[] = $row['firstname'];
  }
echo json_encode($output);
echo json_encode($firstname);
