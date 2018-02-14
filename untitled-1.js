
$(document).ready(function(){
$("#hideme").click(function(){
    $("#hideme").hide("explode");
});
});

$(document).ready(function(){
$("#mudarcor").click(function(){
   $("#batata2").toggleClass("blue");
});
});


$.fn.white = function() {
    $(this).css({ "color" : "white"});
};
$(document).ready(function(){
$("#whiteme").click(function(){
        $("#batata2").white()
  });
  });


function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status ==200){
            document.getElementById("demonstra").innerHTML =
            this.responseText;
        }
    };
    xhttp.open("GET","ajax.txt",true);
    xhttp.send();
}




  function playSound(){
   var colors = new Array();
    colors[0] = "green";
    colors[1] = "black";
    colors[2] = "yellow";
    colors[3] = "#FFFAFA";
    colors[4] = "#F0FFFF";
    colors[5] = "#96CDCD";
    colors[6] = "#98FB98";
    colors[7] = "#FAFAD2";
    colors[8] = "#FFD700";
    var cores = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor=cores;
  };

  $( function() {
    var availableTags = [
      "BASIC",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      
    ];

    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

$( "#clickme" ).click(function() {
  $( "#book" ).toggle( "slow", function() {
  
  });
});
