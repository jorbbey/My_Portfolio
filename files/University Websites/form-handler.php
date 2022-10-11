<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from = 'aj4320533021@gmail.com';

$email_subject = 'New form Submission';

$email_body = 
"User Name: $name.\n".
"User Name: $visitor_email.\n".
"Subject: $subject.\n".
"User Message: $message.\n";

$to = 'jorbbey@gmail.com';

$headers = "From: $email_from \r\n";

$headers = "Reply-To: $visitor_email \r\n";


mail($to, $email_subject, $email_body, $headers);

header("Location: contact.html");

?>