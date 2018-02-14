 $( function() {$( "#draggable" ).draggable();
  } );





   function playSound(){
    var vod = new Array();
      vod[0] = "Lil Pump - 'Gucci Gang' (Official Music Video).mp4";
      vod[1] = "21 Savage - Bank Account (Official Audio).mp4";
      var video = vod[Math.floor(Math.random() * vod.length)];
      document.getElementById("myVideo").src=video;
      

    };

    function playSoundback(){
      document.getElementById("myVideo").src=videocount;
      alert(videocount);


    };

    function show(){
      var btn3=document.getElementById("myBtn3");

      $("#buttons").slideDown("slow");

    };

    function hide(){

      var btn3=document.getElementById("myBtn3");


        $("#buttons").slideUp("slow");
    };