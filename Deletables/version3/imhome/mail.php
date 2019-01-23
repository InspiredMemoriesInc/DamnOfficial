<?php 

$name = $_POST[ 'name' ];
$email = $_POST[ 'email' ];
$subject = $_POST[ 'subject' ];
$message = $_POST[ 'message' ];
$mail_subject = $subject. "  Enquiry from IM Home";
$message = "Name: ".$name." \n Email: ".$email."\n Subject: ".$subject." \n Message: ".$message."";

/* Replace YOUR_MAIL With Your Mail Address inside '' */
if ( mail( 'support@inspiredmemories.in', $mail_subject, $message, "From:" . $email ) ) {
    echo "<center><h2>Thank you <strong>$name</strong> for contacting !!!</h2><center>";
    echo "<meta http-equiv='refresh' content='3;url=index.html'>";
} else {
    echo "Error in sending message !!! Please try again";
} 

?>