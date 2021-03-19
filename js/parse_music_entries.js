// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayPosts(postPage) {
	
	var postCounter = 1;
	var p;
	var htmlString;
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/music_entries.json', postData => {
	
		postData.forEach (entry => {
			if (entry.post_page === postPage) { // this is how we filter per page!
				console.log("Matched on entry");
				console.log(entry);
				
				// we will use this to append the html to the right element, its how we 'group' the data
				var postId = 'post'+ postCounter; 
				var artistId = 'artist' + postCounter;
				
				$("#postSection").append('<div class="post-container" id="'+postId+'"></div>'); // notice the element ID attr is set to the postId counter variable! that is how we can dynamically find the right div to append the song post data to!

				
				if (entry.song != null) {
					$("#"+postId).append('<p><b id ='+artistId+'> "'+entry.song+'" by ');
					if (Array.isArray(entry.artist)) {
						p = 1;
						entry.artist.forEach (artEnt => {
							$("#"+artistId).append('<a href="search.html?artist='+artEnt+'">"'+artEnt+'"</a>');
							if (p != entry.artist.length) {$("#"+artistId).append(", ");}
							p = p+1;
						});
					} else {$("#"+artistId).append('<a href="search.html?artist='+entry.artist+'">"'+entry.artist+'"</a> ');}
					
					if (entry.spotify_id != null) {
						$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/track/'+entry.spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
					}
				}   else {
						$("#"+postId).append('<p><b><i>'+entry.album+'</i> by '+ '<a href="search.html?artist='+entry.artist+'">"'+entry.artist+'"</a>'+'</b></p>');
						if (entry.spotify_id != null) {
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


			}
		});

		smoothscroll();
	});
}