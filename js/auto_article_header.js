// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayArticleHeader(postpage) {


	var htmlString = "";
	var postDate;
	const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];


	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/post_previews.json', postData => {

		postData.forEach (entry => {
			if (entry.post_page === postpage) {

				//formats date of entry for post
				postDate = new Date(entry.post_page+"T00:00:00");
				dateString = monthNames[postDate.getMonth()]+ " " + postDate.getDate() + ", " + postDate.getFullYear();

				htmlString += `<div class="container">`;
				htmlString += `<div class="row">`;
				htmlString += `<div class="col-lg-10 col-md-10 mx-auto">`;
				htmlString += `<br><br><br>`;
				htmlString += `<div style="font-size:12px; color:rgb(142, 47, 231);"> <b>WEEKLY ARTICLE</b></div>`;
				htmlString += `<br>`;
				htmlString += `<div class="post-heading">`;
				htmlString += `<h1>`+entry.post_title+`</h1>`;
				htmlString += `<h2 class="subheading"></h2>`;
				htmlString += `<span class="meta" style="font-size:14px;">By `;
				htmlString += `<a href="#">`+entry.post_author+`</a> / `;
				htmlString += dateString+`</span>`;
				htmlString += `</div>`;
				htmlString += `<br>`;
				htmlString += `<img src="mainpage/`+entry.image+`" alt="Card image cap" style="width:100%;height:auto;">`;
				htmlString += `<br><br><br>`;
				htmlString += `</div>`;
				htmlString += `</div>`;
				htmlString += `</div>`;

				$("#articleHeader").append(htmlString);
				htmlString = "";
			}
		

		});
	});
}