function displayAll() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString)
	const pageNum = urlParams.get('page')
	console.log(pageNum)

	var postCounter = 1;
	var i;
	var resultsPage = Number(pageNum);
	var prevPage = Number(pageNum)-1;
	var pageSize = 10;
	
	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/music_entries.json', postData => {
	
		console.log(postData.length)

		for (i = (resultsPage-1)*pageSize; i < (resultsPage*pageSize); i++) {

			var postId = 'post'+ postCounter;
			var artistId = 'artist' + postCounter;

			$("#postSection").append('<div class="post-container" id="'+postId+'"></div>');
			console.log('contains spotify ID: '+postData[i].spotify_id);
			if (postData[i].song != null) {
				$("#"+postId).append('<p><b id ='+artistId+'> "'+postData[i].song+'" by ');

				if (Array.isArray(postData[i].artist)) {
					postData[i].artist.forEach (artEnt => {
						$("#"+artistId).append('<a href="search.html?artist='+artEnt+'">"'+artEnt+'"</a>');
					});
				} else {$("#"+artistId).append('<a href="search.html?artist='+postData[i].artist+'">"'+postData[i].artist+'"</a> ');}

				$("#"+artistId).append('</b> &nbsp; <span style = "color:rgb(180, 180, 180)">(posted on '+postData[i].post_page + ')</span></p>');
				
				if (postData[i].spotify_id != null) {
					$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/track/'+postData[i].spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
				}
			} else {
				console.log("Song Null");
				$("#"+postId).append('<p><b><i> '+postData[i].album+''+'</i> by '+ '<a href="search.html?artist='+postData[i].artist+'">"'+postData[i].artist+'"</a>'+' </b>' + '&nbsp; <span style = "color:rgb(180, 180, 180)">(posted on '+postData[i].post_page + ')</span></p>');
				if (postData[i].spotify_id != null) {
					$("#"+postId).append('<div style="float: left; clear: left; padding-right: 2em;"><iframe src="https://open.spotify.com/embed/album/'+postData[i].spotify_id+'" width="300" height="380" scrolling="no" frameborder="0" float="right" allowtransparency="true" allow="encrypted-media"></iframe></div>');
				}
			}
			

			postData[i].description_lines.forEach (descLine => {
				$("#"+postId).append('<p>'+descLine+'</p>');
			});
			
			$("#postSection").append('<br/>');
			
			postCounter++;
		}

		resultsPage = (+resultsPage+1)
		console.log(prevPage)
		resultsPage = String(resultsPage)
		prevPage = String(prevPage)

		$("#postSection").append('<br>');
		$("#postSection").append('<div id="paginationRow" style="display:block">'); // open the paginationRow div
		if (resultsPage > 2) {
			$("#paginationRow").append('<div class="column float-left" style="display:inline-block"><div class="clearfix"><a class="btn btn-primary" href="music.php?page='+prevPage+'">&larr; Prev Page</a></div></div>');
			$("#paginationRow").append('<div class="column float-right" style="display:inline-block"><div class="clearfix"><a class="btn btn-primary" href="music.php?page='+resultsPage+'">Next Page &rarr;</a></div></div>');
		} else {
			$("#paginationRow").append('<div class="column float-right style="display:inline-block""><div class="clearfix"><a class="btn btn-primary" href="music.php?page='+resultsPage+'">Next Page &rarr;</a></div></div>');
		}
		$("#postSection").append('</div>'); // close the paginationRow div

		$("#postSection").append('<br><br><br>');
	
	});
}