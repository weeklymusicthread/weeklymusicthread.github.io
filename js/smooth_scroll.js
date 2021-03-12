function smoothscroll() {

	console.log("SMOOTH SCROLL IS RUNNING");

	if (window.location.hash !== "") {

		console.log(window.location.hash);
		var hash1 = window.location.hash.substring(1);
		var element = document.getElementById(hash1)
		var yOffset = $("#mainNav").outerHeight();
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
			
		window.scrollTo({top: y, behavior: 'smooth'});
		
	} else { }
	


	
}