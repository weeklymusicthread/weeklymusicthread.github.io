// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayPreviews() {

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString)
	const allTrigger = urlParams.get('num')
	console.log(allTrigger)

	var postCounter = 1;
	var numDisplay = 5;
	var i;


	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/post_previews.json', postData => {

		if (allTrigger == "All") {numDisplay = postData.length}
		console.log("numDisplay " + numDisplay)
	
		for (i = 0; i < numDisplay; i++) {
			 
				// we will use this to append the html to the right element, its how we 'group' the data
				var postId = 'post'+postCounter; 
				
				$("#previewSection").append('<div class="post-preview" id="'+postId+'"></div>');

				console.log(postData[i].post_page)
				$("#"+postId).append('<a href="'+postData[i].post_page+'.php"><h2 class="post-title">'+postData[i].post_title+'</h2><h3 class="post-subtitle">'+postData[i].post_subtitle+'</h3></a>');
				$("#"+postId).append('<p class="post-meta">Posted by '+'<a href="#">'+postData[i].post_author+' </a> on '+ postData[i].post_date+'</p>');
				if (i!=numDisplay-1){
					$("#"+postId).append('<hr>');
				}
				
				// increase the counter for the next iteration!
				postCounter++;
			
		};

		if (numDisplay < 99) {
			$("#previewSection").append('<br>');
			$("#previewSection").append('<div class="clearfix"><a class="btn btn-primary float-right" href="index.php?num=All">Older Posts &rarr;</a></div>');
			$("#previewSection").append('<br>');
		}
	});
}