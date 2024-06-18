
<?php

//Testing DB Connection

$Host = "localhost";
$User_Name = "xApachex" ;
$Password = "15975300";
$DB_Name = "users";

$Connection = mysqli_connect("$Host","$User_Name","$Password","$DB_Name");

/*if($Connection) echo"Connected Successfully" ;
else die("database error: " . mysqli_connect_error()) ;*/

if(!$Connection) die("database error <br>") ; 

echo"DataBase Here"; 