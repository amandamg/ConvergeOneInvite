$(document).ready(function(){
	$("#date").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
	$("#time").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
	$("#slideshow > div:gt(0)").hide();
	setInterval(function(){
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 5000);
	
	$("#slideshow2 > div:gt(0)").hide();
	setInterval(function(){
  $('#slideshow2 > div:first')
    .fadeOut(2500)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
}, 200);
	
	$("#slideshow3 > div:gt(0)").hide();
	setInterval(function(){
  $('#slideshow3 > div:first')
    .fadeOut(4000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow3');
}, 200);
	
	
	
});



