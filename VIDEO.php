<?php session_start();
if (! Isset ($_SESSION[user]))
{
  header("Location:erro.php");
}
elseif (! Isset ($_COOKIE[Cookie]))
{
  header("Location:erro.php");
}
else
{
echo'
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script type = "text/javascript" language = "javascript"></script>
<link rel="stylesheet" type="text/css" href="csssheet.css">
<script type="text/javascript" src="VIDEO.js"></script>
</head>
<body>

<!--video em loop constant com som-->
<video autoplay loop id="myVideo">
  <source src="Lil Pump - 'Gucci Gang' (Official Music Video).mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>

<div id="content2" class="content" > <!--div "mãe"-->
<div id="draggable"> 
    <img class="displayed" src="esketit.png" width="40%" height="40%">
    <button class="myBtn videobtns" id="myBtn3" onmouseenter="show()"  onclick="hide()" >menu</button>
    <div id="buttons"  ><!--div do menu-->
    <button class="myBtn videobtns" id="anonvideo" onclick="playSound()">random</button>
    <a href="Untitled-1.html"><button id="normalmenu" class="myBtn videobtns" >back to menu</button></a>
</div>
</div>


</div>
</body>
</html>
';
?>

