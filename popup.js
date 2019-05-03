let bookmarkID = "";

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	let tab = tabs[0];

	chrome.bookmarks.search({url: tab.url}, function(results) {
		if (results.length >= 1) {
			document.querySelector(".colc-tilea>input[type='text']").value = results[0].title;
			document.querySelector(".colc-tilea>input[type='url']").value = results[0].url;

			bookmarkID = results[0].id;
		}else{
			document.querySelector(".colc-tilea>input[type='text']").value = tab.title;
			document.querySelector(".colc-tilea>input[type='url']").value = tab.url;

			document.querySelector(".colc-img").style = "background-image: url('images/tile-bg-" + (Math.round(Math.random() * 7) + 1) + ".jpg');";

			chrome.bookmarks.create({'title': tab.title, 'url': tab.url}, function(result) {
				bookmarkID = result.id;
			});
		}
	});
});

document.querySelector(".colc-viewt").onclick = function() {
	chrome.tabs.create({url: 'chrome://bookmarks/'});
};

document.querySelector(".colc-confi").onclick = function() {
	if (bookmarkID != "") {
		chrome.bookmarks.remove(bookmarkID);
	}

	window.close();
};

