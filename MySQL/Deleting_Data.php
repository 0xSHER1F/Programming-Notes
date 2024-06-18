
<?php

//Testing DB Connection

$Host = "localhost";
$User_Name = "xApachex" ;
$Password = "15975300";
$DB_Name = "users";

/* 
mysqli_connect() function used to establish a connection to a MySQL database
*/ 

$Connection = mysqli_connect("$Host","$User_Name","$Password","$DB_Name");

/*if($Connection) echo"Connected Successfully" ;
else die("database error: " . mysqli_connect_error()) ;*/

if(!$Connection) die("database error <br>") ; 

else 
echo"DataBase Here <br>";

/*

Deleting Data From DataBase

*/


$Query = "DELETE FROM `accounts` WHERE `ID` >= 7 " ; 

if (mysqli_query($Connection, $Query)) 
echo "Row Deleted Successfully <br>";
else
echo "Error <br>";


mysqli_close($Connection) ; // Closes a previously opened database connection

