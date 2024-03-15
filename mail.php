<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "gihondiraj2018@gmail.com";
$headers = "From: $email";
$body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Email sent successfully";
} else {
    http_response_code(500);
    echo "Error sending email";
}
