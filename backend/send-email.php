<?php
function sendEmail($emailObject, $name, $surname, $employer, $message) {
  // $to = 'br@fuelfighter.no';
  $to = 'br@fuelfighter.no';
  $subject = 'New Sponsor Mail';
  $body = "{$name} {$surname} employed by {$employer} wrote us from the sponsor form in the website:\n Message: {$message}";
  $headers = "From: {$emailObject}" . "\r\n" .
      'X-Mailer: PHP/' . phpversion();
  
  mail($to, $subject, $body, $headers);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  if (isset($data['emailObject']) && isset($data['name']) && isset($data['surname']) && isset($data['employer']) && isset($data['message'])) {
      // Validate input
      if (!filter_var($data['emailObject'], FILTER_VALIDATE_EMAIL)) {
          http_response_code(400);
          echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
          exit;
      }
      
      // Sanitize input
      $emailObject = filter_var($data['emailObject'], FILTER_SANITIZE_EMAIL);
      $name = filter_var($data['name'], FILTER_SANITIZE_STRING);
      $surname = filter_var($data['surname'], FILTER_SANITIZE_STRING);
      $employer = filter_var($data['employer'], FILTER_SANITIZE_STRING);
      $message = filter_var($data['message'], FILTER_SANITIZE_STRING);

      sendEmail($emailObject, $name, $surname, $employer, $message);
      http_response_code(200);
      echo json_encode(['status' => 'success']);
  } else {
      http_response_code(400);
      echo json_encode(['status' => 'error', 'message' => 'Missing required parameters']);
  }
} else {
  http_response_code(405);
  echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
}
?>