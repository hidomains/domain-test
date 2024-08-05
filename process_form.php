<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $price = htmlspecialchars($_POST['price']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'info@58name.com'; // 你的邮箱地址
    $subject = 'New message from ' . $name;
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $email_body = "<html><body>";
    $email_body .= "<h2>Contact Form Submission</h2>";
    $email_body .= "<p><strong>Name:</strong> $name</p>";
    $email_body .= "<p><strong>Phone:</strong> $phone</p>";
    $email_body .= "<p><strong>Email:</strong> $email</p>";
    $email_body .= "<p><strong>Price Quote:</strong> $price</p>";
    $email_body .= "<p><strong>Message:</strong><br>$message</p>";
    $email_body .= "</body></html>";

    if (mail($to, $subject, $email_body, $headers)) {
        echo "<p>Message sent successfully.</p>";
    } else {
        echo "<p>Message could not be sent.</p>";
    }
}
?>