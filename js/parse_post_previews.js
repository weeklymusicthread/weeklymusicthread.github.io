// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayPreviews() {

	var postCounter = 1;
	var numDisplay = 3;
	var i;
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/post_previews.json', postData => {
	
		for (i = 0; i < numDisplay-1; i++) {
			 
				// we will use this to append the html to the right element, its how we 'group' the data
				var postId = 'post'+postCounter; 
				
				$("#previewSection").append('<div class="post-preview" id="'+postId+'"></div>');

				// test comment to see if site pulls
					
				$("#"+postId).append('<a href="'+postData[i].post_page+'.php>');
				$("#"+postId).append('<h2 class="post-title">');
				$("#"+postId).append(postData[i].post_title);
				$("#"+postId).append('</h2>');
				$("#"+postId).append('<h3 class="post-subtitle">');
				$("#"+postId).append(postData[i].post_subtitle);
				$("#"+postId).append('</h3></a>');
				$("#"+postId).append('<p class="post-meta">Posted by');
				$("#"+postId).append('<a href="#">'+postData[i].post_author+'</a>');
				$("#"+postId).append(postData[i].post_date);
				$("#"+postId).append('</p>');
				$("#"+postId).append('<hr>');
				
				// increase the counter for the next iteration!
				postCounter++;
			
		};

		$("#previewSection").append('<div class="clearfix"><a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a></div>');

	});
}