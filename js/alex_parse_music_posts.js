function displayPosts(postPage) {
	console.log(postPage);
	$.getJSON( "../music_posts.json", function( data ) {
		console.log(data); //json output 
	});
}