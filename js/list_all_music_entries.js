function displayAll() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString)
	const searchedArtist = urlParams.get('artist')
	console.log(searchedArtist)

	$("#postHeading").append('<h1>'+searchedArtist+'</h1>');

	var postCounter = 1;
	var i;
	var resultsPage = 1;
	var pageSize = 10;
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/music_entries.json', postData => {
	

		for (i = (resultsPage-1)*pageSize; i < (resultsPage*pageSize); i++) {

			var postId = 'post'+ postCounter;
			$("#postSection").append('<div class="post-container" id="'+postId+'"></div>');

			if (postData[i].spotify_id != null)  {
				console.log('contains spotify ID: '+postData[i].spotify_id);
				if (postData[i].song != null) {
					$("#"+postId).append('<p><b> "'+postData[i].song+''+'" by '+ '<a href="search.html?artist='+postData[i].artist+'">"'+postData[i].artist+'"</a>'+' </b>' + '&nbsp; <span style = "color:rgb(180, 180, 180)">(posted on '+postData[i].post_page + ')</span></p>');
					$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/track/'+postData[i].spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
				} else {
					console.log("Song Null");
					$("#"+postId).append('<p><b><i> '+postData[i].album+''+'</i> by '+ '<a href="search.html?artist='+postData[i].artist+'">"'+postData[i].artist+'"</a>'+' </b>' + '&nbsp; <span style = "color:rgb(180, 180, 180)">(posted on '+postData[i].post_page + ')</span></p>');
					$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/album/'+postData[i].spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
				}
			}

			postData[i].description_lines.forEach (descLine => {
				$("#"+postId).append('<p>'+descLine+'</p>');
			});
			
			$("#postSection").append('<br/>');
			
			postCounter++;
		}

		$("#previewSection").append('<br>');
		$("#previewSection").append(`<div class="clearfix"><a class="btn btn-primary float-right" href="index.php?page=${resultsPage+1}">Next Page &rarr;</a></div>`);
		$("#previewSection").append('<br>');
	
	});
}