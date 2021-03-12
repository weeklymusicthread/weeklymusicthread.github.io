function displayCards() {
	
	var cardCounter = 1;
	var entryNum = 1;
	var dateCheck = "";
	var cardSubCat = "";
	var reviewedItem = "";
	var postDate;
	var dateString;
	var htmlString = "";
	const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];

	
	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/music_entries.json', postData => {
	
		postData.forEach (entry => {

			if (cardCounter <= 5) {

				console.log("Card Counter " + cardCounter);
				console.log(entry.artist);

				cardCounter = cardCounter + 1;

				

				// checks to see which music entry within the article so we can create the hash anchor
				if (dateCheck === entry.post_page) {
					entryNum = entryNum + 1;
				} else {
					entryNum = 1;
				}

				dateCheck = entry.post_page;

				//determines if entry is an album or song review
				if (entry.song != null) {
					cardSubCat = "TRACK REVIEW";
					reviewedItem = '"'+entry.song+'"';
				} else {
					cardSubCat = "ALBUM REVIEW";
					reviewedItem = entry.album;
				}

				//formats date of entry for post
				postDate = new Date(entry.post_page+"T00:00:00");
				dateString = monthNames[postDate.getMonth()]+ " " + postDate.getDate() + ", " + postDate.getFullYear();

				htmlString += '<div class="container">';
				htmlString += '<img src="img/'+entry.image+'" alt="Card image cap" style="width:100%;height:auto;">';
				htmlString += '<div class="text-block" onclick="location.href=\''+entry.post_page+'.php#post'+entryNum+'\';" style="cursor: pointer;">';
				htmlString += '<div class="card-category">'+cardSubCat+'</div>';
				htmlString += '<div class="card-music">'+entry.artist+' / '+ reviewedItem + '</div>';
				htmlString += '<div class="card-date">'+dateString+'</div>';
				htmlString += '</div>';
				htmlString += '</div>';

				$("#music-cards").append(htmlString);

				$("#music-cards").append('<br>');

				htmlString = "";

			
			}

			
		});

	});

	
}