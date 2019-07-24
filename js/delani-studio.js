$(document).ready(function() {
$(".click0").click(function(){
   $("#hidden1").slideToggle(200);
 });

 $(document).ready(function(){
 $(".click1").click(function(){
   $("#hidden2").slideToggle(200);
 });
});

$(document).ready(function(){
 $(".click2").click(function(){
   $("#hidden3").slideToggle(200);
 });
});


 $(document).ready(function(){
   $("#project1").mouseenter(function(){
     $("#overlay1").show(); 
    }).mouseleave(function(){
     $("#overlay1").hide();
  });
 });

   $("#project2").mouseenter(function(){
       $("#overlay2").show();
   }).mouseleave(function(){
       $("#overlay2").hide();
   });
});

  $("#project3").mouseenter(function(){
       $("#overlay3").show();
   }).mouseleave(function(){
       $("#overlay3").hide();
   });

   $("#project4").mouseenter(function(){
       $("#overlay4").show();
   }).mouseleave(function(){
       $("#overlay4").hide();
   });
 
   $("#project5").mouseenter(function(){
       $("#overlay5").show();
   }).mouseleave(function(){
       $("#overlay5").hide();
   });

   $("#project6").mouseenter(function(){
       $("#overlay6").show();
   }).mouseleave(function(){
       $("#overlay6").hide();
   });


   $("#project7").mouseenter(function(){
       $("#overlay7").show();
   }).mouseleave(function(){
       $("#overlay7").hide();
   });

  $("#project8").mouseenter(function(){
    $("#overlay8").show();
  }).mouseleave(function(){
    $("#overlay8").hide();
  });  
