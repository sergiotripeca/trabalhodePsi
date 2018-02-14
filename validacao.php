<?php session_start();

$user = $_POST[username];
$pass = $_POST[password];

if ($user == "projeto" && $pass == "projeto")
	{
		$_SESSION[user] = $user;
		setcookie('Cookie' , $user, time()+60);
		header("Location:Untitled-1.html");
	}
else{
		header("Location:erro.php");
	}
?>