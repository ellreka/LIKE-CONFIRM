function check_like(){
  var elements = $('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite')
  elements.off('click');
  elements.on('click',function(){
    var result = confirm("Will you really press the like button?");
      if(result){
        console.log("OK")
      }else{
        console.log("cancel")
        return false
      }
  })
}

function ObserveStream(){

	var observer = new MutationObserver(hide_like);

	observer.observe(document.getElementsByClassName('stream-items')[0], {
	    attributes: true,
	    childList:  true
	});
	console.log("observe");
  check_like();
} 

var observer = new MutationObserver(ObserveStream);

observer.observe(document.getElementsByTagName("body")[0], {
    attributes: true
});


