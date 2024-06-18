
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

echo"DataBase Here <br>";


/*

Inserting New User To DataBase 

*/

if($_POST["Sign"]){

    $User = $_POST['User'];
    $Pass = md5($_POST['PASS']);

    /*   
    => INSERT INTO : SQL statement to insert data into a MySQL database
    => VALUES : keyword is used to specify the values to be inserted into the database
     */


    $Query = "INSERT INTO `accounts` (`ID`,`Name`,`Password`) VALUES (NULL , '$User' , '$Pass')" ;
    
    /* 
    => mysqli_query() : function used to execute SQL queries on a MySQL database
    => mysqli_id() : Displays the ID of last added 
    */

    if (mysqli_query($Connection ,$Query)) echo "Data Added Successfully <br>" . "ID is : " . mysqli_insert_id($Connection);
    else echo "error <br> ";
}
?>
<html>
<body>
    <form method = "post" >

        Name     :<input type = "text" placeholder="Enter Your Name" required name = "User"><br>

        Password :<input type ="password" placeholder="Enter Your Password"required name = "PASS"><br>

        <input type="submit" value="SignUp" name="Sign">
    
    </form>
</body>
</html>