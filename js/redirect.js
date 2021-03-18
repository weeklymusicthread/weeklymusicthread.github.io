
function redirect() {


	var htmlString = "";

	// jquery function to get the json file and then put it into memory as "postData" var
	$.getJSON('https://weeklymusicthread.com/post_previews.json', postData => {

		htmlString += `<meta http-equiv="refresh" content="0; URL=https://www.weeklymusicthread.com/`;
		htmlString += postData[0].post_page;
		htmlString += `.php`;
		htmlString += `" />`
		
		console.log(htmlString);
		
		$("#redirectHeader").append(htmlString);

	});
}