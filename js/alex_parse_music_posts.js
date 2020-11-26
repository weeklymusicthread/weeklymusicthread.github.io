function displayPosts(postPage) {
	console.log(postPage);
	//console.log(postData);
	var postCounter = 1;
	postData.forEach(entry => {
		if (entry.post_page === postPage) {
			console.log("Matched on entry");
			console.log(entry);
			var postId = 'post'+postCounter;
			$("#postSection").append('<div class="post-container" id="'+postId+'"></div>');
			$("#"+postId).append('<h3>Song: '+entry.song+'</h3>');
			$("#"+postId).append('<h4>Artist: '+entry.artist+'</h4>');
			$("#"+postId).append('<p>'+entry.music_post_desc1+'</p>');
			$("#"+postId).append('<p>'+entry.music_post_desc2+'</p>');
			$("#postSection").append('<br/><hr/><br/>');
			postCounter++;
		}
	});
}

var postData = [
		{ 
			"song" : "A Forest",
			"artist" : "The Cure",
			"spotify_song_link" : "https://open.spotify.com/track/3O4TPMOgChXOerSdB5WENH",
			"spotify_embed_link" : "https://open.spotify.com/embed/track/3O4TPMOgChXOerSdB5WENH",
			"post_page" : "2020-11-26",
			"music_post_desc1" : "Hey guys come on The Cure is awesome, please tell me I am cool for liking it. Let's talk about our feelings, or let's just listen to The Cure tell us about their feelings in this number 12 hit single.",
			"music_post_desc2" : "This is my second paragraph about this stupid ass emo song. I love that shit though so you can suck it if you don't. How's that for a blog?"
		}, 
		{ 
			"song" : "Take on Me",
			"artist" : "a-ha",
			"spotify_song_link" : "https://open.spotify.com/track/2WfaOiMkCvy7F5fcp2zZ8L",
			"spotify_embed_link" : "https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L",
			"post_page" : "2020-11-26",
			"music_post_desc1" : "Woo hoo my second post now i need more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. ",
			"music_post_desc2" : "This is my second paragraph about this stupid ass emo song. Woo hoo more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. End of second paragraph for second post"
		},
		{ 
			"song" : "Some other song",
			"artist" : "Some other band",
			"spotify_song_link" : "https://open.spotify.com/track/xx",
			"spotify_embed_link" : "https://open.spotify.com/embed/track/xx",
			"post_page" : "2020-12-01",
			"music_post_desc1" : "Woo hoo my third post but this shouldn't display with the first two posts because this is for a different date! now i need more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. ",
			"music_post_desc2" : "This is my second paragraph about nothing. Woo hoo more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. End of second paragraph for third post"
		}
	]