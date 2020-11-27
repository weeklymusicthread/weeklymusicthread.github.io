// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayPosts(postPage) {
	console.log(postPage);
	//console.log(postData); 
	
	var postCounter = 1;
	
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
			if (entry.spotify_embed_link != null)  {
				$("#"+postId).append('<iframe src="'+entry.spotify_embed_link+'" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
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
}

// JSON representation of all song posts, to be filtered by post_page attribute
var postData = [
		{ 
			"song" : "A Forest",
			"artist" : "The Cure",
			"spotify_song_link" : "https://open.spotify.com/track/3O4TPMOgChXOerSdB5WENH",
			"spotify_embed_link" : "https://open.spotify.com/embed/track/3O4TPMOgChXOerSdB5WENH",
			"post_page" : "2020-11-26",
			"description_lines" : [
				"Hey guys come on The Cure is awesome, please tell me I am cool for liking it. Let's talk about our feelings, or let's just listen to The Cure tell us about their feelings in this number 12 hit single.",
				"This is my second paragraph about this stupid ass emo song. I love that shit though so you can suck it if you don't. How's that for a blog?"
			]
		}, 
		{ 
			"song" : "Take on Me",
			"artist" : "a-ha",
			"spotify_song_link" : "https://open.spotify.com/track/2WfaOiMkCvy7F5fcp2zZ8L",
			"spotify_embed_link" : "https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L",
			"post_page" : "2020-11-26",
			"description_lines" : [
				"Woo hoo my second post now i need more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. ",
				"This is my second paragraph about this stupid ass emo song. Woo hoo more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. End of second paragraph for second post",
				"And here is a third line! I can print as many desc lines as you give me! <i>Here is some italic. </i><b>Here is some bold</b> - but really you shouldn't use i/b tags, you should use <a href='https://stackoverflow.com/questions/38205797/how-to-combine-bold-and-italic-in-css/38205861'>CSS classes</a>  instead!"
			]
		},
		{ 
			"song" : "My Unknown Song",
			"artist" : "Ale Alejandro",
			"post_page" : "2020-11-26",
			"description_lines" : [
				"Nothin much to say, this song isn't real.",
				"Notice how I did not print a spotify embed link cuz this one don't got one in the json!",
				"I know its big, but I didn't pull it out for air.."
			]
		},
		{ 
			"song" : "Some other song",
			"artist" : "Some other band",
			"spotify_song_link" : "https://open.spotify.com/track/xx",
			"spotify_embed_link" : "https://open.spotify.com/embed/track/xx",
			"post_page" : "2020-12-01",
			"description_lines" : [
				"Woo hoo my third post but this shouldn't display with the first two posts because this is for a different date! now i need more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. ",
				"This is my second paragraph about nothing. Woo hoo more text, I am jus going to repeat myself cuz I am bored. Woo hoo more text, I am jus going to repeat myself cuz I am bored. End of second paragraph for third post"
			]
		}
	]