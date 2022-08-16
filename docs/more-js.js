window.onload = function() {
  //Change master branch to main
  var ghSrc = document.querySelectorAll(".book-extra ul a");
  ghSrc.forEach(a => {
    a.href = a.href.replace("master", "main");
    a.target = "_blank";
  });
  
  //Change left-side navigation
  $("header h1").parent().css("flex-direction","column"); //Flex
  var r4dsTitle = document.querySelector("header h1");
  var newTitle = document.createElement("div");
  r4dsTitle.parentNode.insertBefore(newTitle, r4dsTitle);
  r4dsTitle.parentNode.insertBefore(r4dsTitle, newTitle);
  newTitle.innerHTML = '<ul class="list-unstyled"><li><a href="https://r4ds.had.co.nz" target="_blank">First edition</a> by Hadley Wickham &amp; Garrett Grolemund</li><li><a href="https://github.com/djvill/r4ds/" target="_blank">Forked &amp; lightly edited</a> by Dan Villarreal</li></ul>'
  $(newTitle).css("padding-left", "10px");
  r4dsTitle.querySelector("a").removeAttribute("href");

  //Wrap warning spans in divs (necessary because Md is disabled within divs) to add styling (incl warning icon)
	var warn = document.querySelectorAll("span.warning");
	//Wrap in divs (https://stackoverflow.com/a/6938316)
	warn.forEach(element => {
		var parent = element.parentNode;
		var wrapper = document.createElement('div');

		// set the wrapper as child (instead of the element)
		parent.replaceChild(wrapper, element);
		// set element as child of wrapper
		wrapper.appendChild(element);

		// add class styling to div
		wrapper.className = "warning";
	})
}
