<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "reguslist";

$conn = mysqli_connect($servername, $username, $password, $database);

if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error());  
}  

$lid = 0;
$lid++;
$linput = $_POST['titlefld' . $lid];

$sql = "INSERT INTO list (task) VALUES ('$linput')";
$insert = mysqli_query($conn, $sql);

mysqli_close($conn);

?>