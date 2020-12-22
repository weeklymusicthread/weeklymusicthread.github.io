function searchName() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString)
	const searchedArtist = urlParams.get('artist')
	console.log(searchedArtist)

	/* $("#postHeading").append('<h1>'+searchedArtist+'</h1>'); */

	var postCounter = 1;
	var artistMatch = false;
	var pageTitle = "No Results for " + searchedArtist;
	var firstMatch = true;
	var p;
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/music_entries.json', postData => {
	
		postData.forEach (entry => {

			artistMatch = false;

			// checks if artist is an Array and if it matches search term
			if (Array.isArray(entry.artist)) {
				entry.artist.forEach (artEnt => {
					if (artEnt.toLowerCase() === searchedArtist.toLowerCase()) {
						
						pageTitle = artEnt;
						artistMatch = true
						
						if (firstMatch) {
							$("#postHeading").append('<h1>'+pageTitle+'</h1>');
							firstMatch = false;
						}
						
					}
				});
			} else if (entry.artist.toLowerCase() === searchedArtist.toLowerCase()) {
				
				pageTitle = entry.artist;
				artistMatch = true

				if (firstMatch) {
					$("#postHeading").append('<h1>'+pageTitle+'</h1>');
					firstMatch = false;
				}
				
			}

			if (artistMatch) { 
				console.log("Matched on entry");
				console.log(entry);
			
				var postId = 'post'+ postCounter; 
				var artistId = 'artist' + postCounter;
				
				$("#postSection").append('<div class="post-container" id="'+postId+'"></div>'); 
				
				if (entry.song != null) {
					$("#"+postId).append('<p><b id ='+artistId+'> "'+entry.song+'" by ');
					if (Array.isArray(entry.artist)){
						p = 1;
						entry.artist.forEach (artEnt => {
							$("#"+artistId).append('<a href="search.html?artist='+artEnt+'">"'+artEnt+'"</a>');
							if (p != entry.artist.length) {$("#"+artistId).append(", ");}
							p = p+1;
						});
					} else {$("#"+artistId).append('<a href="search.html?artist='+entry.artist+'">"'+entry.artist+'"</a> ');}
					$("#"+artistId).append('</b> &nbsp; <span style = "color:rgb(180, 180, 180)">(posted on '+entry.post_page + ')</span></p>');

					if (entry.spotify_id != null) {
						$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/track/'+entry.spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
					}
				} else {
					console.log("Song Null");
					$("#"+postId).append('<p><b><i> '+entry.album+''+'</i> by '+ '<a href="search.html?artist='+entry.artist+'">"'+entry.artist+'"</a>'+' </b>' + '&nbsp; <span style = "color:rgb(180, 180, 180)">(posted on '+entry.post_page + ')</span></p>');
					$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/album/'+entry.spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
				}
				
				
				entry.description_lines.forEach (descLine => {
					$("#"+postId).append('<p>'+descLine+'</p>');
				});
				
				$("#postSection").append('<br/>');
				
				postCounter++;
			}
		});

		if (firstMatch) {

			console.log("THIS NEW THING FIRED")
			$("#postHeading").append('<h1>'+pageTitle+'</h1>');
		
		}
	
	});

}