
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

Retrieving Data From DataBase

*/

/*
=> SELECT : statement to retrieve data from a MySQL database
=> FROM : clause is used to specify the table or tables from which you want to retrieve the data
=> astrisk * means all data
*/

$Query = "SELECT * FROM `accounts` " ; 

/* 
==> Selecting A Specific Data Using **WHERE** Then Key And Value Of The Data You Wanna Retrieve For Example :
    SELECT * FROM `accounts` WHERE `Name` = 'Sherif'
*/ 

$Result =  mysqli_query($Connection, $Query) ;

// mysqli_num_rows() => Determine Num Of Rows in DB

echo "We Have " . mysqli_num_rows($Result) . " Raws In Our DataBase"  . "<br>" ;

// mysqli_fetch_array() => Fetch the next row of a result set as an associative, a numeric array, or both

while($Row = mysqli_fetch_array($Result)) {

    echo "[" . $Row['ID'] . "]" . $Row['Name'] . " : " . $Row['Password'] . "<br>" ; 
}    
mysqli_close($Connection) ; // Closes a previously opened database connection

