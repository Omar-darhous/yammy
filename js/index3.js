

$("#site-par i").click(function(){
  let boxWidth = $('.box').outerWidth()
  if($('#site-par').css('left')=== '0px')
  {
    $("#site-par").animate({left: `-${boxWidth}`},1000);
  }
  else
  {
    $("#site-par").animate({left: `0px`},1000);
  }
  
})