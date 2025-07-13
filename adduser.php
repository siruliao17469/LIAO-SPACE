<?php
// エラーを出力する
ini_set('display_errors', "On");

$email = $_POST["email"];
$password = $_POST["password"];


$con =mysqli_connect("44.203.220.106", "sample_user", "", "test");

$sql = "insert into users (`email`, `password`) values ('$email', '$password')";
mysqli_query($con,$sql);
?>