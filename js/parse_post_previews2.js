// This function would be called by individual html post pages by supplying the postPage filter
// which as of now would be the post date (e.g. 2020-11-26). This function iterates through all
// matching postData items and then displays them on the page by appending html
function displayPreviews() {

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const page = urlParams.get('page');
	console.log(page);


	var hash1 = window.location.hash.substring(1);
	var postCounter = 1;
	var numDisplay = 6;
	var pageNumber = 1;
	var prevPage = 1;
	var nextPage = 1;
	var x;
	var i;
	var htmlString = "";
	var postDate;
	const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];


	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/post_previews.json', postData => {


		if (page !== null) {
			pageNumber = parseInt(page,10);
		}

			
		//formats date of entry for post
		postDate = new Date(postData[0].post_page+"T00:00:00");
		dateString = monthNames[postDate.getMonth()]+ " " + postDate.getDate() + ", " + postDate.getFullYear();

		if (page == null) {
			htmlString += `<div class="container imgborder" onclick="location.href='`+postData[0].post_page+`.php';" style="cursor: pointer;">`;
			htmlString += `<img src="mainpage/`+postData[0].image+`" alt="Card image cap" style="width:100%;height:500px;">`;
			htmlString += `<div class="image-text">`;
			htmlString += `<h2>`+postData[0].post_title+`</h2>`;
			htmlString += postData[0].post_author + `<br>`;
			htmlString += dateString;
			htmlString += `</div>`;
			htmlString += `</div>`;
			htmlString += `<br>`;

			$("#previewSection").append(htmlString);
			htmlString = "";
		}

		htmlString += `<div class="strike">`;
		htmlString += `<span><b>Weekly Articles</b></span>`;
		htmlString += `</div>`;

		$("#previewSection").append(htmlString);
		htmlString = "";

	
		for (x = 1; x <= numDisplay; x++) {

			console.log("PAGE " + page);
			if (page !== null) {
				numDisplay = 8;
				i = (page-1) * numDisplay + x - 1;
			} else {
				i = x;
			}
			console.log("ITERATION " + i + " for array length " + postData.length)

			if (i < postData.length) {
				//formats date of entry for post
				postDate = new Date(postData[i].post_page);
				dateString = monthNames[postDate.getMonth()]+ " " + postDate.getDate() + ", " + postDate.getFullYear();	

				htmlString += `<div class="post-preview" id="post` + postCounter + `">`;
				htmlString += `<img class="preview-image" src="mainpage/` + postData[i].image + `">`;
				htmlString += `<a href="`+postData[i].post_page+`.php">`;
				htmlString += `<h2 class="post-title">`+postData[i].post_title+`</h2>`;
				htmlString += `<div class="post-subtitle preview-text">`+postData[i].post_subtitle+`</div>`;
				htmlString += `</a>`;
				htmlString += `<p class="post-meta" style="left:200px;">Posted by `+postData[i].post_author+` on `+dateString;
				htmlString += `</div>`;	
				htmlString += `<hr>`;
			}

			$("#previewSection").append(htmlString);
			htmlString = "";

			postCounter++;
			
		};

		// insert pagination
		prevPage = pageNumber - 1;
		nextPage = pageNumber + 1;

htmlString += `<br>`;
		htmlString += `<nav aria-label="...">`;
		htmlString += `<ul class="pagination pagination-sm justify-content-center">`;
		if (pageNumber === 1) {
			htmlString += `<li class="page-item disabled">`;
			htmlString += `<span class="page-link">Previous</span>`;
			htmlString += `</li>`;
		} else {
			htmlString += `<li class="page-item">`;
			htmlString += `<a class="page-link" href="articles.php?page=`+prevPage+`">Previous</a>`;
			htmlString += `</li>`;
			htmlString += `<li class="page-item"><a class="page-link" href="/articles.php?page=`+prevPage+`">`+prevPage+`</a></li>`;
		}
		htmlString += `<li class="page-item active">`;
		htmlString += `<span class="page-link">`;
		htmlString += pageNumber;
		htmlString += `<span class="sr-only">(current)</span>`;
		htmlString += `</span>`;
		htmlString += `</li>`;
		htmlString += `<li class="page-item"><a class="page-link" href="/articles.php?page=`+nextPage+`">`+nextPage+`</a></li>`;
		nextPage++;
		htmlString += `<li class="page-item"><a class="page-link" href="/articles.php?page=`+nextPage+`">`+nextPage+`</a></li>`;
		nextPage++;
		htmlString += `<li class="page-item"><a class="page-link" href="/articles.php?page=`+nextPage+`">`+nextPage+`</a></li>`;
		htmlString += `<li class="page-item">`;
		htmlString += `<a class="page-link" href="articles.php?page=`+nextPage+`">Next</a>`;
		htmlString += `</li>`;
		htmlString += `</ul>`;
		htmlString += `</nav>`;

		$("#previewSection").append(htmlString);
		htmlString = "";

	});
}