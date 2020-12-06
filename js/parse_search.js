function searchName() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString)
	const searchedArtist = urlParams.get('artist')
	console.log(searchedArtist)

	$("#postHeading").append('<h1>'+searchedArtist+'</h1>');

	var postCounter = 1;
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('http://weeklymusicthread.com/music_entries.json', postData => {
	
		postData.forEach (entry => {
			if (entry.artist === searchedArtist) { 
				console.log("Matched on entry");
				console.log(entry);
			
				var postId = 'post'+ postCounter; 
				
				$("#postSection").append('<div class="post-container" id="'+postId+'"></div>'); 
				
				$("#"+postId).append('<p><u> "'+entry.song+''+'" by '+entry.artist+' </u>' + '&nbsp; <span style = "color:rgb(180, 180, 180)">(posted on '+entry.post_page + ')</span></p>');
				
				if (entry.spotify_id != null)  {
					console.log('contains spotify ID: '+entry.spotify_id);
					$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/track/'+entry.spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
						
				}
				
				entry.description_lines.forEach (descLine => {
					$("#"+postId).append('<p>'+descLine+'</p>');
				});
				
				$("#postSection").append('<br/>');
				
				postCounter++;
			}
		});
	});
}