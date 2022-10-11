
<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'jorbbey@gmail.com';
    $email_subject = "New Job Request";
    $email_body = "You have recieved a new message from the user $name.\n".
                                "Here is the message:\n $message".
                  "User Email: $visitor_email.\n".

    $to = "jorbbey@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    if(mail($to,$email_subject,$email_body,$headers)) {
        echo "Mail Sent";
    } else {
        echo "Failed to send mail";
    }
?>

