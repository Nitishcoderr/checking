<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mailheader = "From:".$name,"<".$email.">\r\n";
$recipient = "nitishchaurasiyac555@gmail.com";

mail($recipient,$phone,$message,$mailheader)
or die("Error!");

echo"message send"

?>