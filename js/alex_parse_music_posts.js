// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayPosts(postPage) {
	console.log(postPage);
	//console.log(postData); 
	
	var postCounter = 1;
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('http://weeklymusicthread.com/song_post_data.json', postData => {
	
		postData.forEach (entry => {
			if (entry.post_page === postPage) { // this is how we filter per page!
				console.log("Matched on entry");
				console.log(entry);
				
				// we will use this to append the html to the right element, its how we 'group' the data
				var postId = 'post'+postCounter; 
				
				$("#postSection").append('<div class="post-container" id="'+postId+'"></div>'); // notice the element ID attr is set to the postId counter variable! that is how we can dynamically find the right div to append the song post data to!
				
				$("#"+postId).append('<h3>Song: '+entry.song+'</h3>');
				$("#"+postId).append('<h4>Artist: '+entry.artist+'</h4>');
				
				// what if we didn't supply a spotify embed link? no prob, only print this if we have one - you may want to employ this kind of simple 'if' logic for other fields
				if (entry.spotify_id != null)  {
					$("#"+postId).append('<iframe src="https://open.spotify.com/embed/track/'+entry.spotify_id+'" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
				}
				
				// this will iterate over the array of description lines, so doesn't care how many/few there are, it prints each element as its own p tag
				entry.description_lines.forEach (descLine => {
					$("#"+postId).append('<p>'+descLine+'</p>');
				});
				
				$("#postSection").append('<br/><hr/><br/>');
				
				// increase the counter for the next iteration!
				postCounter++;
			}
		});
	});
}