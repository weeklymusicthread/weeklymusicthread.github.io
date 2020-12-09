// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayPrevies(postPage) {
	console.log(postPage);
	//console.log(postData); 
	
	var postCounter = 1;
	var numDisplay = 3;
	var i;
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/post_previews.json', postData => {
	
		for (i = 0; i < numdisplayer-1; i++) {
			 
				// we will use this to append the html to the right element, its how we 'group' the data
				var postId = 'post'+postCounter; 
				
				$("#previewSection").append('<div class="post-container" id="'+postId+'"></div>'); // notice the element ID attr is set to the postId counter variable! that is how we can dynamically find the right div to append the song post data to!
				$("#previewSection").append('<div class="post-preview"> id="'+postId+'"></div>');
				
				// what if we didn't supply a spotify embed link? no prob, only print this if we have one - you may want to employ this kind of simple 'if' logic for other fields
				if (entry.spotify_id != null)  {
					if (entry.song != null) {
						console.log('contains spotify ID: '+entry.spotify_id);
						$("#"+postId).append('<p><b>"'+entry.song+'" by '+ '<a href="search.html?artist='+entry.artist+'">"'+entry.artist+'"</a>'+'</b></p>');
						$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/track/'+entry.spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
					}	else {
						$("#"+postId).append('<p><b><i>'+entry.album+'</i> by '+ '<a href="search.html?artist='+entry.artist+'">"'+entry.artist+'"</a>'+'</b></p>');
						$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/album/'+entry.spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
					}
				}
				
				// this will iterate over the array of description lines, so doesn't care how many/few there are, it prints each element as its own p tag
				entry.description_lines.forEach (descLine => {
					$("#"+postId).append('<p>'+descLine+'</p>');
				});
				
				$("#postSection").append('<br/>');
				
				// increase the counter for the next iteration!
				postCounter++;
			
		};
	});
}