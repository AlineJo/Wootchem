<?php
//db_name >>> stg: ""; ||| Prod: "";
//db_user >>> stg: ""; ||| Prod: "";
//db_pass >>> stg: "";    ||| Prod: "";

$PROD_DB_NAME = "";
$PROD_DB_USER = "";
$PROD_DB_PASSWORD = " ";

$STAG_DB_NAME = "";
$STAG_DB_USER = "";
$STAG_DB_PASSWORD = "";

$dbName = $PROD_DB_NAME; 
$user = $PROD_DB_USER;   
$password = $PROD_DB_PASSWORD;  
$host = "localhost";
$cnn = new PDO('mysql:dbname=' . $dbName . ';host=' . $host, $user, $password);
?>