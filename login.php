<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "regus";

$conn = mysqli_connect($servername, $username, $password, $database);
if(mysqli_connect_errno()) {  
    die("Failed to connect with MySQL: ". mysqli_connect_error());  
}  

$uname = $pwd = "";

$uname = $_POST['uname'];
$pwd = $_POST['pwd'];

$uname = stripcslashes($uname);
$pwd = stripcslashes($pwd);
$uname = mysqli_real_escape_string($conn, $uname);  
$pwd = mysqli_real_escape_string($conn, $pwd);

$sql = "select *from users where uname = '$uname' and pwd = '$pwd'"; 
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

header("Location: ./index.html?loggedin");

mysqli_close($conn);
?>