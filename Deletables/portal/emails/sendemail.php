<?php
session_start();

//$_POST['razorpay_payment_id'] = $_SESSION['payment_id'];
$html = "<p>Your Email was sent successfully</p>
<p>Payment ID: {$_SESSION['payment_id']}</p>";
echo $html;

$_SESSION["email"] = $_POST['email'];
$_SESSION["username"] = $_POST['name'];
$_SESSION["payment_id"] = $_POST['paymentID'];
$to = $email;
$subject = 'Payment Successfull';
$from = "External Internship and Training (no_reply@inspiredmemories.in)";
$reply = "office@inspiredmemories.in";

$headers = "From: " . strip_tags($from) . "\r\n";
$headers .= "Reply-To: ". strip_tags($reply) . "\r\n";
$headers .= "CC: office@inspiredmemories.in\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


$message = file_get_contents("paymentsuccess.php") // get the contents of the output buffer

mail($to, $subject, $message, $headers);
?>
