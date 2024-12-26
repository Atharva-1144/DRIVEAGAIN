<?php
$receiver = "joshiarjun412@gmail.com";
$subject = "email test via php host";
$body = "hi...example";
$sender = "From:atharvadiwan666@gmail.com";

if(mail($receiver,$subject,$body,$sender)){
    echo "Email sent successfully to $receiver";
}else{
    echo "sirry!sailed while senfing mail";

}
?>