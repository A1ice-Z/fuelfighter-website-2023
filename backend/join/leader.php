<?php

require_once '../core/connect.php';

$member_id = $_GET['member_id'];

$stmt = $conn->prepare("SELECT firstname, lastname, study, email, image, linkedin FROM members WHERE member_id = ?");
$stmt->bind_param("i", $member_id);
$stmt->execute();
$result = $stmt->get_result();
$output = $result->fetch_assoc();

echo json_encode($output);