// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayPreviews() {

	var postCounter = 1;
	var numDisplay = 3;
	var i;
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/post_previews.json', postData => {
	
		for (i = 0; i < numDisplay; i++) {
			 
				// we will use this to append the html to the right element, its how we 'group' the data
				var postId = 'post'+postCounter; 
				
				$("#previewSection").append('<div class="post-preview" id="'+postId+'"></div>');

				// href need to be all on one line?
				//ALEX	
				console.log(postData[i].post_page)
				$("#"+postId).append('<a href="'+postData[i].post_page+'.php><h2 class="post-title">'+postData[i].post_title+'</h2><h3 class="post-subtitle">'+postData[i].post_subtitle+'</h3></a>');
				$("#"+postId).append('<p class="post-meta">Posted by '+'<a href="#">'+postData[i].post_author+' </a> on '+ postData[i].post_date+'</p>');
				$("#"+postId).append('<hr>');
				
				// increase the counter for the next iteration!
				postCounter++;
			
		};

		$("#previewSection").append('<div class="clearfix"><a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a></div>');

	});
}