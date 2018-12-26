<?php
$username="anilkumar09";
$password ="7411120657";;
$sender="BREAKQ";
$mobile= urldecode($_POST['phone']);
$fname = urldecode($_POST['firstname']);
$seats= urldecode($_POST['udf1']);
$tname = urldecode($_POST['udf2']);
$moviename = urldecode($_POST['udf3']);
$date = urldecode($_POST['udf4']);
$time = urldecode($_POST['udf5']);
$email = "breakdqtickets@gmail.com";
$email2 = "support@inspiredmemories.in";


$subject = "BreakDQ Tickets Booked for " . $time . " on " . $date . "";
$email_message = "The Following Seats has been booked by " . $fname . " having Cell Number" . $mobile . " \n for the Show " . $moviename . " on " . $date . " at " . $time . " \n " . $seats . "";
mail( $email, $subject, $email_message, "From: BreakDQ App" );
mail( $email2, $subject, $email_message, "From: BreakDQ App" );


$message = $name . "Dear " . $fname . "Thank you for Booking seats in BreakDQ! \n Seat(s) " . $seats . " has been reserved for the movie \n" . $moviename . " On " . $date . " at " . $time . " in " . $tname . " \n NOTE: Please collect your tickets 30 min before the show starts, otherwise seat numbers will not be confirmed.\n  \n...... Enjoy the show from Team!";


$url="login.bulksmsgateway.in/sendmessage.php?user=".urlencode($username)."&password=".urlencode($password)."&mobile=".urlencode($mobile)."&sender=".urlencode($sender)."&message=".urlencode($message)."&type=".urlencode('3'); 
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$curl_scraped_page = curl_exec($ch);
curl_close($ch);
?>