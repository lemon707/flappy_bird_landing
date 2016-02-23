$(".intro").velocity("fadeIn", 1000)

$(".fa").mouseenter(function(){
  $(this)
    .velocity( { translateY: "-10px", color: "#FFEB3B" }, 400 );
});

$(".fa").mouseleave(function(){
  $(this)
    .velocity( { translateY: "0", color: "#FFEB3B" }, 200 );
});
